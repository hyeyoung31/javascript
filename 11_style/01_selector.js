

//1.태그명으로 색상 바꾸기
// document.getElementsByTagName('h1')[0].style.color = 'blue';

//2.아디미영으로 바탕색상 바꾸기
document.getElementById('list1').style.backgroundColor = '#ebebeb';
console.log(document.getElementById('list1'));

//3.클래스명으로 리스트 스타일 없애기
var list = document.getElementsByClassName('list');
console.log(list); //유사배열

//방법1)
/*
list[0].style.listStyle = 'none';
list[1].style.listStyle = 'none';
list[2].style.listStyle = 'none';
*/


//방법2) 반복문을 활용한다
/*

/*
for (var i = 0; i < list.length; i++) {
    list[i].style.listStyle = 'none';
}
*/
for (item of list){
     item.style.listStyle = 'none';
}

//4.css선택자로 선택하기
// document.querySelector('선택자')
//document.querySelectorAll('선택자')

// document.querySelector('#list3 .red').style.color ='blue';
// console.log(document.querySelectorAll('#list3 .red'));
document.querySelectorAll('#list3 .red')[0].style.color = 'blue';
document.querySelector('#box div div').style.backgroundColor = '#3498db'

// 5. css선택자 반복문. 모든 p의 색상 변경

var myParagraph = document.querySelectorAll('article p');
console.log(myParagraph);


//5-1 for 구문
/*
for(var i=0; i<myParagraph.length; i++){
    myParagraph[i].style.backgroundColor= '#ebebeb' ;
}
*/

//5-2 for of 구문
/*for(mp of myParagraph){
    mp.style.backgroundColor = '#ebebeb';
}*/

//5-3while구문
/*
var i = 0;
while(i<myParagraph.length){
    myParagraph[i].style.backgroundColor = '#ebebeb';
    i++;
}
*/

//5-4 do while구문
/*
var i = 0; 
do {
    myParagraph[i].style.backgroundColor = '#ebebeb';
    i++;
}
while(i<myParagraph.length);
*/

myParagraph.forEach(function (item, idx) {
    item.style.backgroundColor = '#ebebeb';
});
