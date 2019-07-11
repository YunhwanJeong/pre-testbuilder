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
 *  -카드사별로 찾기
 *   -카드사별 prefix & length 객체 생성
 *   -if문 4개로 카드사별 판별 로직 생성
 *
 */
function detectNetwork(cardNumber) {
  var detectedNetwork = '';
  var dinersClub = {
    prefix: [/^38/, /^39/],
    cardNumLength: [14],
    name: `Diner's Club`
  }
  var americanExpress = {
    prefix: [/^34/, /^37/],
    cardNumLength: [15],
    name: 'American Express'
  }
  var visa = {
    prefix: [/^4/],
    cardNumLength: [13, 16, 19],
    name: 'Visa'
  }
  var masterCard = {
    prefix: [/^51/, /^52/, /^53/, /^54/, /^55/],
    cardNumLength: [16],
    name: 'MasterCard'
  }
  var discover= {
    prefix: [/^6011/, /^65/, /^644/, /^649/],
    cardNumLength: [16, 19],
    name: 'Discover'
  }
  var maestro = {
    prefix: [/^5018/, /^5020/, /^5038/, /^6304/],
    cardNumLength: [12,13,14,15,16,17,18,19],
    name: 'Maestro'
  }
  var networkArr = [dinersClub, americanExpress, visa, masterCard, discover, maestro]

  loop1:		
  for(let network of networkArr) {
	  loop2:
    for(let reg of network.prefix) {
      if(reg.test(cardNumber)) {	
		    loop3:
        for(let lengthValue of network.cardNumLength) {		
          if(lengthValue === cardNumber.length) {			
            detectedNetwork += network.name;
			      break loop1;
          }
        }
      }
    }
  }
  return detectedNetwork;
}
  /**
   * 주의사항: 'cardNumber'는 항상 문자열입니다.
   * 'Diner's Club' 카드는 항상 38이나 39로 시작을하고, 14 자릿 수의 길이를 가집니다.
   * 'American Express' 카드는 항상 34 나 37로 시작하고, 15 자릿 수의 길이를 가집니다.
   * 이 글을 읽으셨다면, 이 함수를 작성하신 뒤, console 화면으로 돌아가세요.
   */

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

// you don't have to worry about this code. keep this code.

if (typeof window === "undefined") {
  module.exports = detectNetwork;
}
