// JavaScript Document
//$( "#show_articles" ).load(function() {
  // Handler for .load() called.
//});$( "#sarticle" ).click(function()


function load_data(movie_id) {
	var url=BaseURL+"box_detail.php?movie_id="+movie_id ;
		$.getJSON(url,function(result){ //alert(url);
					$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				if(i==0){
					var movie_title=field.movie_title;
					var movie_id=field.movie_id;
					/*$("#next_off").val(next_offset);
					var prev_offset=field.prev_offset;
					$("#prev_off").val(prev_offset);*/
					$("#movie").html('<a style="color:#FFFFFF; font-size:14px;" href="movie.html?'+movie_id+'">'+movie_title+'</a>');
					
				} else {
	        	var key=field.key;
				var val=field.value;
	        	
				
				
	            $("#listview").append('<li class="table_row"><div class="table_section">'+key+'</div><div class="table_section"><i class="fa fa-fw fa-inr"></i>'+val+'</div> </li>');
				}
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
		var a_id = str.substring(start,end) ;			
		load_data(a_id);
		
		
	});