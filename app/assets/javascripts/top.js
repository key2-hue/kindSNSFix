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
          <p class="messageCount">${message.count}</p>
          <button type="button" class="btn btn-danger countUp" style="width: 150px; height: 30px; line-height: 15px; font-size: 12px; margin-left: 10px;">うーん...</button> 
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

  function addTopic(topic) {
    let html = `
      <div class="topic-result">
        <a href="/top/${topic.id}">${topic.title}</a>
      </div>
    `;
    $(".search-results").append(html);
  }

  function noTopic(topic) {
    let html = `
      <div class="topic-result">
        <p>該当するタイトルはありません。</p>
      </div>
    `;
    $(".search-results").append(html);
  }


  $('.searchingTopics').on('keyup', function(){
    var search = $('.searchingTopics').val();
    if (search == "") {
      $(".search-results").empty();
    }
    $.ajax({
      type: "GET",
      url: "/top",
      data: {keyword: search},
      dataType: "json",
      
    })
    .done(function(topics){
      $(".search-results").empty();
      
      
      if (topics.length !== 0) {
        topics.forEach(function(top){ 
          addTopic(top);
        });
      } else if (search == "") {
        $(".search-results").empty();
      } else {
        noTopic();
      }
      
      console.log('成功');
     })
    .fail(function(topics){
      console.log('失敗'); 
    });
  });
  
  $(".explanation-child").addClass("explanation-off")
  
  $('.start').on('click', function(){
    $(".explanation").addClass("explanation-on")
    $(".explanation-child").css({"display": "block"});
    $(".explanation-child").removeClass("explanation-childOff")
    $(".explanation").removeClass("explanation-off")
  });

  $('.close-about').on('click', function(){
    $(".explanation").addClass("explanation-off")
    $(".explanation-child").css({"display": "none"});
    $(".explanation").addClass("explanation-on")
  });

  $('.countUp').on('click', function() {

  })

  });