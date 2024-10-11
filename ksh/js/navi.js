
  const mynavi =  this.document.querySelector("#navmenu ul");

  let mytag = '';

  for(x in navidata){
    mytag += `<li>
    <a
    href="${navidata[x].d1href}"
    >
    ${navidata[x].d1text}
    </a>
    </li>`;
  }

  mynavi.innerHTML = mytag;


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


    const mainVisual = document.querySelector("#mainVisual");
    const headerh = document.querySelector("#header");

    mainVisual.style.paddingTop =headerh.offsetHeight + 'px';


    window.addEventListener('resize', function(){

      mainVisual.style.paddingTop =headerh.offsetHeight + 'px';
    })
