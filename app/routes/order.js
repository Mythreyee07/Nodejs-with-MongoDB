const express = require('express');
const app = express();
const router = express.Router();

var bodyparser = require('body-parser');
app.use (bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


 var orderDetails = require('../service/orderDetails/orderDetails');


router.get('/order', orderDetails.order_findAll);
router.get('/order1', orderDetails.order_findParticular);
router.post('/order', orderDetails.order_create);
router.put('/order',orderDetails.order_update)
router.delete('/order',orderDetails.order_delete)



module.exports=router