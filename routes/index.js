var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/opdb/getEmployeeDetails', function(req, res, next) {

/* GET sql page. */
var con = mysql.createConnection({
    host: "10.22.10.49" ,
    user: "abhi",
    password: "Qri@123456",
    database : 'Employee_data'
});
  console.log("the con is ", con);
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
});

con.query('SELECT * FROM Employee_1 ', function (error, results, fields) {
    if (error) throw error;
    //console.log(results);
    res.send(results)
});

});
module.exports = router;
