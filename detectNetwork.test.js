/*
 * 이 파일을 어떻게 사용해야 하는지 STEP을 진행하다보면 알 수 있습니다.
 * 만일 그 전에 이 파일을 이용하고 싶다면 주석을 참고하여 직접 연구해야 합니다.
 */

/**
 * 11번 줄에 있는 FILL_ME_IN을 수정하실 필요는 없습니다.
 * 하지만 이 파일의 다른 곳에서 FILL_ME_IN을 보시게 된다면 다른 것으로 바꾸셔야합니다.
 */

let FILL_ME_IN = "Fill this value in";

describe("Introduction to Mocha Tests - READ ME FIRST", function() {
  // Mocha 테스트는 그저 다음 기능을 하는 도구입니다!
  // - 함수를 실행할 때 오류가 발생하면, 실패합니다.
  // - 오류가 발생하지 않으면, 실패하지 않습니다.
  // mocha에 대해 더 알고 싶다면 다음을 참고하세요. mochajs.org

  // 아래 섹션을 이해했으면, 주석 처리해도 좋습니다.
  // 실패한 테스트가 있는 경우 진행할 수 없기 때문입니다.

/*
  it("오류가 발생하면 테스트가 실패합니다.", function() {
    throw new Error("저를 지워주세요!");
  });
*/

  it("오류가 발생하지 않으므로, 실패하지 않습니다.", function() {
    // 이 테스트는 실제로 아무것도 테스트하지 않습니다. 그러므로 그냥 여기는 통과하게 됩니다.
    let even = function(num) {
      return num % 2 === 0;
    };
    return even(10) === true;
  });

  // 우리는 테스트에서 예상 동작과 실제 동작을 비교하기를 원할 것입니다.
  // 예상 동작이 실제 동작과 다르다면, 테스트는 실패해야 합니다.
  it("예상 동작이 실제 동작과 일치하지 않을 때 오류가 발생합니다.", function() {
    let even = function(num) {
      return num % 2 === 0; // 체크하려는 함수에 뭔가 문제가 있군요!
    };

    if (even(10) !== true) {
      throw new Error("10은 짝수여야 합니다!");
    }
  });
});

describe("Diner's Club", function() {
  // 주의하세요, 테스트에도 버그가 존재할 수 있습니다...
  for(let i = 38; i <= 39; i++) {
    it("has a prefix of " + i + " and a length of 14", function() {
      if(detectNetwork(i + '000000000000') !== "Diner's Club") {
        throw new Error("Test failed");
      }
    });
  }
});

describe("American Express", function() {
  // 항상 if/throw 구문으로 오류를 체크하는 것은 귀찮은 일이기 때문에,
  // 여기에 도움을 줄 수 있는 함수를 하나 제공했습니다. 입력값이 true가 아닐 경우 에러를 발생시킵니다.
  let assert = function(isTrue) {
    if (!isTrue) {
      throw new Error("Test failed");
    }
  };

  for(let i = 34; i <= 37; i = i + 3) {
    it("has a prefix of " +  i + " and a length of 15", function() { 
      assert(detectNetwork(i.toString() + "0000000000000") === "American Express");
    });
  }
});

describe("Visa", function() {
  // Chai는 테스트에 필요한 헬퍼 함수들이 담긴 라이브러리입니다!
  // Chai는 이전에 만들었던 assert 함수와 동일한 기능을 하는 assert 함수를 제공합니다.
  // Chai가 제공하는 assert 함수를 어떻게 사용하는지 웹사이트의 공식 문서를 참고해보세요.
  //   http://chaijs.com/
  let assert = chai.assert;

  for(let i = '4000000000000'; i.length <= 19; i = i + '000') 
  it("has a prefix of 4 and a length of " + i.length, function() {
      assert(detectNetwork(i) === "Visa");
  });
});

describe("MasterCard", function() {
  // Chai는 좀 더 영어 문법에 가까운 코드로 테스트를 작성할 수 있게 도와줍니다.
  // Expect 문법은 그 중 한가지이며, 다른 문법도 있습니다.
  // 이와 관련해 더 알고 싶다면, 공식 문서를 참고하세요.
  //   http://chaijs.com/api/bdd/
  let expect = chai.expect;
  for(let prefix = 51; prefix <= 55; prefix++) {
    it("has a prefix of " + prefix + " and a length of 16", function() {
      expect(detectNetwork(prefix + "00000000000000")).to.equal("MasterCard");
    });
  }
  // expect 대신에 should라는 문법을 사용해서 스타일을 조금 변경할 수도 있습니다.
  // 사실 둘 중 어떤 것을 사용하는지는 중요하지 않습니다.
  // 스타일에 관련해서는 다음 사이트를 참조하세요. http://chaijs.com/guide/styles/
  // 다만 중요한 것은 스타일의 일관성을 유지하는 것입니다.
  // (우리는 공부를 하는 중이기 때문에 두가지 방법 모두를 사용해 보았습니다.)
  // 테스트를 작성하는 중에, 두가지 방법을 동시에 사용하려고 하면 진행되지 않을 것입니다.
  // expect나 should 둘 중에 한가지 방법을 선택해서 사용하세요.
});

describe("Discover", function() {
  // 함수가 없는 테스트는 "pending"이라는 표시가 뜨며 실행되지 않습니다.
  // 아래 테스트를 작성하고 테스트가 통과하도록 만드십시오.
  let expect = chai.expect;
  it("has a prefix of 6011 and a length of 16", function() {
    expect(detectNetwork("6011012345678901")).to.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 19", function() {
    expect(detectNetwork("6011012345678901234")).to.equal("Discover");
  });
  it("has a prefix of 65 and a length of 16", function() {
    expect(detectNetwork("6501234567890123")).to.equal("Discover");
  });
  it("has a prefix of 65 and a length of 19", function() {
    expect(detectNetwork("6501234567890123456")).to.equal("Discover");
  });
  for(let i = 644; i <= 649; i++) {
    for(let j = "0000000000000"; (i + j).length <= 19; j = j + "000") {
      it("has a prefix of " + i + " and a length of " + (i + j).length, function() {
        expect(detectNetwork(i + j)).to.equal("Discover");
      })
    }
  }
});

describe("Maestro", function() {
  let expect = chai.expect;
  // Maestro 카드를 판별 할 수 있는 모든 경우의 수를 확인할 수 있는 테스트를 작성해보세요.
  let prefixArr = [5018, 5020, 5038, 6304];
  for(let i = 0; i < prefixArr.length; i++) {
    for(let j = "00000000"; (prefixArr[i] + j).length <= 19; j = j + "0") {
      it("has a prefix of " + prefixArr[i] + " and a length of " + (prefixArr[i] + j).length, function() {
        expect(detectNetwork(prefixArr[i] + j)).to.equal("Maestro");
      })
    }
  }
});

// China UnionPay와 Switch를 검사하는 것은 Advanced 과제입니다.
// 원하시는 분들은 도전해보세요!
//China UnionPay는 항상 622126-622925, 624-626, 또는 6282-6288의 접두사와 16-19의 길이를 가집니다.
describe("China UnionPay", function() {
  let expect = chai.expect;

  for (let i = 622126; i <= 622925; i++) {
    for (let j = "0000000000"; (i + j).length <= 19; j += "0") {
      it ("has a prefix of " + i + " and a length of " + (i + j).length, function () {
        expect(detectNetwork(i + j)).to.equal("China UnionPay");
      })
    }
  }
  for (let i = 624; i <= 626; i++) {
    for (let j = "0000000000000"; (i + j).length <= 19; j += "0") {
      it ("has a prefix of " + i + " and a length of " + (i + j).length, function () {
        expect(detectNetwork(i + j)).to.equal("China UnionPay");
      })
    }
  }
  for (let i = 6282; i <= 6288; i++) {
    for (let j = "000000000000"; (i + j).length <= 19; j += "0") {
      it ("has a prefix of " + i + " and a length of " + (i + j).length, function () {
        expect(detectNetwork(i + j)).to.equal("China UnionPay");
      })
    }
  }
});




//Switch는 항상 4903, 4905, 4911, 4936, 6333, 6759, 564182, 633110의 접두사와 16, 18, 또는 19의 길이를 가집니다.
describe("Switch", function() {
  let expect = chai.expect;
  let prefixArrLength4 = [4903, 4905, 4911, 4936, 6333, 6759];

  for (let i = 0; i < prefixArrLength4.length; i++) {
    for (let j = "000000000000"; (prefixArrLength4[i] + j).length <= 18; j += "00") {
      it ("has a prefix of " + prefixArrLength4[i] + " and a length of " + (prefixArrLength4[i] + j).length, function () {
        expect(detectNetwork(prefixArrLength4[i] + j)).to.equal("Switch");
      })
    }
    it ("has a prefix of " + prefixArrLength4[i] + " and a length of " + (prefixArrLength4[i] + "000000000000000").length, function () {
      expect(detectNetwork(prefixArrLength4[i] + "000000000000000")).to.equal("Switch");
    })
  }

  let prefixArrLength6 = [564182, 633110];

  for (let i = 0; i < prefixArrLength6.length; i++) {
    for (let j = "0000000000"; (prefixArrLength6[i] + j).length <= 18; j += "00") {
      it ("has a prefix of " + prefixArrLength6[i] + " and a length of " + (prefixArrLength6[i] + j).length, function () {
        expect(detectNetwork(prefixArrLength6[i] + j)).to.equal("Switch");
      })
    }
    it ("has a prefix of " + prefixArrLength6[i] + " and a length of " + (prefixArrLength6[i] + "0000000000000").length, function () {
      expect(detectNetwork(prefixArrLength6[i] + "0000000000000")).to.equal("Switch");
    })
  }
});
