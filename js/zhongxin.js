;$(function($){
	
	var $ziliao = $('#ziliao');
	
	var mydata = localStorage.getItem('data');
	if(mydata){
		$ziliao.html('我的资料');
	}else{
		$ziliao.html('完善资料');
	}
	var $headPic = $('.headPic');
	$headPic.on('singleTap','img',function(){
		var $img = $(this);
		 navigator.camera.getPicture(function(imgData){
	       $img.attr({
	       	'src': imgData
	       });
		},function(){
			alert('头像上传失败');
		},{quality:80})
	});
});
