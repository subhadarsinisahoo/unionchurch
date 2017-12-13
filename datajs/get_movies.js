

function fix_value(id,text) { //alert(text);
	 $("#movie_title").val(text);
	  $("#movie_id").val(id);
	  $("#movie_list").html("");
}

function suggest_movies(suggest_txt) {
	var url=BaseURL+"suggest_movies.php?movie_title="+suggest_txt ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var movie_id=field.movie_id;
				var movie_title=field.movie_title;
				var link_d=field.link_d;
				
				var m_id = '"'+movie_id+'"';
				var m_title = '"'+movie_title+'"'; //alert(m_title);
				
				str = str+ link_d ;
	          
				
	        });
			
			 $("#movie_list").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}

function load_dropdown() {
	//$("#listview").html('');
	var url=BaseURL+"get_movie_list.php" ;
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var movie_id=field.movie_id;
				var movie_title=field.movie_title;
				
				
	           $("#movie_id").append('<option value="'+movie_id+'">'+movie_title+'</option>');
				
	        });
			
			 //$(showID).append('<div class="clearleft"></div>');
    	});
	
	}

$(document).ready(function()
		{
		// Using GetJSON
		load_dropdown();
		
	});