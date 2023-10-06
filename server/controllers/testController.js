const Test = require('../models/testingModel');

const createUser = async (req, res) => {
    try {
        const { name, age, number } = req.body;
        const user = new Test({
            name: name,
            age: age,
            number: number,
        })
        await user.save();
        return res.status(201).json({
            "status": "success",
            "message": "User created successfully",
            "data": user
        })
    } catch (error) {
        return res.status(500).json({
            "status": "error",
            "message": "Internal server error",
            "error": error.message
        })
    }
}

const getUser = async(req,res)=>{
    const {id}=req.params;
    const user = await Test.findById(id);
    if(!user){
        return res.status(404).json({
            "status":"error",
            "message":"User not found"
        })
    }
    return res.status(200).json({
        "status":"success",
        "message":"User found",
        "data":user
    })
}

const updateUser = async(req,res)=>{
    const {id}=req.params;
    const {name,age,number}=req.body;
    const user = await Test.findById(id);
    if(!user){
        return res.status(404).json({
            "status":"error",
            "message":"User not found"
        })
    }
    user.name=name;
    user.age=age;
    user.number=number;
    await user.save();
    return res.status(200).json({
        "status":"success",
        "message":"User updated successfully",
        "data":user
    })
}

const deleteUser = async(req,res)=>{
    const id=req.params.id;
    const user = await Test.findByIdAndDelete(id)
    if(!user){
        return res.status(404).json({
            "status":"error",
            "message":"User not found"
        })
    }
    return res.status(200).json({
        "status":"success",
        "message":"User deleted successfully",
        "data":user
    })
}

module.exports={
    createUser,
    getUser,
    updateUser,
    deleteUser
}