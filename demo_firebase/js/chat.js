/**
 * @author zhangbingbing
 */
$(function(){
	  var firebase=new FireBaseClass();
	  firebase.init();
    //var myDataRef = new Firebase('https://zbb68255448.firebaseio.com/User');
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          firebase.put({name: name, text: text});
          $('#messageInput').val('');
          
        }
      });
      
      var dataRef=firebase.getDataRef();
      dataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
      
})