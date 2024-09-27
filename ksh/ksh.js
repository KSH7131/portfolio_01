// window.addEventListener("load", function(){
// const mynavi =  this.document.querySelectorAll("#navmenu li");
//   // 배열형 데이터

//   mynavi[1].innerHTML = 
//   `<a href="${navidata[0].d1href}">
//   ${navidata[0].d1text}
//   </a>
//   `;

//   mynavi[2].innerHTML = 
//   `<a href="${navidata[1].d1href}">
//   ${navidata[1].d1text}
//   </a>
//   `;

//   mynavi[3].innerHTML = 
//   `<a href="${navidata[2].d1href}">
//   ${navidata[2].d1text}
//   </a>
//   `;

//   mynavi[4].innerHTML = 
//   `<a href="${navidata[3].d1href}">
//   ${navidata[3].d1text}
//   </a>
//   `;


// })

window.addEventListener("load", function(){
  const mynavi = this.document.querySelectorAll("#navmenu li");
  
  for (let i = 0; i < 4; i++) {
    mynavi[i+1].innerHTML = 
    `<a href="${navidata[i].d1href}">
    ${navidata[i].d1text}
    </a>
    `;
  }
});