const CAT = require('../model/category');

exports.AddCat = async function (req, res, next) {
    try {
        if (!req.body.name || !req.body.colorcode) {
            throw new Error("Enter Valid Field");
        }
        const data = await CAT.create(req.body);

        res.status(201).json({
            status: "Success",
            message: "Data Added",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ShowCat = async function (req, res, next) {
    try {
        const data = await CAT.find();
        if(!data) {
            throw new Error("Data not Found")
        }
        res.status(201).json({
            status: "Success",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.UpdateCat = async function (req, res, next) {
    try {
        const data = await CAT.findByIdAndUpdate(req.query.id, req.body);
        if(!data) {
            throw new Error("Data not Found")
        }
        res.status(201).json({
            status: "Success",
            message : "Data Updated",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.DeleteCat = async function (req, res, next) {
    try {
        const data = await CAT.findByIdAndDelete(req.query.id, req.body);
        if(!data) {
            throw new Error("Data not Found")
        }
        res.status(201).json({
            status: "Success",
            message : "Data Deleted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}