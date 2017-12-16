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
	var url=BaseURL+"s_e.php?offset="+offset;
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
	        	var s_e_id=field.s_e_id;
				var s_e_topic=field.s_e_topic;
	        	//var movie_genre=field.movie_genre ;
				//var lifetime=field.lifetime;
				//var rate=field.rate;
				//var tot_comments=field.tot_comments;
				//var movie_primary_cast=field.movie_primary_cast;
	        	//var movie_release_dt=field.movie_release_dt;
				var s_e_image=field.s_e_image;
				//var rateHTML = field.rateHTML;
				//var movie_director = field.movie_director;
				
				var dir = "";
				
					dir = "movie_images";
				
				img_value = ImgURL+dir+"/"+s_e_image;
	            $("#listview").append('<li><div class="shop_thumb"><a href="s_e_detail.html?'+s_e_id+'"><img src="'+img_value+'" alt="" title="" /></a></div><div class="shop_item_details" style="font-weight:normal;"><h4><a href="s_e_detail.html?'+s_e_id+'">'+s_e_topic+'</a></h4></li>');
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