const { Router } = require('express');
const router = Router();
const Categories = require('../models/Categories');

// @route   GET api/categories
// @desc    Get All categories
// @access  Public
router.get('/', (req, res) => {
    try {
        Categories.find().then(items => res.json(items));
    } catch (error) {
        res.status(500).json({message: "Error: " + error.message})
    }
});

// @route   POST api/categories
// @desc    Create a categories
// @access  Public
router.post('/', (req, res) => {
    const newCategory = new Categories({
        name: req.body.name,
        id: req.body.id
    });

    newCategory.save().then(category => res.json(category));
});


module.exports = router;
