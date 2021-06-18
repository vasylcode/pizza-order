const { Router } = require('express');
const router = Router();
const Pizza = require('../models/Pizza');

// @route   GET api/pizza
// @desc    Get All pizzas
// @access  Public
router.get('/', (req, res) => {
    try {
        if (req.query.category) {
            Pizza.find({ category: req.query.category }).then(items => res.json(items));
        } else {
            Pizza.find().then(items => res.json(items));
        }
    } catch (error) {
        res.status(500).json({message: "Error: " + error.message})
    }
});

// @route   POST api/pizza
// @desc    Create a pizza
// @access  Public
router.post('/', (req, res) => {
    const newPizza = new Pizza({
        name: req.body.name,
        image: req.body.image,
        types: req.body.types,
        sizes: req.body.sizes,
        price: req.body.price,
        category: req.body.category
    });

    newPizza.save().then(pizza => res.json(pizza));
});


module.exports = router;
