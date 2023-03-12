const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
        name:String,
        location:String,
        position :String,
        salary:Number
})

const employeeModel = mongoose.model("employees", EmployeeSchema);


exports.employeeModel = employeeModel;