$(function(){
  function buildHTML(message) {
    var html = 
    `<div class="eachComment">
      <p class="userName">${message.name}さん</p>
      <div class="erase">
        <p>${message.word}</p>
        <a class="deleteComment", rel="nofollow", data-method="delete", href="/comment/${message.id}">削除</a> 
      </div>
      <div data-react-class="Top" data-react-props={"name":"Mike"}
      data-react-cache-id="Top-0">
        <div class="goodPoint">
          <button type="button" class="btn btn-primary countUp" style="width: 150px; height: 30px; line-height: 15px; font-size: 12px;">いいね！</button> 
          
        </div>
      </div>
    </div>
    `;
    return html;
  }
  
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.allComments').append(html);
      $('#comment_word').val('');
      $('.comment-submit').prop('disabled', false);
      $('.noComment').remove();
      $('.allComments').animate({scrollTop: '100px'});
    })
    .fail(function(){
      alert('error');
      $('.comment-submit').prop('disabled', false);
    })
  });
  
  });