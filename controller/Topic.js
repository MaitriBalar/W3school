const TOPIC = require('../model/topic')

exports.AddTopic = async function(req, res, next) {
    try {
        if(!req.body.title || !req.body.discription || !req.body.image || !req.body.category || !req.body.subcategory) {
            throw new Error("Enter Valid Field");
        }
        const data = await TOPIC.create(req.body);

        res.status(201).json({
            status : "Success",
            message : "Data Added",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.ShowTopic = async function(req, res, next) {
    try {
        const data = await TOPIC.find().populate('category').populate('subcategory');
        if(!data) {
            throw new Error("Data not Found");
        }

        res.status(201).json({
            status : "Success",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.UpdateTopic = async function(req, res, next) {
    try {
        const data = await TOPIC.findByIdAndUpdate(req.query.id, req.body);
        if(!data) {
            throw new Error("Data not Found");
        }

        res.status(201).json({
            status : "Success",
            message : "Data Updated",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.DeleteTopic = async function(req, res, next) {
    try {
        const data = await TOPIC.findByIdAndDelete(req.query.id, req.body);
        if(!data) {
            throw new Error("Data not Found");
        }

        res.status(201).json({
            status : "Success",
            message : "Data Deleted",
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}