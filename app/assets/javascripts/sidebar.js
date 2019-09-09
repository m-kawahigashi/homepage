$(document).on('turbolinks:load', function(){
  $('.sidebar').hide();  //セレクタ要素を非表示にする記述。
  $('.header__icon').click(function(){  //セレクタ要素をクリックするとイベント発火。
    $('.sidebar').slideToggle();  //イベント発火した時にセレクタ要素を表示する記述。
  });

  $('#format').hide();
  $('.sidebar__box--btn').click(function(){
    $('#format').fadeIn();
  });
  

  $('.back').click(function(){
    $('#format').fadeOut();
  });

  $('.search').hide();
  $('.sidebar__box--search-form').click(function(){
    $('.search').slideToggle();
  });
  // $('.comment').hide();
  // $('.content__box-btn').click(function(){
  //   $('.comment').slideToggle();
  // })
});