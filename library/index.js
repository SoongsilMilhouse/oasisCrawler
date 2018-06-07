'use strict'

const URL = require('url').URL
const baseUrl = require('../common/baseUrl')
const utils = require('../utils')

async function run (option) {
  const noticeListUrl = new URL(baseUrl.LIBRARY_NOTICE_LIST)
  noticeListUrl.searchParams.set('max', 20)
  noticeListUrl.searchParams.set('offset', ((option.pageNum - 1) % 20) * 20)
  const noticeListRes = await utils.getResponse({
    method: 'GET',
    url: noticeListUrl
  })

  const noticeList = JSON.parse(noticeListRes.body).data.list
  const retNoticeList = []
  for (const noticeData of noticeList) {
    const data = {
      noticeId: noticeData.id,
      noticeNum: noticeData.seqNo,
      title: noticeData.title,
      contents: '',
      date: noticeData.dateCreated,
      author: noticeData.writer,
      attachedFiles: []
    }
    const noticeContentUrl = new URL(baseUrl.LIBRARY_NOTICE_CONTENT)
    noticeContentUrl.pathname += noticeData.id
    const noticeContentRes = await utils.getResponse({
      method: 'GET',
      url: noticeContentUrl
    })

    const noticeContent = JSON.parse(noticeContentRes.body).data
    data.contents = noticeContent.content
    for (const file of noticeContent.attachments) {
      data.attachedFiles.push({
        attachedFileId: file.id,
        title: file.logicalName,
        noticeId: '',
        path: baseUrl.LIBRARY_NOTICE_CONTENT + file.originalImageUrl
      })
    }
    const noticeId = JSON.parse(noticeContentRes.body).data.id
    data.attachedFiles.noticeId = noticeId

    retNoticeList.push(data)
  }
  return retNoticeList
}

exports.run = run
