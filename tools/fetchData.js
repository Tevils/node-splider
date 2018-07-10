const https = require('https') //引入https模块
const cheerio = require('cheerio') //引入cheerio
const save = require('./save') //引入save函数

module.exports = function fetchData(url) {
  console.log('working')
  https.get(url, function(res) {
    //发送请求
    var html = '' //获取html
    res.on('data', function(chunk) {
      html += chunk
    })
    res.on('end', function() {
      const $ = cheerio.load(html) //使用cheeio处理html
      const movie_info = {
        //获取dom中相应元素的值
        name: $('#content>h1')
          .text()
          .replace(/\s/g, ''), //除去空格
        imgUrl: $('#mainpic > a > img').attr('src'),
        summary: $('#link-report span[property="v:summary"]')
          .text()
          .replace(/\s/g, '') //除去空格
      }
      save(movie_info) //使用save函数保存内容
    })
    res.on('error', err => console.log(err)) //若请求错误则报错
  })
}
