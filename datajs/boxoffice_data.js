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
	var url=BaseURL+"boxoffice_data.php?offset="+offset;
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
	        	var opening_day=field.opening_day ;
				var end_of_week=field.end_of_week;
				var week_1=field.week_1;
				var lifetime=field.lifetime;
				var rate=field.rate;
				var tot_comments=field.tot_comments;
				var movie_primary_cast=field.movie_primary_cast;
	        	var movie_release_dt=field.movie_release_dt;
				var movie_small_image=field.movie_small_image;
				var rateHTML = field.rateHTML;
				
				var dir = "";
				
					dir = "movie_images";
				
				img_value = ImgURL+dir+"/"+movie_small_image;
	            $("#listview").append('<li><div class="shop_thumb"><a href="movie-box-detail.html?'+movie_id+'"><img src="'+img_value+'" alt="" title="" /></a></div><div class="shop_item_details"><h4><a href="movie-box-detail.html?'+movie_id+'">'+movie_title+'</a></h4><div class="shop_item_price">'+movie_primary_cast+'</div><div class="item_qnty_shop"><div class="box_div"><strong>Opening day: '+opening_day+' Crores</strong></div><div class="box_div"><strong>Lifetime: '+lifetime+'Crores</strong></div></div><a href="#" ><img src="images/icons/black/blog.png" alt="" title="" style="width:20px;" />'+movie_release_dt+'</a> <a href="#" class="open-popup shopfav"><img src="images/icons/black/message.png" alt="" title="" />'+tot_comments+'</a><br>'+rateHTML+'</div></li>');
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