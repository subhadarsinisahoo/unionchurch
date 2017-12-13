// JavaScript Document
//$( "#show_articles" ).load(function() {
  // Handler for .load() called.
//});$( "#sarticle" ).click(function()


	
	$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		var str = window.location.href;
		var start = str.lastIndexOf("?") + 1;
		var end = str.length;
		//alert(str.substring(start,end));	
		var str = str.replace("#tab2", "");
		var a_id = str.substring(start,end) ;
		
		//var url=BaseURL+"article_details.php?article_id="+a_id; alert(url);
		var url=BaseURL+"article_details.php?article_id="+a_id;
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var article_id=field.article_id;
				var article_title=field.article_title;
	        	var article_body=field.article_body;
	        	var post_date=field.post_date;
				var article_image=field.article_image;
				var rateHTML=field.rateHTML;
				var movie_or_serial_type=field.movie_or_serial_type;
				var dir = "";
				if(movie_or_serial_type == "movie") {
					dir = "movie_images";
				} else {
					dir = "serial_images";
				}
				//alert(article_title);
				img_value = ImgURL+dir+"/"+article_image;
				$("#post_title").html(article_title) ;
				$("#post_image").html('<img src="'+img_value+'" alt="" title="" />') ;
	            $("#post_body").html(article_body) ;
				$("#post_date").html(post_date) ;
				$("#rating").html(rateHTML) ;
				$("#review_for_id").val(a_id);
	        });
    	});
		
		var url=BaseURL+"content_review.php?article_id="+a_id;
		$.getJSON(url,function(result){ //alert(url);
					//$("#loader").hide();							
			console.log(result);
			
	        $.each(result, function(i, field){
				if(i==0){
					$("#count_comments").html(field.comm_count) ;
				} 					
				else {
	        	var article_id=field.article_id;
				var full_name=field.full_name;
	        	var review_comment=field.review_comment;
	        	var join_date=field.join_date;
				var user_image=field.user_image;
				var review_rate=field.review_rate;
				var rateHTML=field.rateHTML;
				var dir = "user_images";
				
				//alert(article_title);
				img_value = ImgURL+dir+"/"+user_image;
				$("#comments").append('<li class="comment_row"><div class="comm_avatar"><img src="'+img_value+'" alt="" title="" border="0" /></div><div class="comm_content"><p style="text-align:justify;">'+review_comment+' <br>'+rateHTML+' &nbsp; <i class="fa fa-user"></i> <a href="#">'+full_name+'</a></p></div></li>') ;
				
				}
				
	        });
    	});
		
		
	});