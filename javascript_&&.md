# && 연산자 <= and가 아님

"그냥 왼쪽 오른쪽 둘다 true면 전체를 true로 바꿔주세요~" 라고 쓰고싶을 때 사용
 
ex)
==================================================================================================
true && false;
true && true;
==================================================================================================
맨 위의 코드는 그 자리에 false가 남고
밑의 코드는 true가 남는다.

근데 자바스크립트는 && 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면
==================================================================================================
true && '안녕';
false && '안녕';
true && false && '안녕';
==================================================================================================
맨 윗 코드는 '안녕'이 남고
중간 코드는 false가 남고
맨 아래 코드는 false가 남는다.
 

왜냐면 && 연산자를 잘 생각해보면 이해도 가능한데 이해를 하기 싫으면 
"자바스크립트는 그냥 &&로 연결된 값들 중에 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막값을 남겨준다"
이런 이상한 현상이 있다고 외운다.

이걸 리액트에서 약간 exploit 하면 if문을 조금 더 간략하게 사용 할 수 있다.