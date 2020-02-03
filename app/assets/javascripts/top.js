$(function(){
  function buildHTML(message) {
    var html = `
    <div class="eachComment">
      <p class="userName">${comment.user_id}さん</p>
      <div class="erase">
        <p>${message.word}</p>
        <a class="deleteComment", href="/comment/${comment.id}">削除</a> 
      </div>
      <%= react_component('Top', name:"Mike") %>
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
      $('.eachComment').last().append(html);
      $('.comment_word').val();
      $('.comment-submit').prop('disabled', false);
    })
  });
  
  });