# oasisCrawler 

숭실대학교 도서관 공지사항 크롤러. 

NodeJS 라이브러리로 API호출로 데이터 오브젝트를 반환한다. 

 

# 목차 

- 설치 방법 
- 제공 기능 
  - 공지사항 
    - 중앙 공지사항 
      - 사용법 
- License 

 

# 설치 방법 

NodeJS의 패키지매니저로부터 oasisCrawler 내려받기 

## npm을 사용할 때 

``` 
$ npm install oasisCrawler
```

## yarn을 사용할 때 

``` 
$ yarn add oasisCrawler
```

 

# 제공 기능 

숭실대학교 학생들이 숭실대학교 도서관을 크롤링하는 서비스를 제공한다. 

 

## 공지사항 

숭실대학교 도서관의 공지사항을 크롤링해오는 기능을 수행한다. 

### 중앙 공지사항 

숭실대학교 도서관 홈페이지에서 확인되는 공지사항을 크롤링해올 수 있다. 

##### 사용법 

``` 
// 라이브러리 추가해서 oasisCrawler 변수에 할당. 
const oasisCrawler = require('../index'); 
 
// 크롤링을 수행할 옵션을 결정. 
const option = { 
  pageNum : 1, 
}; 
 
// 공지사항 크롤링 수행. 
const noticeList = sandCastle.Notice(option); 
// 반환된 Promise의 결과를 출력하기. 
noticeList 
  .then(console.log) 
  .catch(console.log); 
```

oasisCrawler.notice(option) 

실질적으로 도서관 공지사항 크롤링을 수행하는 함수. 정해진 option인자를 넣으면 거기에 맞는 형태로 크롤링을 수행한다. 비동기방식으로 수행되며 Promise를 반환한다. 

 

option  

- pageNum : 크롤링할 페이지를 지정한다.  

 

##### 반환값 

``` 
[{ 
  "notice" : { 
    "noticeId" : "7817", 
    "noticeNum" : "1101" 
    "title" : "2018 전자정보박람회 부재자 경품수령 안내", 
    "contents" : "지난 17일 우중에도 전자정보박람회에 참여해주신 여러분께 감사드립니다. ", 
    "date" : " 2018-05-18 11:17:18", 
    "authors" : "김나름", 
    "attachedFiles" : [{ 
        "attachedFileId: "330760", 
        "title": "경품수령.jpg", 
        "noticeId: "7817", 
        "path": "http://hostname/path/file.hwp" 
    }] 
  } 
}, {Notice Object}]   
 
```

배열로 반환되며 그 안에 공지사항 오브젝트가 담겨있는 형태이다. 

Notice Object 

- notice : 하나의 공지사항을 다루는 오브젝트 

  - noticeId : 공지사항의 고유번호 
  - noticeNum : 해당 공지사항 번호 
  - title : 공지사항의 제목 
  - contents : 공지사항의 내용 
  - date : 공지사항 게시일자 
  - writer : 공지사항 작성자 
- attachedFiles : 공지사항에 첨부된 파일의 오브젝트 
  - attachedFileId : 첨부파일 고유번호 
  - title : 첨부파일 이름 
  - noticeId : 해당 첨부파일 포함하는 공지사항 번호 
  - path : 첨부파일을 다운 받을 수 있는 링크  

 

## License 

``` 
Copyright 2018 Ben 
 
Licensed under the Apache License, Version 2.0 (the "License"); 
you may not use this file except in compliance with the License. 
You may obtain a copy of the License at 
 
       http://www.apache.org/licenses/LICENSE-2.0 
 
Unless required by applicable law or agreed to in writing, software 
distributed under the License is distributed on an "AS IS" BASIS, 
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
See the License for the specific language governing permissions and 
limitations under the License. 
```
