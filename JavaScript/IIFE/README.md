# IIFE(Immediately Invoked Function Expresstion)

<hr>

IIFE: 즉시 호출되는 함수는 다른 곳에서 호출되지 않고 생성된 직후 실행되는 함수이다.

### JavaScript에서 `function foo(){}();`를 실행할 경우 오류가 발생하는 이유

JavaScript 파서는 Syntax 에러를 발생시킨다. JS 파서는 `function foo(){}` 구문 까지 함수가 정의되었다는 것을 해석 하지만 `()`에서 호출되는 함수명이 명시되어 있지 않아 구문 오류를 발생시킨다.

이를 괄호`()`을 통해 해결하는 2가지 방법이 있다.

1. `(function foo(){}())`
2. `(function foo(){})()`

### 왜 사용하는가?

**_의도하지 않은 hoisting으로 부터 보호하기 위해_**

```
var v = 1;
var getValue = function () {
  return v;
};
v = 2;
console.log(getValue());    // 2
```

변수 `v`는 1로 초기값이 설정 되었다. 비록 `getValue`함수가 변수 `v`가 2로 할당되기 전에 선언되었더라도 출력은 2가된다. 따라서, 변수 `v` 값이 2로 할당되기 전의 값에 접근하고 싶을 경우 `IIFE`을 통해 접근할 수 있다.

```
var v = 1;
var getValue = (function (x) {
  return function () {
    return x;
  };
})(v);
v = 2;
console.log(getValue());    // 1
```

<br></br>

**_객체의 속성과 메소드를 private으로 설정할 수 있다._**

```
var counter = (function () {
  var i = 0;
  return {
    getValue: function () {
      return i;
    },
    setValue: function (x) {
      return (i = x);
    },
  };
})();

console.log(counter.getValue());    // 0
counter.setValue(3);
console.log(counter.getValue());    // 3
console.log(counter.i);             // undefined
```

`IIFE`로 정의된 함수의 변수 `i`는 `counter`을 통해 접근이 불가능하다. 하지만 `IIFE` 함수 내에서는 변수 `i`가 스코프 내에 있기때문에 접근이 가능하다. 따라서 `getValue`와 `setValue` 메소드를 반환하여 counter에서는 반환된 메소드를 통해서만 변수 `i`에 대한 접근이 가능하도록 구현할 수 있다.

참고자료\
http://lucybain.com/blog/2014/immediately-invoked-function-expression/
