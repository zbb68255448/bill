/**
 * Created with JetBrains PhpStorm.
 * User: zhangbingbing
 * Date: 13-2-28
 * Time: 下午2:49
 * To change this template use File | Settings | File Templates.
 */

$(function(){
    $("#say").say();
    var one={one:'hello'},two={two:'bill'};
    console.log($.extend(one,two));
    console.log($.add(4,5));
})
