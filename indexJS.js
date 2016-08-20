if(navigator.userAgent.match("Firefox")){


}
else{
$.fn.pinFooter = function(options) {		
		// Get the height of the footer and window + window width
		var wH = $(window).height();
		var wW = getWindowWidth();
		var fH = $(this).outerHeight(true);
		var bH = $("body").outerHeight(true);
		var mB = parseInt($("body").css("margin-bottom"));
		
		if (options == 'relative') {
			if (bH > getWindowHeight()) {
				$(this).css("position","absolute");
				$(this).css("width",wW + "px");
				$(this).css("top",bH - fH + "px");
				$("body").css("overflow-x","hidden");
			} else {
				$(this).css("position","fixed");
				$(this).css("width",wW + "px");
				$(this).css("top",wH - fH + "px");
			}
		} else { // Pinned option
			// Set CSS attributes for positioning footer
			$(this).css("position","fixed");
			$(this).css("width",wW + "px");
			$(this).css("top",wH - fH + "px");
			$("body").css("height",(bH + mB) + "px");
		}
	};
	
	// private function for debugging
	function debug($obj) {
		if (window.console && window.console.log) {
			window.console.log('Window Width: ' + $(window).width());
			window.console.log('Window Height: ' + $(window).height());
		}
	};
	
	// Dependable function to get Window Height
	function getWindowHeight() {
		var windowHeight = 0;
		if (typeof(window.innerHeight) == 'number') {
			windowHeight = window.innerHeight;
		}
		else {
			if (document.documentElement && document.documentElement.clientHeight) {
				windowHeight = document.documentElement.clientHeight;
			}
			else {
				if (document.body && document.body.clientHeight) {
					windowHeight = document.body.clientHeight;
				}
			}
		}
		return windowHeight;
	};
	
	// Dependable function to get Window Width
	function getWindowWidth() {
		var windowWidth = 0;
		if (typeof(window.innerWidth) == 'number') {
			windowWidth = window.innerWidth;
		}
		else {
			if (document.documentElement && document.documentElement.clientWidth) {
				windowWidth = document.documentElement.clientWidth;
			}
			else {
				if (document.body && document.body.clientWidth) {
					windowWidth = document.body.clientWidth;
				}
			}
		}
		return windowWidth;
	};
    
  
    
}

$(document).ready(function() {

$("#body").tabs();
$("#server").tabs();

    if(navigator.userAgent.match("Firefox")){
    }
    else{
      $("#footer").pinFooter();
    }
    
});
 if(navigator.userAgent.match("Firefox")){
 }
  else{
$(window).resize(function() {
    $("#footer").pinFooter('relative');
});
}



ping = function(ip, callback) {
 if (!this.inUse) {
  this.status = 'unchecked';
  this.inUse = true;
  this.callback = callback;
  this.ip = ip;
  var _that = this;
  this.img = new Image();
  this.img.onload = function() {
   _that.inUse = false;
   _that.callback('responded');
 
  };
  this.img.onerror = function(e) {
   if (_that.inUse) {
    _that.inUse = false;
    _that.callback('responded', e);
   }
 
  };
  this.start = new Date().getTime();
  this.img.src = "http://" + ip;
  this.timer = setTimeout(function() {
   if (_that.inUse) {
    _that.inUse = false;
    _that.callback('timeout');
   }
  }, 1500);
 }
};
 
//使用：
new ping('25.60.9.456', function(status, e) {
// reponded timeout
 if(status=='responded'){$("#c1").append("<img style='width:50px;height:50px' src='Image/html/greenlight.png'></img>");}
 else if(status=='timeout'){$("#c2").append("<img style='width:50px;height:50px' src='Image/html/redlight.png'></img>");}
 else{$("#c3").append("<img style='width:50px;height:50px' src='Image/html/yellowlight.png'></img>");}

});
