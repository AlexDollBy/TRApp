const mysql = require('mysql');
const tc = require('./tableCreat');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'doc'

});

db.connect((err)=>{
    if(err){
        throw err;
    }    
    console.log('MySql connected...');
});

module.exports.showdb = (req,res) => {
    let sql = 'Select * from zak';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(tc(result));
    }); 
};
