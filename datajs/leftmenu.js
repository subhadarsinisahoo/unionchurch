function show_tab(tone,ttwo,bone,btwo) {
	//alert(tone);
	$(ttwo).hide();	
	$(tone).show();	
	
	//alert();
	$(btwo).removeClass('active');
	//$(tone).removeClass('active');
	$(bone).addClass('active');
}


$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		var menu = '<li><a href="index.html" class="close-panel"><img src="images/icons/yellow/home.png" alt="" title="" /><span>Home</span></a></li><li><a href="latestmovies.html" class="close-panel"><img src="images/icons/yellow/movie.png" alt="" title="" /><span>Latest Movies</span></a></li><li><a href="trending.html" class="close-panel"><img src="images/icons/yellow/trending.png" alt="" title="" /><span>Trending</span></a></li><li><a href="trailer.html" class="close-panel"><img src="images/icons/yellow/trailer.png" alt="" title="" /><span>Trailer Videos</span></a></li><li><a href="topreview.html" class="close-panel"><img src="images/icons/yellow/top.png" alt="" title="" /><span>Top Reviews</span></a></li><li><a href="boxoffice.html" class="close-panel"><img src="images/icons/yellow/box.png" alt="" title="" /><span>Box Office</span></a></li><li><a href="fbo-series.html" class="close-panel"><img src="images/icons/yellow/video.png" alt="" title="" /><span>FBO Series</span></a></li>	<li><a href="music.html" class="close-panel"><img src="images/icons/yellow/music.png" alt="" title="" /><span>Music</span></a></li><li><a href="upcoming.html" class="close-panel"><img src="images/icons/yellow/lock.png" alt="" title="" /><span>Upcoming Movies</span></a></li><li><a href="news.html" class="close-panel"><img src="images/icons/yellow/blog.png" alt="" title="" /><span>News</span></a></li><li><a href="photos.html" class="close-panel"><img src="images/icons/yellow/photos.png" alt="" title="" /><span>Photos</span></a></li><li><a href="form.html" class="close-panel"><img src="images/icons/yellow/form.png" alt="" title="" /><span>Write A Review</span></a></li><li><a href="contact.html" class="close-panel"><img src="images/icons/yellow/contact.png" alt="" title="" /><span>Contact</span></a></li>';
		
		$("#sidemenu").append(menu);
		
	});