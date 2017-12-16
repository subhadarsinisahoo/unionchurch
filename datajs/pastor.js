// JavaScript Document
//$( "#show_articles" ).load(function() {
  // Handler for .load() called.
//});$( "#sarticle" ).click(function()

function load_more() {
			var v = $("#next_off").val();
			//alert(v);
			
			var str = window.location.href;
			var start = str.lastIndexOf("?") + 1;
			var end = str.length;
			//alert(str.substring(start,end));	
			//var str = str.replace("#tab2", "");
			var a_id = str.substring(start,end) ;
			var url = "";
			url=BaseURL+"pastor_speak.php";
			
			//var url=BaseURL+"article_data.php?cat="+art_cat+"&offset="+v;
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				if(field.next_offset == -1){
					$("#loadMore").hide();
				}
				/*if(i==0){
					var next_offset=field.next_offset;
					$("#next_off").val(next_offset);
				} else {*/
	        	var p_id=field.p_id;
				var p_name=field.p_name;
	        	//var article_body=field.article_body+"...";
				var p_image=field.p_image;
				//var movie_or_serial_type=field.movie_or_serial_type;
				var dir = "";
				//if(movie_or_serial_type == "movie") {
					dir = "movie_images";
				/*} else {
					dir = "serial_images";
				}*/
				img_value = ImgURL+dir+"/"+p_image;
	             $("#listview").append("<li class='swipeout'><div class='swipeout-content item-content'><div class='post_entry'><div class='post_thumb'><img src='"+img_value+"' width='200' alt='' title='' /></div><div class='post_details'><div class='post_category'><a href='pastor-details.html?"+ p_id + "'>"+ p_name + "</a></div><span style='font-size:12px;'>  </span></div></div></div></li>");
				/*}*/
	        });
    	});	
		}
	
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
		url=BaseURL+"pastor_speak.php";
			$("#heading").html("Pastor Speak");
		
		//alert(url);
		//var url=BaseURL+"article_data.php?cat="+art_cat+"";
		$.getJSON(url,function(result){ //alert(result);
					$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				if(field.next_offset == -1){
					$("#loadMore").hide();
				}					
				/*if(i==0){
					var next_offset=field.next_offset;
					$("#next_off").val(next_offset);
				} else {*/
	        	var p_id=field.p_id;
				var p_name=field.p_name;
	        	//var article_body=field.article_body+"...";
				var p_image=field.p_image;
				//var movie_or_serial_type=field.movie_or_serial_type;
				var dir = "";
				//if(movie_or_serial_type == "movie") {
					dir = "movie_images";
				/*} else {
					dir = "serial_images";
				}*/
				img_value = ImgURL+dir+"/"+p_image;
	            $("#listview").append("<li class='swipeout'><div class='swipeout-content item-content'><div class='post_entry'><div class='post_thumb'><img src='"+img_value+"' width='200' alt='' title='' /></div><div class='post_details'><div class='post_category'><a href='pastor-details.html?"+ p_id + "'>"+ p_name + "</a></div><span style='font-size:12px;'>  </span></div></div></div></li>");
				
				/* $("#listview").append("<li class='swipeout'><div class='swipeout-content item-content'><div class='post_entry'><div class='post_thumb'><img src='"+img_value+"' width='200' alt='' title='' /></div><div class='post_details'><div class='post_category'><a href='article-details.html?"+ testi_id + "'>"+ p_name + "</a></div><h2><a href='article-details.html?"+ testi_id + "'>"+ article_body +"</a></h2>By Fresh Box Office on "+post_date+"</div><div class='post_swipe'><img src='images/swipe_more.png' alt='' title='' /></div></div></div></li>");*/
				//}
	        });
    	});
		
		
	});