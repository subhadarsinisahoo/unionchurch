$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
			
			url=BaseURL+"trending.php";
			$("#heading").html('Trending');
		
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				
				var trending_id=field.trending_id;
	        	var trending_type=field.trending_type;
				var trending_title=field.trending_title;
				var trending_banner=field.trending_banner;
				var movie_id=field.movie_id;
				var article_id=field.article_id;
	        	//$("#video").html(field.v_play_code) ; 
				
				
				var dir = "movie_images";
				var link_id = "";
				
				if(trending_type == "movie"){
					link_id = movie_id;
					link_page = "moviedetail.html";
				} else if(trending_type == "article") {
					link_id = article_id;
					link_page = "article-details.html";
				}
				
				img_value = ImgURL+dir+"/"+trending_banner;
				
	            $("#listvideo").append('<div class="videocontainer"><a href="'+link_page+'?'+link_id+'"><img src="'+img_value+'" alt=" " width="100%" height="200" /></a></div><h3 class="page_subtitle"><a href="'+link_page+'?'+link_id+'" style="color:#FFFFFF;">'+trending_title+'</a></h3>');
				
	        });
    	});
		
		
	});