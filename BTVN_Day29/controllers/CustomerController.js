const model = require("../models/index");
// console.log(model);
const Customer = model.Customer;
module.exports = {
  index: async (req, res) => {
    const customers = await Customer.findAll();
    // console.log(Customer);
    console.log(customers);
    res.send("Hello F8");
  },
};
