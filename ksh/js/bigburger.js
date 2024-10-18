window.addEventListener('load', function() {
  // Bigburger Swiper 초기화
  var swiperBigburger = new Swiper('#bigburger .swiper-container', {
    slidesPerView: 1, // 한 번에 1개의 슬라이드 표시
    spaceBetween: 0, // 슬라이드 간 간격
    autoplay: {
      delay: 2000, // 2초마다 슬라이드 변경
      disableOnInteraction: true, // 상호작용해도 자동 슬라이드 유지
    },
    effect: 'fade', // 흐릿하게 전환되는 효과 적용
    fadeEffect: {
      crossFade: true, // 슬라이드가 교차하면서 페이드되도록 설정
    },
    speed: 750, // 페이드 전환 속도 (밀리초 단위)
    pagination: {
      el: '#bigburger .swiper-pagination', // 페이지네이션 요소
      clickable: true, // 클릭 가능
      renderBullet: function(index, className) {
        const slide = this.slides[index].querySelector('img');
        const imgSrc = slide ? slide.src : ''; // 이미지 URL이 있으면 가져옵니다.
        return `<span class="${className}"><img src="${imgSrc}" alt="슬라이드 이미지"></span>`;
      },
    },
    navigation: {
      nextEl: '#bigburger .swiper-button-next', // 다음 버튼
      prevEl: '#bigburger .swiper-button-prev', // 이전 버튼
    },
    on: {
      slideChange: function() {
        const index = this.activeIndex; // 현재 활성 슬라이드 인덱스
        const titles = document.querySelectorAll('.context .tit span');
        const texts = document.querySelectorAll('.context .txt span');

        // 모든 타이틀 및 텍스트 숨김
        titles.forEach(title => title.style.display = 'none');
        texts.forEach(text => text.style.display = 'none');

        // 현재 슬라이드와 관련된 타이틀 및 텍스트 표시
        titles[index].style.display = 'inline'; // 현재 제목 표시
        texts[index].style.display = 'inline'; // 현재 설명 표시
      },
    },
  });

  // 초기 상태에서 첫 번째 슬라이드에 해당하는 텍스트만 표시
  const initialIndex = swiperBigburger.activeIndex;
  const titles = document.querySelectorAll('.context .tit span');
  const texts = document.querySelectorAll('.context .txt span');

  titles.forEach(title => title.style.display = 'none');
  texts.forEach(text => text.style.display = 'none');

  titles[initialIndex].style.display = 'inline';
  texts[initialIndex].style.display = 'inline';

  // Main Visual Swiper 초기화
  const swiperMainVisual = new Swiper('#mainVisual .swiper-container', {
    loop: true,  // 슬라이드가 반복되도록 설정
    autoplay: {
      delay: 5000,  // 5초마다 자동으로 슬라이드 전환
      disableOnInteraction: false,  // 유저의 상호작용 후에도 자동 재생 유지
    },
    navigation: {
      nextEl: '#mainVisual .swiper-button-next',  // 다음 슬라이드로 가는 버튼
      prevEl: '#mainVisual .swiper-button-prev',  // 이전 슬라이드로 가는 버튼
    },
    effect: 'fade',  // 슬라이드 전환 효과를 페이드로 설정
  });  
});

// 이미지 확장
function toggleSize(card) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(c => {
      if (c !== card) {
          c.classList.remove('expanded');
          c.classList.add('collapsed');
      }
  });

  card.classList.toggle('expanded');
  card.classList.toggle('collapsed');
}

function aosInit() {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', aosInit);
