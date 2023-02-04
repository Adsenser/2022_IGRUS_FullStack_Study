const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false})); //extended fasle는 경고를 받지 않도록 명시적으로 설정

app.get('/currenttime', function(request, response){
    response.send('<h1>' +new Date().toISOString() + '</h1>');
});
// require('https://expressjs.com/')

app.get('/',function(req,res){
    res.send('<form action="/store-user" method="POST"><label>AAA</label><input type="text" name="username"><button>Submit</button></form>');
})

app.post('/store-user',function(req,res){
    const userName = req.body.username;
    // console.log(userName);

    const filePath = path.join(__dirname, 'data', 'users.json'); //이 프로젝트 디렉토리에 대한 절대 경로를 실제로 보유하는 내장된 변수또는 상수를 의미
    
    
    const fileData = fs.writeFileSync(filePath);
    const existingUsers = JSON.parse(fileData);
    //위에서 const를 쓸 수 있는 이유는 메모리의 기본값을 변경하는 것은 맞지만, existingUsers에 새로운 값을 할당하지 않기 때문임.
    existingUsers.push(userName); //해당 배열에 새로운 항목을 추가해줌 push가

    fs.writeFileSync(filePath, JSON.stringify(existingUsers)); //stringify 안하면 원시텍스트가 아니라 JS배열이 되어서 실패함.
    
    res.send('<h1>Username stored</h1>');

})

app.listen(3000);

//오류 발생한 이유: 익스프레스JS는 들어오는

// 요청 라우팅을 주로 처리하는 라이브러리입니다

// 따라서 어떤 요청이 어떤 경로로 어떤 함수에 의해

// 처리되어야 하는 메서드인지 정의할 수 있죠

// 그게 바로 우리가 지금까지 하고 있는 작업이죠

// 이제 {req.body}에 쉽게 액세스할 수 있지만

// 기본적으로

// 그렇게 하지 않는 중요한 단계가 하나 있습니다

// 그건 실제 요청 데이터를 구문 분석하지 않죠

// 요청을 받고 데이터가 있음을 알 수 있지만

// 해당 데이터를 이런

// 자바스크립트 개체로 자동 변환하지 않습니다

//////////

// 그리고 우리가 하고 있는 POST 메서드를

// 사용해서 양식을 제출하면

// 브라우저는 이름 속성이 있는

// 모든 양식 입력을 자동으로 읽고

// 해당 데이터를 이 요청에 [양식 데이터]로 추가합니다

// 그리고 여기서 중요한 점은 이게 자바스크립트 코드가 아니란 겁니다

// 비슷해 보이지만

// 실제로는 요청에

// 첨부되는 일부 텍스트입니다

// 이건 자바스크립트 코드도 아니고 자바스크립트 객체도 아니며

// 서버에서 사용하기 위해

// 구문 분석해야 하는

// 일부 원시 텍스트입니다

// 그리고 이건 여기에서 누락된 단계이죠

// 우리는 해당 요청을 보내고 있고

// 서버 측에서 해당 요청을 처리할 준비가 되어 있지만

// 자바스크립트 코드에서 사용하려고 시도하기 전에

// 요청 데이터를 실제로 구문 분석하지 않습니다

// 그리고 거기엔 추가해야 하는 누락된 단계가 있어요

// 우리는 익스프레스에게 그렇게 하라고 지시해야 하는데

// 고맙게도 그 작업은 상당히 쉽습니다