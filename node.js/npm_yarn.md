# npm과 yarn에 대해 알아보자!

1. npm이란?
```
Node.js는 자바스크립트 기반 개발 환경이다.
전 세계 개발자들이 자바스크립트로 패키지를 만들었고, 그 패키지를 포장해서 모아 놓은 곳이 npm이다.
Node.js로 자바스크립트 개발 환경을 구축하고, npm으로 필요한 자바스크립트 앱 개발 도구들을 설치 해 사용한다.
```
ex) Spring Framework의 maven 같은거(?)

2. yarn이란?
```
npm의 단점들을 보완하여 나온 패키지 관리 도구이다.
npm은 패키지가 설치 될 때 자동으로 코드와 의존성을 실행할 수 있도록 허용했다. 
이 특징은 편리하나 안정성의 위험도가 증가했다. 
특히 정책 없이 등록하였던 패키지 제출물 부분에서 위험도가 높았다. 
반면에 yarn은 yarn.lock이나 package.json으로 부터 설치만 한다. 
더 구체적으로 말하자면 yarn.lock은 모든 디바이스에 같은 패키지를 설치하는 것을 보장하여 다른 버전을 설치로 부터 버그가 오는 많은 양을 줄여버렸다.
```