const path = require('path'); // 필요로 하는 모든 건 요청해야함. 다른파일에서 사용할 수 있다고해서 여기서도 사용할 수 있는 것은 아니기 때문
const fs = require('fs');

const filePath = path.join(__dirname, '..', 'data', 'restaurants.json'); // . <- 점 세그먼트: 이것은 현재 있는 디렉토리의 상위 디렉토리로 이동하길 원한다는 표현 방식임

function getStoredRestaurants() {
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}

function storeRestaurants(storableRestaurants) {
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

// 함수와 상수가 restaurant-data.js 파일에 있다고 해서 이게 다른 파일에서 자동으로 요청될 수 있다는 의미가 아님
// 대신 이 파일의 어떤 부분을 다른 파일에서 사용할 수 있는지를 명시적으로 표시해줘야함
module.exports = { //여기 아래에 노출하려는 다양한 항목을 추가
  getStoredRestaurants: getStoredRestaurants,
  // 좌측은 다른 파일에서 이 함수를 참조하는데 사용할 수 있고 ( 다른 파일에서 이 함수를 사용할 때 사용할 수 있는 이름 - 즉, 다른 이름으로 지정시켜도 됨)
  // 우측은 노출하려는 항목에 대한 포인터가 있음(다른 파일에 노출하려는 항목의 이름 - 즉, 마음대로 지정 불가)
  storeRestaurants: storeRestaurants
};
// 따라서 이 모듈은 두 개의 메서드를 사용하는 객체가 되게 됨