$(document).on('turbolinks:load', function(){
  var message_search = $('.content__box')
  var image = image ? `<img src= ${ image }>` : "";
  function appendUser(message){
  var HTML = `<div class="content__box-image">
                <div class="content__box-images style="background-image: ${image};">
                </div>
                <span>投稿者 ${message.name}</span>
                <a data-method="get" href="messages/${message.id}/edit">編集</a>
                <a rel="nofollow" data-method="delete" href='messages/${message.id}'>削除</a>
                <p>${message.text}</p>
                <div class='content__box-btn'>
                  <a data-method="get" href="/messages/${message.id}>
                </div>
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