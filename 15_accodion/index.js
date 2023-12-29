let panelQuestion = document.querySelectorAll('.panel-question');
let btnCollapse = document.getElementById('btn-collapse');

// question마다 할일. for of

for(var pq of panelQuestion){
  pq.addEventListener('click',function(){
   hideAll();
   // 클릭이벤트가 일어난 요소 this로 받을 수 있음.
   this.classList.add('active');
  });
}

function hideAll(){
  for(q of panelQuestion){
    q.classList.remove('active');
  }  
}

// btnCollapse.addEventListener('click', function(){
//     hideAll();
// });

// btnCollapse.addEventListener('click', ()=>{
//     hideAll();
// });


btnCollapse.addEventListener('click',  hideAll);
