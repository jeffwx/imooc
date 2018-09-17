const express = require('express');

const app = express();
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/imooc';//知道imooc的集合，么有会自动新建
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongo connect success');
});
//类似于mysql的表 mongo里面有文档，字段的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true }
}));

// User.create({
//     user: 'xiaogang',
//     age: 19
// }, function (err, doc) {
//     if (!err) {
//         console.log(doc);
//     } else {
//         console.log(err);
//     }
// })
// User.remove({ age: 18 }, function (err, doc) {
//     if (!err) {
//         console.log('delete success');
//         console.log(doc);
//         User.find({},function(err,doc){
//             console.log(doc);
//         })
//     }
// })
//只更新找到的第一条数据
// User.update({ 'user': 'xiaogang'},{'$set': { age: 26 } }, function (err, doc) {
//     if(!err)
//     console.log(doc);
// });
app.get('/', function (req, res) {
    res.send('<h1>hello world</h1>');
});

app.get('/data', function (req, res) {
    User.findOne({user :'xiaogang'}, function (err, doc) {
        res.json(doc);
    })
});

app.listen(9093, function () {
    console.log('Node app start at port 9093');
})