# 이벤트 위임
<hr>

이벤트 리스너를 하위 요소에 추가하는 대신 상위 요소에 추가하는 기법이다. 리스너는 `event bubling`을 통해 하위요소에서 이벤트가 발생할 때 마다 실행된다.

이를 통해, 
- 각 하위 요소에 이벤트 리스너를 연결하는 대신 상위요소에만 리스너를 연결하여 메모리 사용공간이 줄어든다.
- 제거된 요소를 해제하고 새로운 요소에 대해 바인딩할 필요가 없다.

<prac.html>
```
<ul id="parent">
    <li id="post1">내용1</li>
    <li id="post2">내용2</li>
    <li id="post3">내용3</li>
</ul>
```
<prac.js>
```
document.getElementById("parent").addEventListener('click', (e) => {
    if(e.target){
        console.log(e.target.nodeName);
        console.log(`pressed ${e.target.id}`)
    }
})
```
부모 요소인 `ul`태그에 이벤트 리스너를 할당하여 `e.target` 값을 통해 어떤 요소가 클릭 되었는지 알 수 있다.

## DOM 이벤트 흐름
1. 캡처링 단계
2. 타깃 단계
3. 버블링 단계

브라우저에서 어떤 요소를 클릭할 경우 3가지 단계로 나뉜다. 캡처링 단계를 통해 이벤트가 하위 요소에 전파되며 타깃 단계에서 실제 클릭한 요소에서 이벤트를 발생시키고 버블링 단계를 통해 다시 위로 전파시킨다.

