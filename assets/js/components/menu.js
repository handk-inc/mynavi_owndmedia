$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    // $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

let useful = document.querySelector(".g-nav-ul-useful")
console.log(useful)
let media = document.querySelector(".g-nav-ul-media")
let open_media = document.getElementsByClassName("g-nav-ul-sub-b")
let open_useful = document.getElementsByClassName("g-nav-ul-sub-a")
open_useful = Array.from( open_useful ) ;
open_useful.forEach( function ( open_useful ) {
	useful.addEventListener('click',function() {
    open_useful.classList.toggle("open")
  });
} ) ;
open_media = Array.from( open_media ) ;
open_media.forEach( function ( open_media ) {
	media.addEventListener('click',function() {
    open_media.classList.toggle("open")
  });
} ) ;