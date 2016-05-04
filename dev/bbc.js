var $ = require('jquery');

//input、nav的bg color变化
(function(){
	var src;
	$("#bbc-search-input").focus(function(){
		src = function(){
			var dir;
			$("#homepage-top").css("background-color","white");
			$("#homepage-top").css("color","black");
			$("#homepage-top").css("border-bottom","1px solid #e4e4e4");
			var activearc = $("#bbc-logo-ld").attr("data-activesrc");
			dir = $("#bbc-logo-ld").attr("src");
			$("#bbc-logo-ld").attr("src",activearc);
			$("#bbc-search-input").css("background-color","#e4e4e4");
			return dir;
		}();
	})
	$("#bbc-search-input").blur(function(){
		$("#homepage-top").css("background-color","black");
		$("#homepage-top").css("color","white");
		$("#homepage-top").css("border-bottom","1px solid #e4e4e4");
		$("#bbc-logo-ld").attr("src",src);
		$("#bbc-search-input").css("background-color","#ffffff");
	})
})();