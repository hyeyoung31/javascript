//document.getElementsByTagName('태그명');
//대상.style.css속성명 = '값';
// DOMContentLoaded 로드되면 이라는 이벤트 커지면 

/*
document.addEventListener('DOMContentLoaded',function(){
    console.log(document.getElementsByTagName('h1'));
    document.getElementsByTagName('h1')[0].style.color = 'blue';
 
});*/

//태그명 요소, 스타일 컬러 변경
document.getElementsByTagName('h1')[0].style.color = 'blue';

//document.getElementById('아이디명)
document.getElementById('list1').style.backgroundColor = 'silver';
console.log(document.getElementById('list1'));

// 클래스명 요소 
//document.getElementsByClassName('클래스명')
// list-style:none;
var list = document.getElementsByClassName('list');
console.log(list);
/*
list[0].style.listStyle = 'none';
list[1].style.listStyle = 'none';
list[2].style.listStyle = 'none';


for(초기문;조건;증감){
    반복할 구문
}*/


for (var i = 0; i < list.length; i++) {
    list[i].style.listStyle = 'none';
}

//css 선택자
//document.querySelector('선택자')
//document.querySelectorAll('선택자')
//#list3 .red
// document.querySelector('#list3 .red').style.color ='blue';
console.log(document.querySelectorAll('#list3 .red'));
document.querySelectorAll('#list3 .red')[0].style.color = 'blue';
document.querySelector('#box div div').style.backgroundColor = '#3498db'

var myParagraph = document.querySelectorAll('article p');
console.log(myParagraph);

/*
for(var i=0; i<myParagraph.length; i++){
    myParagraph[i].style.backgroundColor= '#ebebeb' ;
}
*/

// for of
/*for(mp of myParagraph){
    mp.style.backgroundColor = '#ebebeb';
}*/

// while구문
/*
var i = 0;
while(i<myParagraph.length){
    myParagraph[i].style.backgroundColor = '#ebebeb';
}
*/

/*
var i = 0; 
do {
    myParagraph[i].style.backgroundColor = '#ebebeb';
}
while(i<myParagraph.length);
*/

myParagraph.forEach(function (item, idx) {
    item.style.backgroundColor = '#ebebeb';
});

