$(document).ready(function()
		{
		// Using GetJSON 
		//var url="http://localhost/phonegap/database/json.php";
		
		function setCookie(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (exdays*24*60*60*1000));
			var expires = "expires="+ d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		}
		
		function getCookie(cname) {
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for(var i = 0; i <ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}
		
		var fbouser = getCookie("fbouser");
		/*if (fbouser != "") {
			alert("Welcome again " + fbouser);
		} else {
			fbouser = prompt("Please enter your name:", "");
			if (username != "" && fbouser != null) {
				setCookie("fbouser", fbouser, 365);
			}
		}*/
		
		if(fbouser != "") {
			var user_info = '<div class="user_thumb"><img src="images/page_photo2.jpg" alt="" title="" /><div class="user_details"><p>Welcome, <span>Alexia Doe</span></p></div>  <div class="user_avatar"><img src="images/avatar3.jpg" alt="" title="" /></div></div>';
		
		$("#user_info_box").append(user_info);
		
		var user_links = '<nav class="user-nav"><ul><li><a href="features.html" class="close-panel"><img src="images/icons/red/briefcase.png" alt="" title="" /><span>My Account</span></a></li><li><a href="features.html" class="close-panel"><img src="images/icons/red/message.png" alt="" title="" /><span>Messages</span><strong>12</strong></a></li><li><a href="features.html" class="close-panel"><img src="images/icons/red/love.png" alt="" title="" /><span>Favorites</span><strong>5</strong></a></li><li><a href="index.html" class="close-panel"><img src="images/icons/red/lock.png" alt="" title="" /><span>Logout</span></a></li></ul></nav>';
		
		$("#user_info_box").append(user_links);
			
		} else {
			var user_info = '<div class="user_thumb"><img src="images/page_photo2.jpg" alt="" title="" /><div class="user_details"><p>Please <span>Login </span></p></div><div class="user_avatar"><img src="images/noprofile.png" alt="" title="" /></div></div>';
			
			$("#user_info_box").append(user_info);
			
			var user_links = '<nav class="user-nav"><ul><li><a href="#" data-popup=".popup-login" class="open-popup close-panel"><img src="images/icons/yellow/lock.png" alt="" title="" /><span>Login</span></a></li></ul></nav>';
		
		$("#user_info_box").append(user_links);
		}
	});