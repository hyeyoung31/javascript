//1.아이디 submit버튼을 누르면 경고창 띄우기

/*
대상.addEventListener('click',function(){   
});
*/

var btn = document.getElementById('submit');
btn.addEventListener('click', function () {
  alert('반갑습니다');
});


/*2.클래스명 container에 마우스를 올렸을 때 해당 요소 배경색을 변경,
    마우스가 나가면 다시 원래 상태로 */

var container = document.querySelector('.container');


var i = 0; /*콘솔 확인용*/

container.addEventListener('mouseover', function(){
  container.style.backgroundColor = '#ebebeb';
  console.log('mouseover', i++);
});


container.addEventListener('mouseout', function(){
  container.style.backgroundColor = '';
  console.log('mouseout');
});

//3. mouseover,mouseout/ mouseenter, mouseleave비교
/*
container.addEventListener('mouseenter', function () {
  this.style.backgroundColor = '#ebebeb';
  console.log('mouseenter', i++);
});

container.addEventListener('mouseleave', function () {
  container.style.backgroundColor = '';
  console.log('mouseleave');
});
*/


//change
//select 메뉴 값 선택했을 때 선택 값으로 body 색상 변경
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
