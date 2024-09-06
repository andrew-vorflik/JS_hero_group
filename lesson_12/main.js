"use strict";

// function foo1() {
//   console.log("foo1");
// }

// function foo2() {
//   console.log("foo2");
// }

// function foo3() {
//   console.log("foo3");
// }

// foo1();
// foo2();
// foo3();

// function foo1() {
//   console.log("foo1 start");
//   foo2();
//   console.log("foo1 end");
// }

// function foo2() {
//   console.log("foo2 start");
//   foo3();
//   console.log("foo2 end");
// }

// function foo3() {
//   console.log("foo3 start");
//   console.log("foo3 end");
// }

// foo1();

// 1. Global context
// 2. Functional context

// Execution context

/* 
{
  LexicalEnvironment: {
    EnvironmentRecord: {
      type: Global,
      a:
      b:
      sum:
    },
    outer: <link>,
    this: value,
  }
  VariableEnvironment
}
*/

/* 
LexicalEnvironment: {
  EnvironmentRecord: {
  
  },
  outer: <link>,
  this: value,
}
*/

// let a = 10;
// var b = 15;

// function foo() {
//   console.log(a);
// }

// foo();

/* 
// 
GlobalExecutionContext {
  LexicalEnvironment: {
    EnvironmentRecord: {
      type: Global,
      a: 10,
      foo: <reference>
    },
    outer: null,
    this: window,
  }
  VariableEnvironment: {
    EnvironmentRecord: {
      type: Global,
      b: 15,
      foo: <reference>
    },
    outer: null,
    this: window,
  }
}

FunctionalExecutionContext {
  LexicalEnvironment: {
    EnvironmentRecord: {
      type: Functional,
      arguments: [],
    },
    outer: <GlobalExecutionContext>,
    this: window,
  }
  VariableEnvironment: {}
}
*/

// let a = 2;
// const b = 3;
// var c = 5;

// function foo(num1, num2) {
//   var d = 2;
//   return (num1 + num2) * (c + d);
// }

// let result = foo(a, b);
// console.log("result:", result);

/* 
  1 Creation Phase

GlobalExecutionContext {
  LexicalEnvironment: {
    EnvironmentRecord: {
      type: Global,
      a: <uninitialized>,
      b: <uninitialized>,
      foo: <reference>
      result: <uninitialized>,
    },
    outer: null,
    this: window,
  }
  VariableEnvironment: {
    EnvironmentRecord: {
      type: Global,
      c: undefined,
    },
    outer: null,
    this: window,
  }
}

FunctionalExecutionContext {
  LexicalEnvironment: {
    EnvironmentRecord: {
      type: Functional,
      aarguments: [num1, num2],
    },
    outer: GlobalExecutionContext,
    this: window,
  }
  VariableEnvironment: {
    EnvironmentRecord: {
      type: Functional,
      d: undefined,
    },
    outer: GlobalExecutionContext,
    this: window,
  }
}
*/

/* 
2 Execution Phase
GlobalExecutionContext {
  LexicalEnvironment: {
    EnvironmentRecord: {
      type: Global,
      a: 2,
      b: 3,
      foo: <reference>
      result: 35,
    },
    outer: null,
    this: window,
  }
  VariableEnvironment: {
    EnvironmentRecord: {
      type: Global,
      c: 5,
    },
    outer: null,
    this: window,
  }
}

FunctionalExecutionContext {
  LexicalEnvironment: {
    EnvironmentRecord: {
      type: Functional,
      arguments: [num1 = 2, num2 = 3],
    },
    outer: GlobalExecutionContext,
    this: window,
  }
  VariableEnvironment: {
    EnvironmentRecord: {
      type: Functional,
      d: 2,
    },
    outer: GlobalExecutionContext,
    this: window,
  }
}
*/

// let count = 0;

// function raiseCount() {
//   console.log(++count);
// }

// let raiseCount2 = raiseCount;

// raiseCount();
// raiseCount();
// raiseCount();

// raiseCount2();
// raiseCount2();
// raiseCount2();

// function createLikesCount() {
//   let count = 0;

//   return function () {
//     console.log(++count);
//   };
// }

// let addYoutubeLikes = createLikesCount();
// let addInstagramLikes = createLikesCount();

// addYoutubeLikes();
// addYoutubeLikes();
// addYoutubeLikes();

// addInstagramLikes();
// addInstagramLikes();
// addInstagramLikes();

/* 
createLikesCountExecutionContext {
  LexicalEnvironment: {
    EnvironmentRecord: {
      type: Functional,
      argumants: [],
      count: 0,
      anonimusFunction: <reference>
    },
    outer: GlobalExecutionContext,
    this: window,
  }
}

addYoutubeLikesExecutionContext {
  LexicalEnvironment: {
    EnvironmentRecord: {
      type: Functional,
    },
    outer: createLikesCountExecutionContext,
    this: window,
  }
}

createLikesCountExecutionContext {
  LexicalEnvironment: {
    EnvironmentRecord: {
      type: Functional,
      argumants: [],
      count: 0,
      anonimusFunction: <reference>
    },
    outer: GlobalExecutionContext,
    this: window,
  }
}

addInstagramLikesExecutionContext {
  LexicalEnvironment: {
    EnvironmentRecord: {
      type: Functional,
    },
    outer: createLikesCountExecutionContext,
    this: window,
  }
}
*/

// multipleBy

// function multipleBy(a) {
//   return function (number) {
//     console.log(a * number);
//   };
// }

// let multipleBy2 = multipleBy(2);
// let multipleBy3 = multipleBy(3);

// multipleBy2(2);
// multipleBy2(3);
// multipleBy2(4);

// multipleBy3(2);
// multipleBy3(3);
// multipleBy3(4);

// function createLimitedFunction(fn, limit) {
//   let count = 0;

//   return function (...args) {
//     if (count < limit) {
//       fn(...args);
//       ++count;
//     } else {
//       console.log("Limit has been reached");
//     }
//   };
// }

// function sum(a, b) {
//   console.log(a + b);
// }

// function pow(a, b) {
//   console.log(a ** b);
// }

// let limitedSum = createLimitedFunction(sum, 3);
// let limitedPow = createLimitedFunction(pow, 3);

// limitedSum(1, 2);
// limitedSum(2, 2);
// limitedSum(3, 2);
// limitedSum(4, 2);

// limitedPow(2, 2);
// limitedPow(3, 2);
// limitedPow(4, 2);
// limitedPow(5, 2);

// function counter() {
//   return function () {
//     return {
//       increment() {},
//       decrement() {},
//       reset() {},
//     };
//   };
// }

// let count1 = counter();

// count().increment();
// count().decrement();
// count().reset();

// function sequence(...funcs) {
//   return function() {
//     let result;
//     funcs.forEach((fn) => {
//       fn(result);
//     });
//   }
// }

// function foo1(5) {
//   console.log(5 + 1);
// }

// function foo2(6) {
//   console.log(8 + 2);
// }

// function foo3(8) {
//   console.log(11 + 3);
// }

// let func = sequence(foo1, foo2, foo3);

// func(5); // 11

// {
//   source: "instagram", text: "Ваш пост хтось лфйкнув", date: "03-09-2024",
//   source: "instagram", text: "Ваш пост хтось лфйкнув", date: "03-09-2024",
//   source: "telegram", text: "Ваш пост хтось лфйкнув", date: "03-09-2024",
//   source: "youtube", text: "Ваш пост хтось лфйкнув", date: "03-09-2024",
// }

// {
//   instagram: [{source: "instagram", text: "Ваш пост хтось лфйкнув", date: "03-09-2024",}, source: "instagram", text: "Ваш пост хтось лфйкнув", date: "03-09-2024",],
//   telegram: []
//   youtube: []
// }
