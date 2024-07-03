var express = require('express');
var router = express.Router();
const CatController = require('../controller/Category');
const SubCatController = require('../controller/SubCategory');
const TopicController = require('../controller/Topic');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ---------------------------- CATEGORY API -------------------------------------------

router.post('/category/add', CatController.AddCat)

router.get('/category/show', CatController.ShowCat)

router.patch('/category/update', CatController.UpdateCat)

router.delete('/category/delete', CatController.DeleteCat)

// ---------------------------- SUBCATEGORY API -----------------------------------------

router.post('/subcategory/add', SubCatController.AddSubCat)

router.get('/subcategory/show', SubCatController.ShowSubCat)

router.patch('/subcategory/update', SubCatController.UpdateSubCat)

router.delete('/subcategory/delet', SubCatController.DeleteSubCat)

// ---------------------------- TOPIC API -----------------------------------------

router.post('/topic/add', TopicController.AddTopic)

router.get('/topic/show', TopicController.ShowTopic)

router.patch('/topic/update', TopicController.UpdateTopic)

router.patch('/topic/update', TopicController.DeleteTopic)





module.exports = router;
