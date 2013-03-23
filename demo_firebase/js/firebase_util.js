/**
 * @author zhangbingbing
 */


(function($){

    $.fn.say=function(){
            $(this).click(function(){
                alert($(this).val());
            });
        };

	$.hi=function(){alert('bill')}
	$.extend({
		test:function(){alert('test')},
		test1:function(){alert('test1')}
	});
	$.add=function(a,b){console.log(a+b);};
	
	$.getFireBaseInstance=function(){
			var firebase=new FireBaseClass();
			return firebase;
	};
	
})(jQuery);
