/**
 *  코드에프 예제 - 계정 수정
 *  - https://developer.codef.io/cert/account/update
 *
 * @Company : ©CODEF corp.
 * @Author  : tech@codef.io
 * @Date    : Aug 1, 2020 3:36:11 PM
 * @Version : 1.0.0
 */
const {
  EasyCodef,
  EasyCodefConstant,
  EasyCodefUtil,
} = require('easycodef-node');
const path = require('path');

//코드에프 가입을 통해 발급 받은 클라이언트 정보 - 데모
const DEMO_CLIENT_ID = '';
const DEMO_CLIENT_SECRET = '';

// 코드에프 가입을 통해 발급 받은 클라이언트 정보- 정식
const CLIENT_ID = '';
const CLIENT_SECRET = '';

//	코드에프 가입을 통해 발급 받은 RSA 공개키 정보
const PUBLIC_KEY = '';

/*
 * #1.쉬운 코드에프 객체 생성
 */
const codef = new EasyCodef();

/*
 * #2.RSA암호화를 위한 퍼블릭키 설정
 * - 데모/정식 서비스 가입 후 코드에프 홈페이지에 확인 가능(https://codef.io/#/account/keys)
 * - 암호화가 필요한 필드에 사용 - encryptValue(String plainText);
 */
codef.setPublicKey(PUBLIC_KEY);

/*
 * #3.데모 클라이언트 정보 설정
 * - 데모 서비스 가입 후 코드에프 홈페이지에 확인 가능(https://codef.io/#/account/keys)
 * - 데모 서비스로 상품 조회 요청시 필수 입력 항목
 */
codef.setClientInfoForDemo(DEMO_CLIENT_ID, DEMO_CLIENT_SECRET);

/*
 * #4.정식 클라이언트 정보 설정
 * - 정식 서비스 가입 후 코드에프 홈페이지에 확인 가능(https://codef.io/#/account/keys)
 * - 정식 서비스로 상품 조회 요청시 필수 입력 항목
 */
codef.setClientInfo(CLIENT_ID, CLIENT_SECRET);

/*
 * #5.요청 파라미터 설정
 * - 계정관리 파라미터를 설정(https://developer.codef.io/cert/account/cid-overview)
 */
const accountList = []; // 계정 리스트

//+[인증서]
const accountCert = {
  countryCode: 'KR',
  businessType: 'BK',
  clientType: 'P',
  organization: '0004',
  loginType: '0',
  certType: '1',
  keyFile: EasyCodefUtil.encodeToFileString(
    path.join(__dirname, 'signPri.key')
  ),
  derFile: EasyCodefUtil.encodeToFileString(
    path.join(__dirname, 'signCert.der')
  ),
  password: EasyCodefUtil.encryptRSA(PUBLIC_KEY, 'user_password'),
};
accountList.push(accountCert);

//+ [아이디]
const accountIDPWD = {
  countryCode: 'KR',
  businessType: 'BK',
  clientType: 'P',
  organization: '0081',
  loginType: '1',
  id: 'user_id',
  password: EasyCodefUtil.encryptRSA(PUBLIC_KEY, 'user_password'),
};
accountList.push(accountIDPWD);

const param = {
  accountList: accountList,
  connectedId: '9GNB80TmkzNaX-E7zGW...',
};

/*	#6.요청
 *  [서비스 타입 설정]
 *      - 샌드박스 : EasyCodefConstant.SERVICE_TYPE_SANDBOX
 *      - 데모 : EasyCodefConstant.SERVICE_TYPE_DEMO
 *      - 운영 : EasyCodefConstant.SERVICE_TYPE_API
 */
codef
  .updateAccount(EasyCodefConstant.SERVICE_TYPE_SANDBOX, param)
  .then(function (response) {
    /*
     *  #7. 응답 결과
     */
    console.log(response);
  });
