const fs = require('fs');
// 해당 파일을 열고 읽기 위해 노드js에 내장된 파일 시스템 패키지 필요 
const path = require('path');

const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(htmlFilePath);
});

app.get('/restaurants', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html');
  res.sendFile(htmlFilePath);
});

app.get('/recommend', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'recommend.html');
  res.sendFile(htmlFilePath);
});

app.post('/recommend', function (req, res) {
  // 굳이 모든키를 추출할 필요 없음. json이용해 body를 전체적으로 저장할 수 있다
  const restaurant = req.body;
  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData); //자바스크립트 배열로 변환하기 위함

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
  // filepath를 사용하지만 여기서 저장하는 데이터는 storedRestaurants배열이고 여기서 json형식의 텍스트로 strigify를 사용해 변환한것 

  res.redirect('/confirm');
  // 이전방식에서는 사용자가 확인 페이지를 다시 로드 시도 시 경고창(동일한 양식 제출)이 떴었음. 이를 해결하기 위해 위의 코드 작성 
  // 이전방식: 일부 html 내용을 post 경로로 다시 보냄
  // 새 방식: 사용자를 리다이렉션해서 이 post 요청이 전송되고 처리되면 브라우저가 다른 페이지로 전환해야된다고 브라우저에게 알릴 수 있음
});

app.get('/confirm', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'confirm.html');
  res.sendFile(htmlFilePath);
});

app.get('/about', function (req, res) {
  const htmlFilePath = path.join(__dirname, 'views', 'about.html');
  res.sendFile(htmlFilePath);
});

app.listen(3000);
