const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

//set 메서드는 이 익스프레스 앱에 대한 특정 옵션을 설정할 수 있는 메서드임
app.set('views', path.join(__dirname, 'views')); //(예약된 이름, 해당 옵션의 값 = 템플릿 파일이 포함된 폴더의 경로여야함 )
app.set('view engine', 'ejs'); // 뷰 파일을 html로 다시 보내기 전에 뷰 파일을 처리하기 위한 템플릿 엔진이라고 그냥 임의로 이름 붙임

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.render('index'); //인덱스만 전달함. 파일 확장자는 생략
  //랜더링: 템플릿을 전달하는 템플릿을 랜더링하는것
  // 이를 통해 템플릿 엔진을 사용해서 파일을 만들고 html로 변환하면 블라우저로 다시 전송시킬 수 있음
});

app.get('/restaurants', function (req, res) {
  
  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  
  res.render('restaurants', {numberOfRestaurants: storedRestaurants.length});
});

app.get('/recommend', function (req, res) {
  res.render('recommend');
});

app.post('/recommend', function (req, res) {
  const restaurant = req.body;
  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect('/confirm');
});

app.get('/confirm', function (req, res) {
  res.render('confirm');
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.listen(3000);
