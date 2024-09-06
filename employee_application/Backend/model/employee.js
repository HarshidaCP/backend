var mongoose = require('mongoose')

var schema = mongoose.Schema({
    Name:String,
    Age:Number,
    Department: String,
    Salary:Number
})
var EmployeeModel = mongoose.model("Employee", schema)
module.exports=EmployeeModel