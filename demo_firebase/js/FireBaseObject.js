/**
 * @author zhangbingbing
 */
FireBase=function(){
	this.version="1.0";
	this.pubDate=new Date().toLocaleTimeString();
	this.init();
}

FireBase.prototype={
	init:function(){
		console.log('this is the FireBase initing!');
	},
	put:function(key,value){
		console.log('the key is '+key+" the value is "+value);
	},
	get:function(key){
		console.log('you are getting the value of the key '+key);
	},
	toString:function(){
		console.log('this is a firebase object!!!'+this.version+' '+this.pubDate);
	}
	
}

$(function(){
	
})

