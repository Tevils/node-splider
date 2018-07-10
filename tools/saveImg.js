const request = require('request') //引入request
const fs = require('fs') //引入fs

module.exports = function saveImg(img_title, img_url) {
  const img_filename = img_title + '.jpg'
  request.head(img_url, function(err, res, body) {
    //判断图片是否存在
    if (err) {
      console.log(err)
    }
  })
  request.get(img_url).pipe(fs.createWriteStream('./img/' + img_title + '.jpg'))
  //获取图片并保存
}
