const bcrypt = require("bcrypt");
const _ = require("lodash");
const axios = require("axios");
const otpGenerator = require('otp-generator');
const Otp = require('../models/otpModel');
const twilio = require('twilio');
require('dotenv').config();

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
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;

    const client = new twilio(accountSid, authToken);

    try {
        client.messages.create({
            body:`Your OTP is ${OTP}`,
            to: `+918693077281`,
            from: '+19377304007'
        })
        .then((message) => console.log(message.sid));

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