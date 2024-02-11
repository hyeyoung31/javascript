
/*
tab-content 안의 div를 모두 안보이도록 한다.

링크를 클릭하면 클릭한 그 요소의 href 속성의 값을 변수 tabTarget에 저장.
저장된 값에서 #을 삭제한다
tabTarget = tabs-1
document.getElementById(tabs-1).style.display='block'

*/

var targetLink = document.querySelectorAll('.tab-menu a');
var tabContent = document.querySelectorAll('#tab-content >div ');
console.log(targetLink);

// a태그들 마다 할일

//애가 어떤걸 클릭하는지 알려면 선택한 요소를 물고 들어와야 함. e가 반드시 있어야함!!
// e.target (a링크 3개있는데 그 중 누구 선택했는지 알 수 있음)
// attribute 중 href가져와야함
for(var i=0; i<targetLink.length; i++){

targetLink[i].addEventListener('click', function(e){
   e.preventDefault();
   var orgTarget = e.target.getAttribute('href');
   console.log(orgTarget);
   var tabTarget = orgTarget.replace('#','');

   for(var x =0; x < tabContent.length; x++){
      tabContent[x].style.display ='none'
   }
 document.getElementById(tabTarget).style.display = 'block';

 for(var j = 0; j<targetLink.length; j++){
       targetLink[j].classList.remove('active');
       e.target.classList.add('active');
 }
});   
}
document.getElementById('tabs-1').style.display = 'block'


// t생각하는과정
//var orgTarget = "#tabs-1"; //a.replace('b','c');
// var tabTarget = orgTarget.replace('#','');
// var tabTarget = 'tabs-1';
// document.getElementById(tabTarget).style.display = 'block';
