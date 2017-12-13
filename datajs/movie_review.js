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
		
		$("#back").html('<a href="moviedetail.html?'+a_id+'" class="backto"><img src="images/icons/red/back.png" alt="" title="" /></a>');
		
		
		//var url=BaseURL+"article_details.php?article_id="+a_id; alert(url);
		var url=BaseURL+"movie_details.php?movie_id="+a_id;
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var movie_id=field.movie_id;
				var movie_title=field.movie_title;
	        	var movie_primary_cast=field.movie_primary_cast;
	        	var movie_release_dt=field.movie_release_dt;
				var image=field.image;
				var rateHTML=field.rateHTML;
				var movie_director=field.movie_director;
				var dir = "movie_images";
				
				var post_body = '<b>Starring :</b>'+movie_primary_cast+" <br /><b>Director:</b>"+movie_director ;
				
				//alert(article_title);
				img_value = ImgURL+dir+"/"+image;
				$("#post_title").html(movie_title) ;
				$("#post_image").html('<img src="'+img_value+'" alt="" title="" />') ;
	            $("#post_body").html(post_body) ;
				$("#post_date").html(movie_release_dt) ;
				$("#rating").html(rateHTML) ;
				$("#movie_id").val(a_id);
	        });
    	});
		
		var url=BaseURL+"movie_review.php?movie_id="+a_id;
		$.getJSON(url,function(result){ //alert(url);
					//$("#loader").hide();							
			console.log(result);
			
	        $.each(result, function(i, field){
				if(i==0){
					$("#count_comments").html(field.comm_count) ;
				} 					
				else {
	        	var movie_id=field.movie_id;
				var full_name=field.full_name;
	        	var review_comment=field.review_comment;
	        	var join_date=field.join_date;
				var user_image=field.user_image;
				var review_rate=field.review_rate;
				var rateHTML=field.rateHTML;
				var dir = "user_images";
				
				//alert(article_title);
				img_value = ImgURL+dir+"/"+user_image;
				$("#comments").append('<li class="comment_row"><div class="comm_avatar"><img src="'+img_value+'" alt="" title="" border="0" /></div><div class="comm_content"><p style="text-align:justify;">'+review_comment+' <br>'+rateHTML+' &nbsp; <i class="fa fa-user"></i> <a href="#" style="font-weight:bold; color:#990000;">'+full_name+'</a></p></div></li>') ;
				
				}
				
	        });
    	});
		
		
	});