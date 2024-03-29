# 자바스크립트에서 || 은 참과 거짓을 판단하는 연산자가 아닙니다.

## | 자바스크립트에서 논리연산자에 대한 오해

```
논리 연산자는 보통 조건문 if 와 함께 배우다보니 || 과 && 같은 연산자가 true 나 false 를 반환 하는 참과 거짓을 판단해주는 연산자로 오해하곤 합니다. 
무엇보다 혼란을 줄 수 있는게, 다른 많은 프로그래밍 언어에서도 이런식으로 작동하기 때문이죠. 
```

```javascript
const n1 = 1, n2 = 2;

if (n1===1 && n2===2) {
	console.log("n1은 1이고 n2는 2이다.");
}
```

```
위의 코드만 봐도 그런식으로 작동한다고 생각하고 넘어가도 문제가 없습니다. 
하지만 이런식으로 이해하는 개발자의 경우 if 문 밖에서는 논리연산자를 제대로 활용하지 못합니다.
```

## | 사실 논리연산자는 피연산자 중 하나를 반환합니다.

```
자바스크립트에서 논리연산자는 단순히 참과 거짓을 판단해주는 연산자가 아니라 연산에 사용된 피 연산자 중 하나를 반환해주는 연산자에 불과합니다. 
```

```javascript
const n1 = true;
3 || 4     // 3
n1 || 8    // true
false || 4 // 4
0 || 9     // 9
```

```
논리 OR 연산자를 살펴봅시다. 
이 연산자는 → 방향으로 연산을 진행하고 가장 먼저 참(true) 의 형태를 가진 value 가 나오는 경우 그 피연산자를 바로 반환해버리고 연산을 끝내버립니다.
2번째 라인을 살펴보면 3 과 4 의 || 연산 결과로 3이 나왔습니다. 
이는, 0이 아닌 정수는 true 로 판단하기 때문에(정확히는 || 연산자의 피 연산자로 정수가 오는 경우 Boolean 으로 암묵적 형 변환이 이루어지기 때문에) 뒤에 있는 피연산자는 확인도 안하고 바로 3이 반환됩니다. 다른 라인도 이와 같이 동작합니다. 
false 와 4를 || 연산하는 경우에는 두번째 피연산자까지 연산을 진행하고, 0이 아닌 정수이기 때문에 true로 판단하여 4라는 값 그대로 반환합니다.

그렇다면 이게 어떻게 if 문 안에 들어갔을 때 제대로 동작하는걸까요?
```

```javascript
if (3 || 4) {
	console.log("true 입니다");
}
```

```
if 문 안에서 논리 연산자가 들어간다고 해서 달라지는건 없습니다. 위의 if 문의 조건식에서 '3 || 4' 의 결과로 반환되는건 '3' 이고 이렇게 반환된 3은  if 문 안에서 Boolean 형으로 암묵적 형 변환이 일어나면서 true로 판단됩니다. 그 뿐입니다.
```

```javascript
var obj = { };

if (obj) {
	console.log("obj 가 존재하잖아?");
}
```

```
이런 if 문의 Boolean 암묵적 형변환은 위와같이 변수에 객체(Object)가 제대로 할당되어 있는지 확인할 때 유용하게 사용할 수 있습니다. 
객체의 경우 true 로 형변환이 되고, 만약에 할당되어 있지 않는다면 보통 undefined가 들어가며, undefined는 false 로 형변환이 됩니다. 이미 많이 접해본 코드죠? 
```

## | 논리연산자 활용하기

```
이런 논리연산자의 특성을 활용하는 방법중에 가장 많이 쓰이는 방법은 매개변수 디폴트 할당이 있습니다.
```

```javascript
function foo(num) {
	const n = num || 99; //만약 num값이 들어오지 않는다면, undefined가 됩니다.
	console.log(n);
}

foo(3); // 3
foo();  // 99
```

```
foo 함수를 호출할 때 매개변수를 전달하지 않는다면, num 은 undefined 가 되고 이건 false 로 판단되어 뒤의 값인 99가 기본으로 반환됩니다. 이렇게 Boolean 으로 형 변환 했을 때 false 로 판단되는 값들을 보통 falsy 한 값들이라고 부릅니다.
```

```javascript
function foo(num = 99) {
 //...
}
```

```
참고로 이 매개변수 디폴트 할당은 ES6 표준부터는 문법적인 차원에서 지원합니다. 
위의 예제에서 보듯이 매개변수 부분에 기본 값을 할당해주면 매개변수가 들어오지 않을경우에도 기본 값이 할당됩니다. 
```