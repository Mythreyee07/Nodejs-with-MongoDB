const Order = require("../../models/order.js")

class orderDetails{
    
    //to find all orders
    async order_findAll(req, res) {
       await Order.find(function(err,data){
            if(err) {res.status(500).send({"error":true, "message":err.message});} 
            else {res.send(data);}
        });
    };


    //to create a order
    async order_create(req, res) {
        let order = new Order(
            {
                name: req.body.name,
                email:req.body.email,
                shipping_address:req.body.shipping_address,
                product_name:req.body.product_name,
                order_id:req.body.order_id
            }
        );
        await order.save(function (err) {
            if(err) { res.status(500).send({"error":true,"message":err.message});}
            else {res.send({"status":200,"error":false,"message": "Order created successfully!"});}
            })
    };


    //to find a particular order
    async order_findParticular(req, res) {
        await Order.findById(req.query.id, function(err, data) {
            if(err) { res.status(500).send({"error":true,"message":err.message});}
            else {res.send(data);}
        });
    };


   //to update a order
    async order_update(req, res) {
        await Order.findById(req.query.id, function(err, order) {
            if(err) {res.status(500).send({"error":true,"message":err.message});}
    
            order.name = req.body.name;
            order.email = req.body.email;
            order.shipping_address = req.body.shipping_address;
            order.product_name = req.body.product_name;
            order.order_id=req.body.order_id;

            order.save(function(err, data){
                if(err) {res.status(500).send({"error":true,"message":err.message});} 
                else {res.send({"status":200, "error":false, "message": "Order updated successfully!"});}
            });
        });
    };


    //to delete a order
    async order_delete(req, res) {
        await Order.remove({_id: req.query.id}, function(err, data) {
            if(err) {res.status(500).send({"error":true,"message":err.message});}
             else {res.send({"status":200,"error":false,"message": "Order deleted successfully!"})}
        });
    };
}

module.exports = exports= new orderDetails();