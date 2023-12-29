/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.
*/

const tabMenu = document.querySelectorAll('.tab-menu li');
const tabContent = document.querySelectorAll('#tab-content > div');
const hightLight = document.querySelector ('.highlight');

//showContent 함수
// 숫자가 넘어오면 그 숫자만 보이게함.
function showContent(num){
  //탭 컨텐트 안에 있는 각 항목을 item 이라는 매게변수로 받아서 이 함수에 슴. 
 tabContent.forEach(function(item){
    item.style.display = 'none';
 });
 tabContent[num].style.display = 'block';
}
showContent(0);


//메뉴 클릭 이벤트
//몇번 클릭했는지 인덱스 번호까지 활용하는 반복문은 forEach가 유일
//li클릭했는데 li안에는 a태그가 있음 이벤트의 기본 기능막음

 tabMenu.forEach(function(item,idx){
  item.addEventListener('click',function(e){
     e.preventDefault();
     showContent(idx);
     moveHightlight(idx);
  });
 });

//Highlight 이동함수
function moveHightlight(num){
  let newLeft = tabMenu[num].offsetLeft;
  let newWidth = tabMenu[num].offsetWidth;
  console.log(newLeft, newWidth);
  hightLight.style.left = newLeft + 'px';
  hightLight.style.width = newWidth+ 'px';

}