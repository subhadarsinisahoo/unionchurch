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
	
	var str = window.location.href;
	var start = str.lastIndexOf("?") + 1;
	var end = str.length;
	//alert(str.substring(start,end));	
	//var str = str.replace("#tab2", "");
	var a_id = str.substring(start,end) ;
	var extraurl = "";
	
	if($.isNumeric(a_id)){
	//alert(a_id);	
	extraurl="&movie_id="+a_id;
	}
	
	var url=BaseURL+"photos.php?offset="+offset+extraurl;
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
				
				if(movie_or_serial_type == "movie") {
					dir = "movie_images";
				} else {
					dir = "serial_images";
				}
				
				img_value = ImgURL+dir+"/"+photo_path; //alert(img_value);
	           $("#listview").append('<li><div class="shop_thumb"><a href="photo-detail.html?'+m_p_id+'"><img src="'+img_value+'" alt="" title="" /></a></div><div class="shop_item_details"><h4><a href="photo-detail.html?'+m_p_id+'">'+photo_title+'</a></h4><div class="shop_item_price">'+category_name+'</div><div class="item_qnty_shop"></div><a href="#" ><i class="fa fa-pencil-square-o"></i> '+creation_dt+'</a> <br>'+rateHTML+'</div></li>');
				}
	        });
			
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