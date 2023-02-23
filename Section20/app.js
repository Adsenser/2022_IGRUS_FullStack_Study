const fs = require('fs');
const path = require('path');

const express = require('express');
const uuid = require('uuid');

// ** Require문에서 노드 js의 경로를 표현하는 방법 **
const resData = require('./util/restaurant-data');
// 내장된 패키지나 타사 패키지를 require 하는 경우와 달리 우리만의 파일의 경우에는 경로를 추가해야 함
// ./는 노드js에게 이 파일이 이 코드가 있는 이웃 파일, 형제 파일이라는 사실을 알려주는 것

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/restaurants', function (req, res) {
  const storedRestaurants = resData.getStoredRestaurants();

  res.render('restaurants', {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get('/restaurants/:id', function (req, res) {
  const restaurantId = req.params.id;
  const storedRestaurants = resData.getStoredRestaurants();

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render('restaurant-detail', { restaurant: restaurant });
    }
  }

  res.render('404');
});

app.get('/recommend', function (req, res) {
  res.render('recommend');
});

app.post('/recommend', function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const restaurants =  resData.getStoredRestaurants(); //resData 객체를 이용해 함수 호출 //객체를 참조해 이 getStored~~ 라는 특정 매서드를 호출한것임

  restaurants.push(restaurant);

  resData.storeRestaurants(restaurants);

  res.redirect('/confirm');
});

app.get('/confirm', function (req, res) {
  res.render('confirm');
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.use(function (req, res) {
  res.render('404');
});

app.use(function (error, req, res, next) {
  res.render('500');
});

app.listen(3000);
