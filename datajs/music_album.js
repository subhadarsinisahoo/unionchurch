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
			url=BaseURL+"music_album.php?movie_id="+a_id;
			$("#heading").html('Music Albums/ Movie');
		}
		else {
			url=BaseURL+"music_album.php";
		}
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				var movie_id=field.movie_id;
				var movie_title=field.movie_title;
				var move_banner_image=field.move_banner_image;
	        	//$("#video").html(field.v_play_code) ; 
				
				
				var dir = "movie_images";
				
								
				img_value = ImgURL+dir+"/"+move_banner_image;
				
	            $("#listvideo").append('<div class="videocontainer"><a href="music.html?'+movie_id+'"><img src="'+img_value+'" alt=" " width="100%" height="200" /></a></div><h3 class="page_subtitle"><a href="music.html?'+movie_id+'" style="color:#FFFFFF;">'+movie_title+'</a></h3>');
				
	        });
    	});
		
		
	});