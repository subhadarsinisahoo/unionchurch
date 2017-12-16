// JavaScript Document
//$( "#show_articles" ).load(function() {
  // Handler for .load() called.
//});$( "#sarticle" ).click(function()


function load_data(offset) {
	//$("#listview").html('');
	
	var str = window.location.href;
	var start = str.lastIndexOf("?") + 1;
	var end = str.length;
	//alert(str.substring(start,end));	
	//var str = str.replace("#tab2", "");
	var a_id = str.substring(start,end) ;
	var extraurl = "";
	
	/*if($.isNumeric(a_id)){
	extraurl="&movie_id="+a_id;
	}*/
	
	var url=BaseURL+"photos.php?offset="+offset+extraurl; //alert(url);
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				if(i==0){
					var next_offset=field.next_offset;
					//$("#next_off").val(next_offset);
					var prev_offset=field.prev_offset;
					//$("#prev_off").val(prev_offset);
				} else {
	        	var m_p_id=field.m_p_id;
				var photo_title=field.photo_title;
	        	var photo_path=field.photo_path ;
				var photo_about=field.photo_about;
				var rate=field.rate;
				var rateHTML=field.rateHTML;
				var tot_comments=field.tot_comments;
				var movie_or_serial_type=field.movie_or_serial_type;
	        	var creation_dt=field.creation_dt;
				var category_name=field.category_name;
				
				var dir = "";
				
				/*if(movie_or_serial_type == "movie") {*/
					dir = "movie_images";
				/*} else {
					dir = "serial_images";
				}*/
				
				img_value = ImgURL+dir+"/"+photo_path; //alert(img_value);
	           $("#photoslist").append('<li><a rel="gallery-3" href="'+img_value+'" title="'+photo_title+'" class="swipebox"><img width="120" height="100" src="'+img_value+'" alt="image"/></a></li>');
				}
	        });
			$(".swipebox").swipebox();
			 //$(showID).append('<div class="clearleft"></div>');
    	});
	
	}
	
	$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		
		
		var offset = 0;
		//var showID = '#photoslist1';
		//var cat = 'on-the-set';
		
		load_data(offset);
		
		
		/*showID = '#photoslist2';
		cat = 'making-of';
		
		load_data(showID,cat,offset);
		
		showID = '#photoslist3';
		cat = 'events';
		
		load_data(showID,cat,offset);*/
		
		
	});