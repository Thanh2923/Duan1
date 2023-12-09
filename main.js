 
 
 let modall = document.querySelector('.open-modal');
  modall.addEventListener('click',oppen);

  function oppen() {
    event.preventDefault();
    let openppp = document.querySelector('.modal');
    openppp.classList.add('open');
  }

  let close = document.querySelector('.x');
    close.addEventListener('click',modalclose)

    function modalclose() {
      event.preventDefault();
      let close_openppp = document.querySelector('.modal');
     close_openppp.classList.remove('open')
    }


    let modal = document.querySelector('.modal');

modal.addEventListener('click', modalclose);

let modal_connent = document.querySelector('.modal_connent');

modal_connent.addEventListener('click', function (event) {
  event.stopPropagation();
})

let arr_hinh = [
  'img/anhnen1.PNG',
  'img/anhnen2.PNG',
  'img/anhnen3.PNG',
]
 let index = 0;
 function next() {
  index++;
  if(index>=arr_hinh.length) index=0;

  let hinh = document.querySelector('#move-ha');
  hinh.src=arr_hinh[index];
  document.querySelector('#dem').innerHTML=index+1+"/"+arr_hinh.length;
 }
  
  setInterval(next,2000);
 
  function prex() {
    index--;
    if(index<0) index=arr_hinh.length - 1;
  
     document.querySelector('#move-ha').src=arr_hinh[index];
    document.querySelector('#dem').innerHTML=index+1+"/"+arr_hinh.length;
  }
    
   
  
 
 let modalll = document.querySelector('.open-modal-dn');
  modalll.addEventListener('click',oppenn);

  function oppenn() {
    event.preventDefault();
    let openppp = document.querySelector('.modal-2');
    openppp.classList.add('open');
  }

  let closedn = document.querySelector('.x-2');
    closedn.addEventListener('click',modalcloses)

    function modalcloses() {
      event.preventDefault();
      let close_openpppp = document.querySelector('.modal-2');
     close_openpppp.classList.remove('open')
    }


    let modallll = document.querySelector('.modal-2');

modallll.addEventListener('click', modalcloses);

let modal_connentl = document.querySelector('.modal_connent-2');

modal_connentl.addEventListener('click', function (event) {
  event.stopPropagation();
})


 function nbh() {
  window.location.href ="nonbaohiem.html";
}
    function qabh() {
  window.location.href="quanaobaoho.html";
}
function tc() {
  window.location.href="index.html";
}

function lh() {
  window.location.href="lienhe.html";
}

function dn() {
  window.location.href="daunhot.html";
}

let img1 = document.querySelectorAll('#img1');
img1.forEach(function (img12, value) {
  img12.addEventListener('mousemove', function () {
    let itemImg_img = document.querySelector('.itemImg_img>img').src = img12.src;
  })


});
let Cart_Img = document.querySelectorAll('.product-1');
Cart_Img.forEach(function (event, index) {
  event.addEventListener('click', function modal_cart_open(event) {
    event.preventDefault();
    let open_modal_cart = document.querySelector('.modal_Cart');
    open_modal_cart.classList.add('open_cart');
  })
})
let imgSp1_modal_close = document.querySelector('.xx');
imgSp1_modal_close.addEventListener('click', modal_cart_close)
function modal_cart_close(event) {
  event.preventDefault();
  let close_modal_cart = document.querySelector('.modal_Cart');
  close_modal_cart.classList.remove('open_cart')
}
let close_modal_cart = document.querySelector('.modal_Cart');
close_modal_cart.addEventListener('click', modal_cart_close);

let content_cart = document.querySelector('.content_cart');

content_cart.addEventListener('click', function (event) {
  event.stopPropagation();
})


