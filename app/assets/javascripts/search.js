$(document).on('turbolinks:load', function(){
  var message_search = $('.content__box')
  function appendUser(message){
    var image = message.image ? `${ message.image }`: "";
    var HTML = `<div class="content__box-image" data-message-id=${message.id}>
                  <div class="content__box-images" style="background-image: url(${image});"></div>
                  <span>投稿者 ${message.name}</span>
                  <div class="content__box-images__btns">
                    <div class="content__box-images__btns--edit-btn" id="edit">
                      <a data-method="get" href="messages/${message.id}/edit">編集</a>
                    </div>
                    <div class="content__box-images__btns--delete-btn" id="delete">
                      <a data-confirm="削除しますか？" rel="nofollow" data-method="delete" href='messages/${message.id}'>削除</a>
                    </div>
                  </div>
                  <div class="content__box-image--text">
                    <p>${message.text}</p>
                  </divs>
                  <div class="content__box-btn">
                    <a data-method="get" href="/messages/${message.id}">詳細</a>
                  </div>
                </div>`
  message_search.append(HTML);
  return HTML;
  }

  function appendErrMsgToHTML(msg){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">一致する記事がありません</p>
                </div>`
    message_search.append(html);
  }
  $('.search__input').on("keyup", function(){
    var input = $('.search__input').val();
    $.ajax({
      type: 'GET',
      url: '/messages',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(datas){
      $('.content__box').empty();
      if (datas.length !== 0){
        datas.forEach(function(data){
          appendUser(data)
        });
      }
      else{
        appendErrMsgToHTML();
      }
    })
      .fail(function(){
        appendErrMsgToHTML();
    })
  })
})