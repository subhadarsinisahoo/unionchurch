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
		//var str = str.replace("#tab2", "");
		var p_id = str.substring(start,end) ;
		
		//var url=BaseURL+"article_details.php?article_id="+p_id; alert(url);
		var url=BaseURL+"pastor_details.php?p_id="+p_id; //alert(url);
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var p_id=field.p_id;
				var p_name=field.p_name;
	        	var p_desc=field.p_desc;
				var p_image=field.p_image;
				var dir = "";
				/*if(movie_or_serial_type == "movie") {
					dir = "movie_images";
				} else {*/
					dir = "movie_images";
				/*}*/
				//alert(article_title);
				img_value = ImgURL+dir+"/"+p_image;
				$("#post_title").html(p_name) ;
				$("#post_image").html('<img src="'+img_value+'" alt="" title="" />') ;
	            $("#post_body").html(p_desc) ;
				//$("#post_date").html(post_date) ;
				//$("#rating").html(rateHTML) ;
				//$("#review_for_id").val(p_id);
	        });
    	});
		
		
    	});
		
		
	