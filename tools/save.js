const fs = require('fs') //引入fs
const saveImg = require('./saveImg') //引入saveImg函数

module.exports = function save(movie_info) {
  const text = JSON.stringify(movie_info) //stringify化
  fs.appendFile('./data/' + movie_info.name + '.txt', text, function(err) {
    //创建.txt文件保存相关内容
    if (err) {
      console.log(err)
    }
  })
  saveImg(movie_info.name, movie_info.imgUrl) //引用保存图片的saveImg函数来保存图片
}
