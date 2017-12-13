function fill_star(num,size) {
		for(j=1;j<num;j++) {
			id = "s"+j;
			document.getElementById(id).className = "fa fa-star";
		}
		
		if(size=="half"){
			id = "s"+j;
			document.getElementById(id).className = "fa fa-star-half-o";
			v = (num-1)+.5;
		} else {
			id = "s"+j;
			document.getElementById(id).className = "fa fa-star";
			v = num;
		}
		
		j++;
		
		for(k=j;k<=5;k++) {
			id = "s"+k;
			document.getElementById(id).className = "fa fa-star-o";
		}
		document.getElementById("rating").value = v;
		
	}
	
function empty_star() {
		for(k=1;k<=5;k++) {
			id = "s"+k;
			document.getElementById(id).className = "fa fa-star-o";
		}
	}	

 function sud_data() {
 
 
        //$("#insert").click(function(){
            var name=$("#CommentName").val();
            var email=$("#CommentEmail").val();
            var comment=$("#Comment").val();
			var rating=$("#rating").val();
			var review_type=$("#review_type").val();
			var review_for_id=$("#review_for_id").val();
			
			var atpos = email.indexOf("@");
			var dotpos = email.lastIndexOf(".");
			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
				alert("Not a valid e-mail address");
				return false;
			}
			
            var dataString="name="+name+"&email="+email+"&comment="+comment+"&rate_value="+rating+"&review_type="+review_type+"&review_for_id="+review_for_id+"&mode=insert";
			//alert("http://swsinc.in/FBO/phonegap/insert_content_review.php?"+dataString);
            if($.trim(name).length>0 & $.trim(comment).length>0 & $.trim(email).length>0 & $.trim(rating).length>0)
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"insert_content_review.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#insert").val('Connecting...');},
                    success: function(data){
                        if(data=="ok")
                        {
                            alert("Thanks for your review, after approving it will be shown in the site");
                            $("#insert").val('submit');
							$("#CommentName").val('') ;
							$("#CommentEmail").val('') ;
							$("#rating").val('') ;
							$("#Comment").val('') ;
							empty_star();
                        }
                        else if(data=="error")
                        {
                            alert("error");
							 $("#insert").val('submit');
							$("#CommentName").val('') ;
							$("#CommentEmail").val('') ;
							$("#rating").val('') ;
							$("#Comment").val('') ;
							empty_star();
                        } 
						 else if(data=="duplicate")
                        {
                            alert("You have already reviewed for this "+review_type);
							 $("#insert").val('submit');
							$("#CommentName").val('') ;
							$("#CommentEmail").val('') ;
							$("#rating").val('') ;
							$("#Comment").val('') ;
							empty_star();
                        }
                    }
                });
            } else {
			 alert("Please fill the form properly");
			} return false;
			
            //});
    
 }
