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
	
	$("#listview").html('<li class="table_row"<div class="table_section">Track</div><div class="table_section">Album </div></li>');
	
	
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
	
	var url=BaseURL+"music.php?offset="+offset+extraurl;
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
	        	var m_music_id=field.m_music_id;
				var music_title=field.music_title;
	        	var movie_title=field.movie_title ;
				var music_singers=field.music_singers;
				var rate=field.rate;
				var rateHTML=field.rateHTML;
				var tot_comments=field.tot_comments;
				var music_dir=field.music_dir;
	        	var creation_dt=field.creation_dt;
				//var category_name=field.category_name;
											
				
	           $("#listview").append('<li class="table_row"><div class="table_section"><a style="color:#000099;" href="music_details.html?'+m_music_id+'">'+music_title+'</a></div><div class="table_section">'+movie_title+'</div> </li>');
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