$(document).on('turbolinks:load', function(){
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var image = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="content__box-image">
                  <div class="content__box-images style="back-ground-image: ${ image };">
                  <span>投稿者 ${ nickname }
                  <a data-method="get" href="messages/${ id }/edit">編集</a>
                  <a rel="nofollow" data-method="delete" href="/messages/${ id }">削除</a>
                  <p>${ content }</p>
                  <div class="content__box-btn">
                    <a data-method="get" href="/messags/${ id }">詳細</a>
                  </div>
                </div>`;
    return html;
  }
 
  $('.form-btn').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.content__box').append(html);
      $('.content__box').animate({scrollTop: $('.content__box')[0].scrollHeight}, 'swing');
      // $('#new_message')[0].reset();
      $('.form-btn').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージエラー');
      $('.form-btn').prop('disabled', false);
    })
  })
})