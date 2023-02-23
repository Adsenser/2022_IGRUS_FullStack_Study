const fs = require('fs');
// app.js에서 fs 요구사항 제거 -> 파일 시스템을 더 이상 사용하지 않기 때문


const path = require('path');

const express = require('express');

const defaultRoutes = require('./routes/default');
const restaurantRoutes = require('./routes/restaurants');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// /로 시작하는 모든 수신 요청은 defaultRoutes에 의해 처리되어야함
app.use('/', defaultRoutes); // 이 첫번째 매개변수 값은 들어오는 경로의 시작을 확인하는 필터 역할을 함
// 따라서 여기 있는 /는 들어오는 요청에 대해 활성화될 것임
// 이는 들어오는 모든 요청이 defaultRoutes로 전달된다는 것을 의미함
// 그리고 이 라우트 중 하나가 일치하면 들어오는 요청이 완료될 것임.
// 여기 있는 이러한 라우트 중 들어오는 요청과 일치하지 않는 경우에만 app.js로 돌아가서 다른 라우트도 살펴볼 것임
app.use('/', restaurantRoutes);
// 퍼널 (funnel) : 깔떼기 라는 뜻

app.use(function (req, res) {
  res.render('404');
});

app.use(function (error, req, res, next) {
  res.render('500');
});

app.listen(3000);
