const express = require('express');

const router = express.Router(); // 앱과 비슷하게 작동하는 라우터 객체를 제공하지만 내부적으로는 약간 다름.

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/about', function (req, res) {
  res.render('about');
});

// 이렇게 구성된 라우터를 default.js 파일에서 내보내서 app.js로 다시 가져올 수 있고 app.js에서 이 라우터를 사용할 수 있음
module.exports = router; // 이를 위해 이 모듈을 사용하면 라우터를 내보낼 수 있음.
