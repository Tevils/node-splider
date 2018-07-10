const https = require('https')
const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const mkdir = require('./tools/mkdir')
const fetchData = require('./tools/fetchData')

mkdir('./img/') //创建img文件夹

mkdir('./data/') //创建data文件夹

fetchData(process.argv[2]) //获取参数URL发送请求
