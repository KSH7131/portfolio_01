const mynavi = document.querySelector("#navmenu ul");
let mytag = '';
for (x in navidata) {
  mytag += `<li>
  <a href="${navidata[x].d1href}">
  ${navidata[x].d1text}
  </a>
  </li>`;
}
mynavi.innerHTML = mytag;

// 2. 카드 사이즈 토글 기능
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

// 3. 메인 비주얼 패딩 조정
const mainVisual = document.querySelector("#mainVisual");
const headerh = document.querySelector("#header");

mainVisual.style.paddingTop = headerh.offsetHeight + 'px';

window.addEventListener('resize', function() {
  mainVisual.style.paddingTop = headerh.offsetHeight + 'px';
});

// 4. 모바일 네비게이션 메뉴 열고 닫는 기능 추가
document.querySelector('.mobile-nav-toggle').addEventListener('click', function() {
  const nav = document.querySelector('#navmenu ul');
  nav.classList.toggle('mobile-nav-active');
  this.classList.toggle('bi-x');
  this.classList.toggle('bi-list');
});