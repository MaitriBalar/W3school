const SUBCAT = require('../model/subcategory');

exports.AddSubCat =  async function (req, res, next) {
    try {
        if (!req.body.name || !req.body.category) {
            throw new Error("Enter Valid Field");
        }
        const data = await SUBCAT.create(req.body);

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

exports.ShowSubCat =  async function (req, res, next) {
    const data = await SUBCAT.find().populate('category');
    try {
        if (!data) {
            throw new Error("Data not Found");
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

exports.UpdateSubCat =  async function (req, res, next) {
    const data = await SUBCAT.findByIdAndUpdate(req.query.id, req.body);
    try {
        if (!data) {
            throw new Error("Data not Found");
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
exports.DeleteSubCat =  async function (req, res, next) {
    const data = await SUBCAT.findByIdAndDelete(req.query.id, req.body);
    try {
        if (!data) {
            throw new Error("Data not Found");
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


