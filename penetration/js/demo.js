$(function(){
/*****选择车型****/
$("#modelAllName").on("click",function(){
	$("#queryModel").show();
	if(document.addEventListener){
		$(window).on("mousewheel DOMMouseScroll",function(e){
			  var target=e.originalEvent.srcElement||e.target;
			if(!$(target).is("#queryContBox")&&!$(target).parents().is("#queryContBox")){
				  e.preventDefault();  
			}else
			if($.trim($("#queryCont").text())==""){
				  e.preventDefault();  
			}
		})
	}else{
		document.attachEvent("onmousewheel",ieScroll);
		document.attachEvent("onclick",function(e){
			var target=e.srcElement||e.target;
			if(!$(target).is("#queryContBox")&&!$(target).parents().is("#queryContBox")){
					console.log(0);
					 e.cancelBubble=true;
					window.event.returnValue=false;  
				   return false;  
			}
			
		})
	}
});
$("#queryclose").on("click",function(){
	$("#queryModel").hide();
	$("#queryText").val("");
	$("#queryCont").html("");
	if(document.addEventListener){
		$(window).off("mousewheel DOMMouseScroll");
	}else{
		document.detachEvent("onmousewheel",ieScroll);
		}
	});
})
function ieScroll(e){
	  var target=e.srcElement
	if(!$(target).is("#queryContBox")&&!$(target).parents().is("#queryContBox")){
	   window.event.returnValue=false;  
}else
if($.trim($("#queryCont").text())==""){
		  window.event.returnValue=false;  
	}
}