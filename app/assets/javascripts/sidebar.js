$(document).on('turbolinks:load', function(){
  $('.search__btn').click(function(){
    alert('クリックされました')
  })
    $('.sidebar').hide();  //セレクタ要素を非表示にする記述。
    $('.header__icon').click(function(){  //セレクタ要素をクリックするとイベント発火。
      $('.sidebar').slideToggle();  //イベント発火した時にセレクタ要素を表示する記述。デフォルトでは
    })
  })