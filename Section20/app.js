const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/restaurants', function (req, res) {
  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  res.render('restaurants', {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

//1. <- :을 이용해서 동적 id 생성 파트
app.get('/restaurants/:inha', function (req, res) {
  const restaurantId = req.params.inha; //요청 객체 생성, id는 서로 같아야 한다.
  // params 자체에는 실제로 객체가 포함되어 있고 해당 객체에는 키로 정의한 동적 placeholder가 있음
  // placeholder: 빠져있는 다른것을 대체하는 것
  res.render('restaurant-detail', { rid: restaurantId }); //레스토랑 id를 여기 rid키에 값으로 전달할 예정
  //그러면 해당 템플릿 내부의 변수로 저 rid 키를 사용할 수 있음 (저 id데이터를 템플릿에서 사용 가능)
});
// 3. http://localhost:3000/restaurants/aa <-여기서 aa를 주목
// app.js로 작성한 코드는 여기 위의 파트(app.js)의 동적 부분을 수락한 후 저 aa가 포함된 url의 구체적인 값을 얻게됨.

// 4. css 코드가 제대로 로드되지 않았던 이유: 상대경로 문제 때문. -> 존재하지 않는 /:inha에서 스타일 폴더를 찾게 되는것임. 

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
