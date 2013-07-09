opera.isReady(function(){
var oexFacebookadless = window["oexFacebookadless"] = function() {
		//jsDOMTools v0.1
		//author: Francesco De Domenico
		//website: https://github.com/frankdd89/jsDOMTools
		function removeElementByID(b){var a=document.getElementById(b);if(a!=null){a.parentNode.removeChild(a)}}function getElementByClassName(f,g){var c=document.getElementsByTagName(f);var d=new Array();var a=0;if(c!=null){for(var e=0,b=c.length;e<b;e++){if(c[e].getAttribute("class")==g){d[a]=c[e];a++}}}return d}function removeElementByClassName(d,e){var b=document.getElementsByTagName(d);if(b!=null){for(var c=0,a=b.length;c<a;c++){if(b[c].getAttribute("class")==e){b[c].parentNode.removeChild(b[c])}}}}function hideElementByClassName(d,e){var b=document.getElementsByTagName(d);if(b!=null){for(var c=0,a=b.length;c<a;c++){if(b[c].getAttribute("class")==e){b[c].style.visibility="hidden"}}}};
  var ads = new Array("pagelet_ego_pane_w", "pagelet_ego_pane", "pagelet_side_ads", "fbPhotoSnowboxAdsBottom", "MessagingNetegoSidebar", "fbPhotoSnowboxAdsSide", "tips_main_box", "fbPhotoSnowliftAdsSide", "fbPhotoSnowboxAdsSide");
  var adsClass = new Array("-cx-PRIVATE-snowliftAds__root rhcFooter","ego_column","ego_section","clearfix uiHeaderTop","_24q rhcFooter");
  function removeElementByClassName(d, e) {
    var b = document.getElementsByTagName(d);
    if (b != null) {
      for (var c = 0, a = b.length; c < a; c++) {
        if (b[c].getAttribute("class") == e) {
          b[c].parentNode.removeChild(b[c]);
        }
      }
    }
  }
  function hideElementByClassName(d, e) {
    var b = document.getElementsByTagName(d);
    if (b != null) {
      for (var c = 0, a = b.length; c < a; c++) {
        if (b[c].getAttribute("class") == e) {
          b[c].style.visibility = "hidden";
        }
      }
    }
  }
  function cleanAds(event){
	var node = event.target;
	if(node!=null){
			if(node.id==="pagelet_ticker"){
				var childs = node.childNodes;
				if (childs != null && childs[0] != null) var childsNew = childs[0];
				if (childsNew != null) var childsNew = childsNew.childNodes;
				if (childsNew != null) var ad = childsNew[2];
				if (ad != null) ad.style.height = "576px";
			}
			for(var i=0;i<adsClass.length;i++){
				if(node.className===adsClass[i]){
					node.style.visibility = "hidden";
					return;
				}
			}
			for(var k=0;k<ads.length;k++)
				if(node.id===ads[k]){
					node.style.visibility = "hidden";
					return;
				}
	}
	}
  window.addEventListener('DOMNodeInserted', cleanAds, false);
}();
});
