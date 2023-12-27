/*
대상.addEventListener('click',function(){

});
*/
var btn = document.getElementById('submit');
btn.addEventListener('click', function () {
  alert('반갑습니다');
});

var container = document.querySelector('.container');


// mouseover mouse out: 조금이라도 마우스가 움직이면 반복
var i = 0; /*콘솔 확인용*/
/*
container.addEventListener('mouseover', function(){
  container.style.backgroundColor = '#ebebeb';
  console.log('mouseover', i++);
});

container.addEventListener('mouseout', function(){
  container.style.backgroundColor = '';
  console.log('mouseout');
});
*/

//mouseenter, mouseleave
container.addEventListener('mouseenter', function () {
  // container.style.backgroundColor = '#ebebeb';
  this.style.backgroundColor = '#ebebeb';
  // 이벤트가 일어난 요소를 this로 쓸 수 있다.
  console.log('mouseover', i++);
});

container.addEventListener('mouseleave', function () {
  container.style.backgroundColor = '';
  console.log('mouseout');
});

//change
var colorSelect = document.getElementById('color');
console.log(colorSelect);
colorSelect.addEventListener('change', function () {
  // var target = document.querySelector('body');
  var target = document.body;
  // var selectedValue = colorSelect.value;
  var selectedValue = this.value;
  // 컬러 셀렉트 이벤트가 일어난 그 요소를 this로 받을 수 있다.
  console.log(selectedValue);
  target.style.backgroundColor = selectedValue;
  // 변수명임으로 따움표 때야함. 'selectedValue'하면 문자로 색상 자체가 됨. 이런 색상은 없음으로 오류
});