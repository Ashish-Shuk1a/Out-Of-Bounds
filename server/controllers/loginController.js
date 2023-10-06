const bcrypt = require("bcrypt");
const _ = require("lodash");
const axios = require("axios");
const otpGenerator = require('otp-generator');
const  Otp  = require('../models/otpModel');

//Random otp generation
function generateOTP(length) {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return otp;
}

//Sending otp
const getOTP = async (req, res) => {
    const number = req.body.number;
    let OTP = generateOTP(6);
    
    // const url = `https://www.fast2sms.com/dev/bulkV2?authorization=DMbg5uWa9w68NYJKeP1EqQBXkcpOCzvhH47ysRn0VtUxAf3Fio1HuZiC0qph4Fr65VSwjkIPcM27XLnt&route=dlt&sender_id=BURATA&message=156711&variables_values=${OTP}%7C%7C&flash=0&numbers=${number}`;

    try {
        // axios.get(url)
        //     .then(response => {
        //         // Process the response data
        //         const data = response.data;
        //         // Perform any further operations with the response data
        //     })
        //     .catch(error => {
        //         // Handle any errors that occur during the request
        //         console.error('Error:', error);
        //     });

        const otp = new Otp({ number: number, otp: OTP });
        const salt = await bcrypt.genSalt(10)
        otp.otp = await bcrypt.hash(otp.otp, salt);
        const result = await otp.save();
        return res.status(200).send(
            [
                {
                    "status": "success",
                    "code": 200,
                    "data": { OTP, result }
                }
            ]
        );
    } catch (error) {
        return res.status(500).json([{
            "status": "fail",
            "code": 500,
            "message": error.message
        }])
    }

}


const verifyOtp = async (req, res) => {
    try {
        const number = req.body.number
        const otp = req.body.otp
        const otpHolder = await Otp.find({
            number: number
        });
        if (!otpHolder) {
            return res.status(400).json([{
                "status": "error",
                "code": 400,
                "message": "OTP has expired"
            }])
        }
        const rightOtpFind = otpHolder[otpHolder.length - 1];
        const validUser = await bcrypt.compare(otp, rightOtpFind.otp);

        if (rightOtpFind.number === number && validUser) {

            const OTPDelete = await Otp.deleteMany({
                number: rightOtpFind.number
            });
            return res.status(200).send([{
                "status": "success",
                "code": 200,
                "message": "OTP verified successfully",
            }]);
        } else {
            return res.status(404).json([{
                "status": "error",
                'code': 404,
                "message": "Wrong OTP"
            }])
        }
    } catch (error) {
        res.status(500).json([{
            "status": "fail",
            "code": 500,
            "message": "Internal Server Error"
        }])
    }
}

module.exports = {
    getOTP,
    verifyOtp
}