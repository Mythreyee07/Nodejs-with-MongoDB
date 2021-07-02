var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var OrderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    shipping_address: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    order_id: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema);
