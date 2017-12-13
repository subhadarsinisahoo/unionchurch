// JavaScript Document
//$( "#show_articles" ).load(function() {
  // Handler for .load() called.
//});$( "#sarticle" ).click(function()

function load_next() {
	
	var n = $("#next_off").val();
	if(n>0) {
		$("#loader").show();	
		 load_data(n);
	}
}

function load_prev() {
	
	var n = $("#prev_off").val();
	if(n>=0){
		$("#loader").show();	
		load_data(n);
	}
}

function load_data(offset) {
	$("#listview").html('');
	var url=BaseURL+"upcoming.php?offset="+offset;
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				if(i==0){
					var next_offset=field.next_offset;
					$("#next_off").val(next_offset);
					var prev_offset=field.prev_offset;
					$("#prev_off").val(prev_offset);
				} else {
	        	var movie_id=field.movie_id;
				var movie_title=field.movie_title;
	        	var movie_genre=field.movie_genre ;
				var lifetime=field.lifetime;
				var rate=field.rate;
				var tot_comments=field.tot_comments;
				var movie_primary_cast=field.movie_primary_cast;
	        	var movie_release_dt=field.movie_release_dt;
				var movie_small_image=field.movie_small_image;
				var rateHTML = field.rateHTML;
				var movie_director = field.movie_director;
				
				var dir = "";
				
					dir = "movie_images";
				
				img_value = ImgURL+dir+"/"+movie_small_image;
	            $("#listview").append('<li><div class="shop_thumb"><a href="moviedetail.html?'+movie_id+'"><img src="'+img_value+'" alt="" title="" /></a></div><div class="shop_item_details"><h4><a href="moviedetail.html?'+movie_id+'">'+movie_title+'</a></h4><div class="shop_item_price">'+movie_primary_cast+'</div><div class="item_qnty_shop"></div><a href="#" ><b>Release Dt. </b>'+movie_release_dt+'</a><br><b>Genre:</b> '+movie_genre+'<br><b>Director:</b> '+movie_director+' <a href="movie_review.html?'+movie_id+'" class="shopfav"><img src="images/icons/black/message.png" alt="" title="" />'+tot_comments+'</a><br>'+rateHTML+'</div></li>');
				}
	        });
    	});
	
	}
	
	$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		
		
		var offset = 0;
		
		load_data(offset);
		
		
	});