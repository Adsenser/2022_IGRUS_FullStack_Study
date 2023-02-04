const http = require('http');

function handleRequest(request, response) {

    if (request.url === '/currenttime') {
        response.statusCode = 200;
        response.end('<h1>' +new Date().toISOString() + '</h1>'); //toIOString을 호ㄹ해 이 날짜 객체를 문자열 표현으로 변환해서 읽을 수  있는 텍스트로 변환 가능
    } else if (request.url === '/') {
        response.statusCode = 200;
        response.end('<h1>Hello TY</h1>');
    }
    
 
}

const server = http.createServer(handleRequest);

server.listen(3000);