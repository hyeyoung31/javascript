document.addEventListener('DOMContentLoaded', ()=>{
  let btt = document.querySelector('#go-top');
  //document.documentElement.scrollTop
  //window.pageYoffset

  let scrollAmt;

  window.addEventListener('scroll',()=>{
    scrollAmt = window.pageYOffset;
    console.log(scrollAmt);
    if(scrollAmt > 300){
    // 에드는 기존의 클래스 있을 때 더불어 추가
    // btt.classList.add('active');
    // 네임은  기존의 클래스가 있을 때 없애고 새로 추가
    btt.className = 'active';
    }else{
      btt.classList.remove('active');
    }
   });//scroll event

   btt.addEventListener('click', (e)=>{
    // 지금도 링크 누르면 위로 올라가기 때문에 링크 기본 기능막음
    e.preventDefault();
    window.scrollTo({
        top:0,
        left:0,
         //behavior: scroll옵션값
        behavior:'smooth'
    });
   });
});