# node.js에 대해 알아보자!

```
Node.js는 Chrome V8 JavaScript 엔진으로 빌드 된 JavaScript 런타임입니다.
즉, 노드를 통해 다양한 자바스크립트 애플리케이션을 실행할 수 있으며, 서버를 실행하는 데 제일 많이 사용된다.
```
```
Node.js는 JavaScript를 서버에서도 사용할 수 있도록 만든 프로그램이다.
Node.js는 V8이라는 JavaScript 엔진 위에서 동작하는 자바스크립트 런타임(환경)이다.
Node.js는 프로그램(환경)이다.
Node.js는 웹서버와 같이 확장성 있는 네트워크 프로그램을 제작하기 위해 만들어졌다.
```

<br/>

```
가장 중요한 특징으로는 Node.js는 단일쓰레드 기반 비동기 방식이라는 것이다.
```
```
쓰레드 기반 동기방식(Blocking I/O)

하나의 쓰레드가 request를 받으면 모든 처리가 완료될때까지 기다리다가 처리결과가 완료되면 다시 응답을 보낸다.
기존 업무 처리가 완료되기 전에 또다른 request가 있으면 새로운 쓰레드가 업무를 처리함.
동시 request가 많은 경우 많은 쓰레드가 필요하게 되어 서버에 과부하가 오게 된다.
```
```
단일쓰레드 이벤트 루프 기반 비동기방식( Non-Blocking I/O)

하나의 쓰레드가 request를 받으면 바로 다음 처리에 요청을 보내놓고 다른 작업을 처리하다가 먼저 요청한 작업이 끝나면 이벤트를 받아서 응답을 보낸다.
동시 request가 오더라도 처리가 완료될때까지 기다리지 않아도 되기 때문에 서버 부하가 적다.
```

