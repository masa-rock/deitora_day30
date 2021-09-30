// swiperの初期化

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // 最後まで行ったとき、最初に戻るか
  loop: true,
  slidesPerView:1.3,
  spaceBetween: 20,
  breakpoints:{
    768:{
      slidesPerView:2.75,
      spaceBetween: 40,
    }
  },
  // If we need pagination
  // 下の○
  pagination: {
    el: '.swiper-pagination',
    // paginationでswiper内を検索
    clickable:true,

  },

  // Navigation arrows
  // アローアイコン
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ------------------------------------------------------------------------
// Q&A
// ------------------------------------------------------------------------

// Q&Aのトグルメニュー
jQuery('.qa-box__q').on('click',function(){
  // '.qa-box__q'の次の兄弟要素をトグルでスライド表示させる。
  // 予め次の要素はnoneにしておく
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-box__icon').toggleClass('is-open');
});
$(function(){
  $('.drawer').drawer()
})

$('.drawer').on('drawer.opened', function(){ 
  $('.drawer-hamburger').addClass("is-open");       
  $("#modal").addClass("modal-on");
  $('.header').addClass("is-open");
});

$('.drawer').on('drawer.closed', function(){ 
  $('.drawer-hamburger').removeClass("is-open");
  $("#modal").removeClass("modal-on");
});


  jQuery('a[href^="#"]').on('click',function(){
    // "id"にクリックしたhref(例:#news)を入れる
    var id = jQuery(this).attr('href');
    // headerのインナーの高さを指定する。
    var header = jQuery(".header").innerHeight();
    var position = 0;
    // idが
    if(id !='#'){
      var position = jQuery(id).offset().top - header;
    }
    jQuery('html,body').animate({
      scrollTop:position
    },
    // スクロールの速さを指定
    200)
  });