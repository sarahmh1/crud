const{Customer, validate} = require ('../models/customer');

const getAllCustomers = async (req, res , next) => {
    const customers = [{firstname:"test", lastname:"test"}, {firstname:"test 2", lastname:"test 2"}]
    //await Customer.find().exec();
    res.render('customerlist', {
        customers: customers 
    });
}

const getAddCustomerView = (req,res,next) => {
    res.render('addCustomer');
}

const customerAction = (req,res,next) => {

    res.render('customerAction', {customerId:9999});
}

const addCustomer = async (req, res, next) => {
    const {error} = validate(req.body);
    if (error) return res.status(422).send(error.details[0].message);
    const data = req.body;
    let customer = await new Customer ({
        firstname: data.firstname,
        lastname: data.lastname,
        phonenumber:data.phonenumber,
        cnic:data.cnic,
        adress: data.adress
    });
    customer = await customer.save();
    res.redirect('/');
}

module.exports= {
    getAllCustomers,
    getAddCustomerView,
    customerAction,
    addCustomer
}