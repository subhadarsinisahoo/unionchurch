
 function sud_data() {
 
 
        //$("#insert").click(function(){
            var name=$("#ContactName").val();
            var email=$("#ContactEmail").val();
            var comment=$("#ContactComment").val();
			
			var atpos = email.indexOf("@");
			var dotpos = email.lastIndexOf(".");
			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
				alert("Not a valid e-mail address");
				return false;
			}
			
            var dataString="name="+name+"&email="+email+"&comment="+comment+"&mode=insert";
			//alert("http://swsinc.in/FBO/phonegap/insert_content_review.php?"+dataString);
            if($.trim(name).length>0 & $.trim(comment).length>0 & $.trim(email).length>0)
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"send_contact_email.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#insert").val('Connecting...');},
                    success: function(data){
                        if(data=="ok")
                        {
                            alert("Thanks for your interest, we will get back to you very soon.");
                            $("#insert").val('submit');
							$("#ContactName").val('') ;
							$("#ContactEmail").val('') ;
							$("#ContactComment").val('') ;
                        }
                        else if(data=="error")
                        {
                            alert("error");
							 $("#insert").val('submit');
							$("#ContactName").val('') ;
							$("#ContactEmail").val('') ;
							$("#ContactComment").val('') ;
                        } 
						 else if(data=="duplicate")
                        {
                            alert("You have already reviewed for this "+review_type);
							 $("#insert").val('submit');
							$("#ContactName").val('') ;
							$("#ContactEmail").val('') ;
							$("#ContactComment").val('') ;
                        }
                    }
                });
            } else {
			 alert("Please fill the form properly");
			} return false;
			
            //});
    
 }
