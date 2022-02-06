const express = require ('express');
const router = express.Router();

const {getAllCustomers, getAddCustomerView, customerAction} = require('../controllers/customerController');

router.get('/' , getAllCustomers);
router.get('/addCustomer', getAddCustomerView);
router.post('/addCustomerAction', customerAction);

module.exports = router