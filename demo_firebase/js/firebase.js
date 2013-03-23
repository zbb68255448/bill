/**
 * @author zhangbingbing
 */
FireBaseClass=function(){
	this.version="1.0";
	this.pubDate=new Date().toLocaleTimeString();
	this.domain="https://zbb68255448.firebaseio.com/";
	this.myData=null;
	this.path="User";
	this.init();
}

FireBaseClass.prototype={
	init:function(){
		this.myData=new Firebase(this.domain+this.path);
		console.log('this is the FireBase initing!');
	},
	put:function(data){
		this.myData.push(data);
		console.log('you add data: '+data);
	},
	get:function(key){
		var value=null;
		this.myData.on('value',function(data){
			value=data.val();
		});
		return value;
		console.log('you are getting the value of the key '+key);
	},
	toString:function(){
		console.log('this is a firebase object!!!'+this.version+' '+this.pubDate);
	},
	getVersion:function(){
		return this.version;
	},
	getPubDate:function(){
		return this.pubDate;
	},
	getDomain:function(){
		return this.domain;
	},
	setPath:function(path){
		this.path=path;
	},
	setDomain:function(domain){
		this.domain=domain;
	},
	getDataRef:function(){
		return this.myData;
	}
	
}



