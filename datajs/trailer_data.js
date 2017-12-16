$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		var str = window.location.href;
		var start = str.lastIndexOf("?") + 1;
		var end = str.length;
		//alert(str.substring(start,end));	
		//var str = str.replace("#tab2", "");
		var a_id = str.substring(start,end) ;
		var url = "";
		if($.isNumeric(a_id)){
		//alert(a_id);	
			url=BaseURL+"trailer_data.php?movie_id="+a_id;
			$("#heading").html('Videos');
		}
		else {
			url=BaseURL+"trailer_data.php?cat="+art_cat+"";
		}
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				
				var m_v_id=field.m_v_id;
	        	var v_play_code=field.v_play_code;
				var v_title=field.v_title;
				var cover_image=field.cover_image;
				var movie_or_serial_type=field.movie_or_serial_type;
	        	//$("#video").html(field.v_play_code) ; 
				
				
				var dir = "";
				
				/*if(movie_or_serial_type == "movie") {*/
					dir = "movie_images";
				/*} else {
					dir = "serial_images";
				}*/
				
				img_value = ImgURL+dir+"/"+cover_image;
				
	            $("#listvideo").append('<div class="videocontainer"><a href="video_details.html?'+m_v_id+'"><img src="'+img_value+'" alt=" " width="100%" height="200" /></a></div><h3 class="page_subtitle"><a href="video_details.html?'+m_v_id+'" style="color:#FFFFFF;">'+v_title+'</a></h3>');
				
	        });
    	});
		
		
	});