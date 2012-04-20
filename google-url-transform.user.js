// ==UserScript==
// @name			Google Productions URL Transform
// @namespace		http://www.talaland.com liangdi(wu@liangdi.me)
// @description		Google productions such as google groups,google reader etc URL transform
// @include		http://groups.google.com*
// @include     http://www.google.com/reader*
// ==/UserScript==
var toTrans = [
		"http://groups.google.com",				//google论坛
		"http://www.google.com/reader"			//google阅读
												//其他待增加
	];
console.log(document.location)
var href = document.location.href;
for(var i = 0; i < toTrans.length; i++){
	url = toTrans[i];
	if(href.indexOf(url) ==0 ){
		document.location = href.replace(/^http/,"https")
		break;
	}
}
