'use strict'

const oasisCrawler = require('../index')

const option = {
  pageNum: 2
}

const noticeList = oasisCrawler.Notice(option)
noticeList
  .then((result) => {
    for (const element of result) {
      console.log(element)
    }
  })
  .catch(console.log)
