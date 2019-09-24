$(document).on('turbolinks:load', function(){
  // 投稿の非同期の際にapend、またはprependするHTMLを定義。
  function buildHTML(message){
    var text = message.text ? `${ message.text }` : "";
    var image = message.image ? `${ message.image }` : "";
    var html = `<div class="content__box-image" data-message-id=${message.id}>
                  <div class="content__box-images" style="background-image: url(${ image });"></div>
                  <span>投稿者 ${ message.nickname }</span>
                  <div class="content__box-images__btns">
                    <div class="content__box-images__btns--edit-btn" id="edit">
                      <a data-method="get" href="messages/${ message.id }/edit">編集</a>
                    </div>
                    <div class="content__box-images__btns--delete-btn" id="delete">
                      <a data-confirm="削除しますか？" rel="nofollow" data-method="delete" href="/messages/${ message.id }">削除</a>
                    </div>
                  </div>
                  <div class="content__box-image--text">
                    <p>${ text }</p>
                  </div>
                  <div class="content__box-btn">
                    <a data-method="get" href="/messages/${ message.id }">詳細</a>
                  </div>
                </div>`;
    return html;
  }

 // 投稿の非同期通信を実装
  $('.new-message').on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
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
      $('.content__box').prepend(html).hide().fadeIn(1000)
      $('.new-message')[0].reset();
      $('.form-btn-new').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージエラー');
      $('.form-btn-new').prop('disabled', false);
    })
  })

  // 削除の非同期通信
  // $(document).on('click', '#delete', function(){
  //   alert('削除しますか？')
  // })
})