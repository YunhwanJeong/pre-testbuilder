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
 *  -
 *  -
 *   
 *   
 *
 */
function detectNetwork(cardNumber) {
  let leng = cardNumber.length;

  const dinersClubPrefix = /^3[89]/;
  const americanExpressPrefix = /^3[47]/;
  const visaPrefix = /^4/;
  const masterCardPrefix = /^5[1-5]/;
  const discoverPrefix = /^6011|^65|^64[4-9]/;
  const maestroPrefix = /^50[13]8|^5020|^6304/;
  const chinaUnionPayPrefix = /^62212[6-9]|^6221[3-9][0-9]|^622[2-8][0-9][0-9]|^6229[0-1][0-9]|^62292[0-5]|^62[4-6]|^628[2-8]/;
  const switchPrefix = /^490[35]|^4911|^4936|^564182|^6333|^633110|^6759/

  if (dinersClubPrefix.test(cardNumber) && leng === 14) {
    return "Diner's Club";
  }
  if (americanExpressPrefix.test(cardNumber) && leng === 15) {
    return "American Express";
  }
  if (visaPrefix.test(cardNumber) && !switchPrefix.test(cardNumber) && (leng === 13 || leng === 16 || leng === 19)) {
    return "Visa";
  }
  if (masterCardPrefix.test(cardNumber) && leng === 16) {
    return "MasterCard";
  }
  if (discoverPrefix.test(cardNumber) && (leng === 16 || leng === 19)) {
    return "Discover";
  }
  if (maestroPrefix.test(cardNumber) && (leng === 12 || leng === 13 || leng === 14 || leng === 15 || leng === 16 || leng ===  17 || leng === 18 || leng === 19)) {
    return "Maestro";
  }
  if (chinaUnionPayPrefix.test(cardNumber) && (leng === 16 || leng === 17 || leng === 18 || leng === 19)) {
    return "China UnionPay";
  }
  if (switchPrefix.test(cardNumber) && (leng === 16 || leng === 18 || leng === 19)) {
    return "Switch";
  }
}
// function detectNetwork(cardNumber) {
//   var detectedNetwork = '';
//   var dinersClub = {
//     prefix: [/^38/, /^39/],
//     cardNumLength: [14],
//     name: `Diner's Club`
//   }
//   var americanExpress = {
//     prefix: [/^34/, /^37/],
//     cardNumLength: [15],
//     name: 'American Express'
//   }
//   var visa = {
//     prefix: [/^4/],
//     cardNumLength: [13, 16, 19],
//     name: 'Visa'
//   }
//   var masterCard = {
//     prefix: [/^51/, /^52/, /^53/, /^54/, /^55/],
//     cardNumLength: [16],
//     name: 'MasterCard'
//   }
//   var discover= {
//     prefix: [/^6011/, /^65/, /^644/, /^645/, /^646/, /^647/, /^648/, /^649/],
//     cardNumLength: [16, 19],
//     name: 'Discover'
//   }
//   var maestro = {
//     prefix: [/^5018/, /^5020/, /^5038/, /^6304/],
//     cardNumLength: [12,13,14,15,16,17,18,19],
//     name: 'Maestro'
//   }
//   var networkArr = [dinersClub, americanExpress, visa, masterCard, discover, maestro]

//   loop1:		
//   for(let network of networkArr) {
// 	  loop2:
//     for(let reg of network.prefix) {
//       if(reg.test(cardNumber)) {	
// 		    loop3:
//         for(let lengthValue of network.cardNumLength) {		
//           if(lengthValue === cardNumber.length) {			
//             detectedNetwork += network.name;
// 			      break loop1;
//           }
//         }
//       }
//     }
//   }
//   return detectedNetwork;
// }
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
