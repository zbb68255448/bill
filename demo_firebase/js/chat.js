/**
 * @author zhangbingbing
 */
$(function(){
    var myDataRef = new Firebase('https://zbb68255448.firebaseio.com/User');
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          myDataRef.push({name: name, text: text});
          $('#messageInput').val('');
          
        }
      });
      myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
      $('#test').say();
      $('#test1').click(function(){
			//var fire=new FireBase();
			var firebase=new FireBase();
			firebase.init();
			firebase.put('name','bill');
			firebase.get('name');
			firebase.toString();
			alert(firebase.version);		
	})
})