/**
 * Created with JetBrains PhpStorm.
 * User: zhangbingbing
 * Date: 13-2-28
 * Time: 下午1:46
 * To change this template use File | Settings | File Templates.
 */
(function($){
   /* $.extend({
        add:function(a,b){
            return a+b;
        }
    });*/

    $.add=function(a,b){
        return a+b;
    }

    $.fn.say=function(){
            $(this).click(function(){
                alert($(this).val());
            });
        };




}(Zepto))
