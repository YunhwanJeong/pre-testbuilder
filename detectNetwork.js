/**
 * 아래의 detectNetwork 함수는 어떤 카드 번호를 input으로 받아,
 * 카드 회사의 이름('MasterCard', 'American Express)을 return 하는 함수입니다.
 *
 * 예) detectNetwork('343456789012345') // 'American Express'
 *
 * 그럼 어떻게 카드 번호만 가지고, 카드회사를 알 수 있을까요?
 *
 * 2가지 방법이 있습니다.
 *  1. 앞 자리 숫자들 (아래에서는 prefix라 불립니다.)
 *  2. 숫자들의 길이 (아래에서는 lenght라고 불립니다.)
 */

/** pseudo code
 * 
 * -cardNumber 입력
 *  -앞 자리 숫자 찾는 로직
 *   -숫자 전부 정규식화 시켜서 regexpObj.test(cardNumber)
 *  -길이 찾는 로직
 */
function detectNetwork(cardNumber) {
  var reg = new RegExp();
  var prefixList = {
    Diner: ['38', '39'],
    American: ['34', '37'],
    Visa: ['13', '16', '19'],
    Master: ['51', '52', '53', '54', '55']
  }
  for(let companyName in prefixList) {
    for(let prefix of companyName) {
      
    }
  }



/** 해법 1
 * var prefix = cardNumber.slice(0,2);
  if(prefix === '34' || prefix === '37') {
    if(cardNumber.length === 15) {
      return "American Express";
    }
  } else if(prefix === '38' || prefix === '39') {
    if(cardNumber.length === 14) {
      return "Diner's Club";
    }
  } else if(prefix[0] === '4') {
    if(cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Visa';
    }
  } else if(prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55') {
    if(cardNumber.length === 16) {
      return 'MasterCard';
    }
  }
 * 
 */
  
  /**
   * 주의사항: 'cardNumber'는 항상 문자열입니다.
   * 'Diner's Club' 카드는 항상 38이나 39로 시작을하고, 14 자릿 수의 길이를 가집니다.
   * 'American Express' 카드는 항상 34 나 37로 시작하고, 15 자릿 수의 길이를 가집니다.
   * 이 글을 읽으셨다면, 이 함수를 작성하신 뒤, console 화면으로 돌아가세요.
   */
}

// you don't have to worry about this code. keep this code.

if (typeof window === "undefined") {
  module.exports = detectNetwork;
}
