const fs = require('fs') //引入fs

module.exports = function mkdir(list) {
  //list为要创建的文件夹名字
  fs.stat(list, function(err, stats) {
    //异步建立文件
    if (!stats) {
      //若文件不存在，则创建文件
      fs.mkdir(list, function(err) {
        if (err) {
          console.log(err) //若创建过程有问题 就报错
        }
      })
      console.log(`创建了${list}文件夹`)
    }
  })
}
