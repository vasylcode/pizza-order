const Order = require('../../models/Order');

class orderController {
    async add(req, res) {
        try {
            const {food, price, email, name, address, pay} = req.body;
            const order = new Order({food: food, price: price, email: email, name: name, address: address, pay: pay});
            await order.save();
            return res.json({message: "Order was successfuly added"});
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Add order error'});
        }
    }
    
    async delete(req, res) {
        try {
            Order.findByIdAndDelete(req.query.id, (error, deleted) => {
                if (!error) {
                    res.json({message: deleted});
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Delete order error'})
        }
    }

    async get(req, res) {
        try {
            const orders = await Order.find();
            res.json(orders);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new orderController();