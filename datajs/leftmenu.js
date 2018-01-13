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
		var menu = '<li><a href="index.html" class="close-panel"><img src="images/icons/red/home.png" alt="" title="" /><span>Home</span></a></li><li><a href="featured_photo.html" class="close-panel"><img src="images/icons/red/favorites.png" alt="" title="" /><span>Featured</span></a></li><li><a href="service_video.html" class="close-panel"><img src="images/icons/red/video.png" alt="" title="" /><span>Service Videos</span></a></li><li><a href="events.html" class="close-panel"><img src="images/icons/red/trailer.png" alt="" title="" /><span>Events</span></a></li><li><a href="speaking_engagement.html" class="close-panel"><img src="images/icons/red/blog.png" alt="" title="" /><span>Speaking Engagement</span></a></li><li><a href="testimonials.html" class="close-panel"><img src="images/icons/red/box.png" alt="" title="" /><span>Testimonial</span></a></li><li><a href="weekly_schedule.html" class="close-panel"><img src="images/icons/red/form.png" alt="" title="" /><span>Weekly Schedule</span></a></li>	<li><a href="announcement.html" class="close-panel"><img src="images/icons/red/message.png" alt="" title="" /><span>Announcement</span></a></li><li><a href="live-stream.html" class="close-panel"><img src="images/icons/red/mobile.png" alt="" title="" /><span>Live Stream</span></a></li><li><a href="about.html" class="close-panel"><img src="images/icons/red/user.png" alt="" title="" /><span>About</span></a></li><li><a href="pastor_speak.html" class="close-panel"><img src="images/icons/red/photos.png" alt="" title="" /><span>Pastor Speak</span></a></li><li><a href="contact.html" class="close-panel"><img src="images/icons/red/contact.png" alt="" title="" /><span>Contact</span></a></li>';
		
		$("#sidemenu").append(menu);
		
	});