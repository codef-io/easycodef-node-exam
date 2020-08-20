# easycodef-node-exam

### About
[easycodef-node](https://github.com/codef-io/easycodef-node) 라이브러리 사용 예제입니다.  

### Quick Start
```bash
$ git clone https://github.com/codef-io/easycodef-node-exam.git

# npm install

$ npm i easycodef-node

또는 

$ npm install git+https://github.com/codef-io/easycodef-node

```

### Use it

각 예제를 사용할 때 코드에프 가입을 통해 발급 받은 클라이언트 정보를 설정하여 사용합니다.
 
```node

코드에프 홈페이지 https://codef.io  > 로그인 > 키관리 화면을 참고하여주세요.

// 데모
const DEMO_CLIENT_ID = '데모버전 클라이언트 아이디 설정';
const DEMO_CLIENT_SECRET = '데모버전 클라이언트 시크릿 설정';

// 정식
const CLIENT_ID = '정식버전 클라이언트 아이디 설정"';
const CLIENT_SECRET = '정식버전 클라이언트 아이디 설정';

// RSA 공개키 정보
const PUBLIC_KEY = 'RSA 공개키 정보';


```
예제들은 기본적으로 샌드박스 서비스 타입으로 요청되며 데모 또는 정식 버전 테스트를 원하실 경우 요청 타입을 변경해서 사용합니다.

```node

/*	#5.요청
 *  [서비스 타입 설정]
 *      - 샌드박스 : EasyCodefConstant.SERVICE_TYPE_SANDBOX
 *      - 데모 : EasyCodefConstant.SERVICE_TYPE_DEMO
 *      - 운영 : EasyCodefConstant.SERVICE_TYPE_API
 */
codef
  .requestToken(EasyCodefConstant.SERVICE_TYPE_SANDBOX)
  .then(function (response) {
    console.log(response);
  });


```
