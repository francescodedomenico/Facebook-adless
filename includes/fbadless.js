// ==UserScript==
// @include http://*facebook.com/*
// @include https://*facebook.com/*
// ==/UserScript==

var oexFacebookadless = function()
{
  
  window.addEventListener('DOMNodeInserted', function()
  {
	/* Insert elements id to remove here */
	var x = document.getElementById("pagelet_ego_pane_w");
	if (x != null) x.style.visibility="hidden";
	
	var y = document.getElementById("pagelet_ego_pane");
	if (y != null) y.style.visibility="hidden";
	
	//removing pagelet_side_ads, using visibility hidden to do not break DOM
	var pagelet = document.getElementById("pagelet_side_ads");
	if (pagelet != null) pagelet.style.visibility="hidden";
	
	//removing ad on theater mode
	var th = document.getElementById("fbPhotoSnowboxAdsBottom");
	if (th != null) th.parentNode.style.visibility="hidden";
	
	th = document.getElementById("fbPhotoSnowboxAdsSide");
	if (th != null) th.parentNode.style.visibility="hidden";
	
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

