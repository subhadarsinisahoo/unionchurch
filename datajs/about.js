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
		
		/*var links = '<li><a href="cast_crew.html?'+a_id+'"><img src="images/icons/black/users.png" alt="" title="" /><span>Cast and Crew</span></a></li><li><a href="movie_photo.html?'+a_id+'"><img src="images/icons/black/photos.png" alt="" title="" /><span>Photos</span></a></li><li><a href="trailer.html?'+a_id+'" ><img src="images/icons/black/video.png" alt="" title="" /><span>Videos</span></a></li><li><a href="music.html?'+a_id+'"><img src="images/icons/black/slider.png" alt="" title="" /><span>Music</span></a></li><li><a href="news.html?'+a_id+'"><img src="images/icons/black/blog.png" alt="" title="" /><span>Articles</span></a></li>  <li><a href="movie_review.html?'+a_id+'"><img src="images/icons/black/like.png" alt="" title="" /><span>Review</span></a></li><li><a href="movie-box-detail.html?'+a_id+'"><img src="images/icons/black/building.png" alt="" title="" /><span>Box Office</span></a></li>';
		
		$("#movie_links").html(links);*/
		
		//var url=BaseURL+"article_details.php?article_id="+a_id; alert(url);
		var url=BaseURL+"about.php"; //alert(url);
		$.getJSON(url,function(result){ 
					$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				var about_text=field.about_text; //alert(w_s_desc);
	        	/*var movie_id=field.movie_id;
				var movie_title=field.movie_title;
	        	
	        	var movie_release_dt=field.movie_release_dt;
				var image=field.image;
				var rateHTML=field.rateHTML;
				var no_comments=field.no_comments;
				var movie_primary_cast="<strong>Starring</strong> &nbsp;"+field.movie_primary_cast;
				var movie_banner="<strong>Movie Banner</strong> &nbsp;"+field.movie_banner;
				
				var movie_music_dir="<strong>Music Director</strong> &nbsp;"+field.movie_music_dir;
				var movie_director="<strong>Director</strong> &nbsp; "+field.movie_director;
				var movie_genre="<strong>Genre</strong> &nbsp; "+field.movie_genre;*/
				
				
				$("#movie_title").html("About") ;
				//$("#movie_image").html('<img src="'+img_value+'" alt="" title="" />') ;
	            $("#movie_synopsis").html(about_text) ;
				//$("#date").html(movie_release_dt) ;
				//$("#star_rate").html(rateHTML) ;
				//$("#director").html(movie_director) ;
				//$("#genre").html(movie_genre) ;
				//$("#music_dir").html(movie_music_dir) ;
				//$("#star_cast").html(movie_primary_cast);
				//$("#banner").html(movie_banner);
	        });
    	});
		
		
		
		
	});