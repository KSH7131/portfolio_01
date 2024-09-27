  window.addEventListener("load", function(){
  const mynavi =  this.document.querySelector("#navmenu ul");

  let mytag = '';

  for(x in navidata){
    mytag += `<li>
    <a
    href="${navidata[x].d1href}"
    target="${navidata[x].__target}">
    ${navidata[x].d1text}
    </a>
    </li>`;
  }

  mynavi.innerHTML = mytag;
})