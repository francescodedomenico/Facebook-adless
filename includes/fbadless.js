// ==UserScript==
// @include http://*facebook.com/*
// @include https://*facebook.com/*
// ==/UserScript==

var oexFacebookadless = function()
{
	var ads = new Array(
	"pagelet_ego_pane_w",
	"pagelet_ego_pane",
	"pagelet_side_ads", //removing pagelet_side_ads, using visibility hidden to do not break DOM
	"fbPhotoSnowboxAdsBottom", //removing ad on theater mode
	"MessagingNetegoSidebar", //removing ad from message reading pane
	"fbPhotoSnowboxAdsSide",
	"tips_main_box",
	"fbPhotoSnowliftAdsSide",
	"fbPhotoSnowboxAdsSide"
	);
	
//jsDOMTools v0.1
//author: Francesco De Domenico
//website: https://github.com/frankdd89/jsDOMTools
function removeElementByID(b){var a=document.getElementById(b);if(a!=null){a.parentNode.removeChild(a)}}function removeElementByClassName(d,e){var b=document.getElementsByTagName(d);if(b!=null){for(var c=0,a=b.length;c<a;c++){if(b[c].getAttribute("class")==e){b[c].parentNode.removeChild(b[c])}}}}function hideElementByClassName(d,e){var b=document.getElementsByTagName(d);if(b!=null){for(var c=0,a=b.length;c<a;c++){if(b[c].getAttribute("class")==e){b[c].style.visibility="hidden"}}}};
  
  window.addEventListener('DOMNodeInserted', function()
  {
	var temp = null;
	hideElementByClassName("div","-cx-PRIVATE-snowliftAds__root rhcFooter");
	hideElementByClassName("div","ego_column");
	hideElementByClassName("div","ego_section");
	hideElementByClassName("div","_24q rhcFooter");
	for (var i=0; i<ads.length; i++){
		temp = document.getElementById(ads[i]);
		if(temp != null){
			temp.style.visibility="hidden";
			temp=null;
		}
	}
	
	/* change app side scrollbar activity */
	var elem = document.getElementById("pagelet_ticker");
    if (elem != null) {
		var childs = elem.childNodes;
		if (childs!=null && childs[0]!=null) var childsNew = childs[0];
		if (childsNew!=null) var childsNew = childsNew.childNodes;
		if (childsNew!=null) var ad = childsNew[2];
		if (ad!=null) ad.style.height="576px";
	}
	
	
	
  },false);
  
}();

