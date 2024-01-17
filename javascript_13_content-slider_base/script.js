

// 변수 지정
var sliderWrapper = document.getElementsByClassName('container'), //클래스명 container
    sliderContainer = document.getElementsByClassName('slider-container'), //클래스명 slider-container
    slides = document.getElementsByClassName('slide'),// 클래스명 slide
    slideCount = slides.length, //슬라이드의 개수
	currentIndex = 0, //시작하자 마자. 클릭할 때마다 숫자를 바꾼다. 처음과 끝을 파악한다
    topHeight = 0, //슬라이드 제일 높은 애를 가져와 부모의 높이로 반영해줄 것
    navPrev = document.getElementById('prev'), // 아이디 prev
    navNext = document.getElementById('next'); // 아이디 next

    
//슬라이드의 높이 확인하여 부모의 높이로 지정하기

  function calculateTallestSlide(){
    for(var i = 0; i < slideCount ; i++){
        if(slides[i ].offsetHeight > topHeight){
            topHeight = slides[i].offsetHeight;
        }
    }

    sliderWrapper[0].style.height = topHeight + 'px';
    sliderContainer[0].style.height = topHeight + 'px';  
  }

  calculateTallestSlide();
// 슬라이드가 있으면 가로로 배열하기

  //  for(var i = 0; i < slideCount; i++){
  //   slides[i].style.left = i * 100 + '%';
  //  }

// 슬라이드 이동 함수 

  // function goToSlide(idx){
  //   sliderContainer[0].style.left = idx * -100 + '%';
  //   sliderContainer[0].classList.add('animated')
  //   currentIndex = idx;  

  //   updateNav();
  // }

// className: 이미 클래스이름 있을 때 기존 클래스를 교체해버림
// classList: 클래스명 새로 더함
 
// 버튼기능 업데이트 함수
/*
function updateNav(){
 //처음일때
  if(currentIndex == 0){
     navPrev.classList.add('disabled');
  }else{
     navPrev.classList.remove('disabled');
  }

 if(currentIndex == slideCount -1){
    navNext.classList.add('disabled');
 }else{
   navNext.classList.remove('disabled');
 }
 }
  //마지막일 때
// 버튼을 클릭하면 슬라이드 이동시키기
 navPrev.addEventListener('click',function(e){
  e.preventDefault();
  // goToSlide(currentIndex - 1);]
  //처음이 아니라면 goToSlide(currentIndex - 1)
  //처음이라면 goToSlide(???)
  if(currentIndex > 0){
    goToSlide(currentIndex - 1);
  } else{
    goToSlide(slideCount-1)
  }
 });

 navNext.addEventListener('click',function(e){
   e.preventDefault();
  //  goToSlide(currentIndex + 1);

   if(currentIndex < slideCount-1){
    goToSlide(currentIndex + 1);
  } else{
    goToSlide(0);
  }
 });

//기본링크가 걸리는걸  매게 변수(event 던 ev던 로 막는다.


//첫번째 슬라이드 먼저 보이도록 하기
goToSlide(0);

*/