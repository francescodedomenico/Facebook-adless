// ==UserScript==
// @include http://*facebook.com/*
// @include https://*facebook.com/*
// ==/UserScript==

var oexFacebookadless = function()
{
  
  window.addEventListener('DOMContentLoaded', function()
  {
    function removeElementByID(id)
    {
      var elem = document.getElementById(id);
      if (elem != null) elem.parentNode.removeChild(elem);
    }
	/* Insert elements id to remove here */
	removeElementByID('pagelet_ego_pane_w');
	removeElementByID('pagelet_side_ads');
	removeElementByID('pagelet_ego_pane');
	
	/* change app side scrollbar activity */
	var elem = document.getElementById("pagelet_ticker");
    if (elem != null) {
		var childs = elem.childNodes;
		if (childs!=null && childs[0]!=null) var childsNew = childs[0];
		if (childsNew!=null) childsNew = childsNew.childNodes;
		if (childsNew!=null) var ad = childsNew[2];
		if (ad!=null) ad.style.height="576px";
	}
  },false);
  
}();

