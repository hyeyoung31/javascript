document.addEventListener('DOMContentLoaded', function () {

    // 변수 지정
    var $slideWrap = document.querySelector('.container'),
        $slideContainer = document.querySelector('.slider-container'),
        $slide = document.querySelectorAll('.slide'),
        $navPrev = document.getElementById('prev'),
        $slideHeight = 0,
        $slideCount = $slide.length,
        $currentIndex = 0,
        // $pager = document.querySelector('.pager'),
        $navNext = document.getElementById('next'),
        $timer = undefined,
        $pagerHTML = '',
        $pager = document.querySelector('.pager');
    // $pagerBtn = document.querySelectorAll('.pager span'),

    // 이름은 있는데 값이 지정 안되어있음

    //슬라이드의 높이 확인하여 부모의 높이로 지정하기 - 대상.offsetHeight
    for (var i = 0; i < $slideCount; i++) {
        if ($slideHeight < $slide[i].offsetHeight) {
            $slideHeight = $slide[i].offsetHeight;
        }
    }
    console.log($slideHeight);

    $slideWrap.style.height = $slideHeight + 'px';
    $slideContainer.style.height = $slideHeight + 'px';

    // 슬라이드가 있으면 가로로 배열하기
    for (var a = 0; a < $slideCount; a++) {
        $slide[a].style.left = a * 100 + '%';
        //HTML 슬라이드 개수 만큼 pager생성
        // <span data-idx="0">1</span>
        // var i = 2; i = i+2; i += 2//$pagerHTML = $pagerHTML + <span>

        $pagerHTML += '<span data-idx="' + a + '">' + (a + 1) + '</span>'
        $pager.innerHTML = $pagerHTML;
        //  문자''
    }

    var $pagerBtn = document.querySelectorAll('.pager span');


    // 슬라이드 이동 함수 
    function goToSlide(idx) {
        $slideContainer.classList.add('animated');
        $slideContainer.style.left = -100 * idx + '%';
        $currentIndex = idx;
        // pager

        // 모든 $pagerBtn에 active 제거, 클릭된 그 요소에만 active 추가
        // $pagerBtn[0].classList.remove('active');
        for (var y = 0; y < $pagerBtn.length; y++) {
            $pagerBtn[y].classList.remove('active');
        }
        $pagerBtn[idx].classList.add('active');

    }//goToSlide

    goToSlide(0);

    // 버튼을 클릭하면 슬라이드 이동시키기
    $navPrev.addEventListener('click', function () {
        //goToSlide($currentIndex - 1);

        if ($currentIndex == 0) {
            //$navPrev.classList.add('disabled');
            goToSlide($slideCount - 1);
        } else {
            //$navPrev.classList.remove('disabled');
            goToSlide($currentIndex - 1);
        }
    });

    $navNext.addEventListener('click', function () {
        //goToSlide($currentIndex + 1);

        if ($currentIndex == $slideCount - 1) {
            // $navNext.classList.add('disabled');
            goToSlide(0);
        } else {
            // $navNext.classList.remove('disabled');
            goToSlide($currentIndex + 1);
        }
    });

    //자동 슬라이드

    //첫번째 슬라이드 먼저 보이도록 하기
    goToSlide(0);

    //자동 슬라이드
    //4초마다 goToSlide(숫자); 0, 1,2, 3,...5,0 
    //setInterval(할일,시간);
    //함수 = 할일 = function() {실제할일}
    // 실제 할일 = goToSlide(숫자); 0,1,2,3,..5,0

    //  var timer = setInterval(function(){ % $slideCount; 
    //     goToSlide(숫자); 0, 1,2, 3,...5,0
    //     ci 0 4초 ni 1, ci 1 4ch ni 2....ci 5 4초 ni 0
    //     var nextIdx = ($currentIndex + 1)
    //나눈 나머지

    //     goToSlide(nextIdx);
    //   },4000);
    // ClearInterval(대상)
    //자동 슬라이드 함수



    function startAutoSlide() {
   /*var*/ $timer = setInterval(function () {

        var nextIdx = ($currentIndex + 1) % $slideCount;

        goToSlide(nextIdx);
    }, 4000);
    }

    startAutoSlide();

    $slideWrap.addEventListener('mouseenter', function () {
        // timer는 startAutoslide안에서 쓰는 지역변수. 전역 변수로 바꿔줘야 함
        clearInterval($timer);
    });


    // 상황에 따라 계속 일을 시키기 위해서는 함수가 필요함. 마우스가 나갔을 때 재사용하기 위해 함수로 만든다

    $slideWrap.addEventListener('mouseleave', function () {
        startAutoSlide();
    });

    // pager로 슬라이드 이동하기
    // 요소자체를 물거들어옴 event
    for (var x = 0; x < $pagerBtn.length; x++) {
        $pagerBtn[x].addEventListener('click', function (event) {
            console.log(event.target.innerText);
            // 1)데이터 인덱스 속성가져와 pager Num에 넘김
            var pagerNum = event.target.getAttribute('data-idx');
            // 2)span 사이 글자로 넘김
            var pagerNum = event.target.innerText - 1;
            goToSlide(pagerNum);

        });
    }
});//DOMcontentloaded



// innerText : 그 태그안에 내용을 반환 A.innerText /내용 확인. A.innerText = 'B'/A안에 내용을 B로 교체
// innerHTML : 의 태그를 반환 A.innerHTML / A.innerHTML = '<h2>' 안에 h1이 있었는데 h2로 바뀌는 식
