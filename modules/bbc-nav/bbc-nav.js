var $ = require('jquery');
var bbc_nav = function(){
	var src = "../images/homepage/bbc-blocks-light.png";
	var activesrc = "../images/homepage/bbc-blocks-dark.png";
	$("#bbc-search-input").focus(function(){
		turnLight();
	})
	$("#bbc-search-input").blur(function(){
		turnDark();
	})

	$("#bbc-nav-more").click(function(){
		if ($("#bbc-panel-more").hasClass("bbc-more-active")) {
			$("#bbc-panel-more").removeClass("bbc-more-active");
			setTimeout(turnDark,400);
		}else{
			$("#bbc-panel-more").addClass("bbc-more-active");
			turnLight();
		}
	})

	function turnLight(){
		$("#homepage-top").css("background-color","white");
		$("#homepage-top").css("color","black");
		$("#homepage-top").css("border-bottom","1px solid #e4e4e4");
		$("#bbc-logo-ld").attr("src",activesrc);
		$("#bbc-search-input").css("background-color","#e4e4e4");
		$(".bbc-search-icon").css("background-color","#e4e4e4");
		$(".bbc-icon-arrow").css("background-position","0px 0px");
	}
	function turnDark(){
		$("#homepage-top").css("background-color","black");
		$("#homepage-top").css("color","white");
		$("#homepage-top").css("border-bottom","1px solid #e4e4e4");
		$("#bbc-logo-ld").attr("src",src);
		$("#bbc-search-input").css("background-color","#ffffff");
		$(".bbc-search-icon").css("background-color","#ffffff");
		$(".bbc-icon-arrow").css("background-position","0px -53px");
	}
};
module.exports = bbc_nav;
