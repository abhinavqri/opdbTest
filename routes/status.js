var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/opdb/getEmployeeStatusDetails/', function(req, res, next) {

    /* GET sql page. */
    var conn = mysql.createConnection({
        host: "10.22.10.49" ,
        user: "abhi",
        password: "Qri@123456",
        database : 'Employee_data'
    });
    console.log("the con is ", conn);
    conn.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    conn.query('SELECT * FROM Employee_status ', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(results)

    });
});
module.exports = router;
