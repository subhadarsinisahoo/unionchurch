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
		
		var links = '<li><a href="cast_crew.html?'+a_id+'"><img src="images/icons/black/users.png" alt="" title="" /><span>Cast and Crew</span></a></li><li><a href="movie_photo.html?'+a_id+'"><img src="images/icons/black/photos.png" alt="" title="" /><span>Photos</span></a></li><li><a href="trailer.html?'+a_id+'" ><img src="images/icons/black/video.png" alt="" title="" /><span>Videos</span></a></li><li><a href="music.html?'+a_id+'"><img src="images/icons/black/slider.png" alt="" title="" /><span>Music</span></a></li><li><a href="news.html?'+a_id+'"><img src="images/icons/black/blog.png" alt="" title="" /><span>Articles</span></a></li>  <li><a href="movie_review.html?'+a_id+'"><img src="images/icons/black/like.png" alt="" title="" /><span>Review</span></a></li><li><a href="movie-box-detail.html?'+a_id+'"><img src="images/icons/black/building.png" alt="" title="" /><span>Box Office</span></a></li>';
		
		$("#movie_links").html(links);
		
		//var url=BaseURL+"article_details.php?article_id="+a_id; alert(url);
		var url=BaseURL+"movie_details.php?movie_id="+a_id; //alert(url);
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var movie_id=field.movie_id;
				var movie_title=field.movie_title;
	        	var movie_synopsis=field.movie_synopsis;
	        	var movie_release_dt=field.movie_release_dt;
				var image=field.image;
				var rateHTML=field.rateHTML;
				var no_comments=field.no_comments;
				var movie_primary_cast="<strong class='m_label'>Starring</strong> &nbsp;"+field.movie_primary_cast+"<br>";
				var movie_banner="<strong class='m_label'>Movie Banner</strong> &nbsp;"+field.movie_banner+"<br>";
				
				var movie_music_dir="<strong class='m_label'>Music Director</strong> &nbsp;"+field.movie_music_dir+"<br>";
				var movie_director="<strong class='m_label'>Director</strong> &nbsp; "+field.movie_director+"<br>";
				var movie_genre="<strong class='m_label'>Genre</strong> &nbsp; "+field.movie_genre+"<br>";
				var release_date="<strong class='m_label'>Release Date</strong> &nbsp; "+field.movie_release_dt+"<br>";
				
				var str = movie_primary_cast+movie_banner+movie_music_dir+movie_director+movie_genre+release_date;
				
				var dir = "";
					dir = "movie_images";
				//alert(movie_title);
				img_value = ImgURL+dir+"/"+image;
				$("#movie_title").html(movie_title) ;
				$("#movie_image").html('<img src="'+img_value+'" alt="" title="" />') ;
	            $("#movie_synopsis").append(field.movie_star_cast) ;
				$("#star_rate").html(rateHTML) ;
				
				$("#listview").append('<li class="table_row"><div class="table_section">Banner</div><div class="table_section">'+field.movie_banner+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Starring</div><div class="table_section">'+field.movie_primary_cast+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Music Director</div><div class="table_section">'+field.movie_music_dir+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Director</div><div class="table_section">'+field.movie_director+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Genre</div><div class="table_section">'+field.movie_genre+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Release Date</div><div class="table_section">'+field.movie_release_dt+'</div> </li>');
				
				$("#listview").append('<li class="table_row"><div class="table_section">Status</div><div class="table_section">'+field.movie_status+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Language</div><div class="table_section">'+field.movie_language+'</div> </li>');
				//$("#listview").append('<li class="table_row"><div class="table_section">'++'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Lyricist</div><div class="table_section">'+field.movie_lyricist+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Editor</div><div class="table_section">'+field.movie_editor+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Producer</div><div class="table_section">'+field.movie_producer+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Cinematographer</div><div class="table_section">'+field.movie_cine+'</div> </li>');
				
				$("#listview").append('<li class="table_row"><div class="table_section">Screenplay</div><div class="table_section">'+field.movie_screen+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Location</div><div class="table_section">'+field.movie_location+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Writer</div><div class="table_section">'+field.movie_writer+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Music Company</div><div class="table_section">'+field.movie_music_co+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Playback Singers</div><div class="table_section">'+field.movie_playback+'</div> </li>');
				$("#listview").append('<li class="table_row"><div class="table_section">Coreographer</div><div class="table_section">'+field.movie_coreographers+'</div> </li>');
				
				/*$("#date").html(movie_release_dt) ;
				
				$("#director").html(movie_director) ;
				$("#genre").html(movie_genre) ;
				$("#music_dir").html(movie_music_dir) ;
				$("#star_cast").html(movie_primary_cast);
				$("#banner").html(movie_banner);*/
	        });
    	});
		
		
		
		
	});