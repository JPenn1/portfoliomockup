	$(document).ready(function(){
		var bottom=$("header").outerHeight();
		var header=$("header").offset().top + bottom;
     $(window).scroll(function(){
          // header fixed only when window width greater than 991px
         if($(window).width()>991){
     	if($(window).scrollTop()>=header){
     		$("header").addClass("sticky")
     	}
     	else{
     	 $("header").removeClass("sticky")	
     	}
	 }
	 
	 function navigationBar() {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
		  x.className += " responsive";
		} else {
		  x.className = "topnav";
		}
	  }

	 $('.submit').click(function(e){
		 console.log('clicked button')
		 
		 let name = $('.name').val()
		 let email = $('.email').val()
		 let subject = $('.subject').val()
		 let message = $('.message').val()
		 let statusElm = $('.status')
		 statusElm.empty()
		 
		 if(email.length > 5 && email.includes('@') && email.includes('.')){
			 statusElm.append('<div>Email is valid</div>')	
			} else{
				e.preventDefault()
				statusElm.append('<div>Email is Not valid</div>')
		}	
		if(subject.length >= 2) {
			statusElm.append('<div>Subject is valid</div>')	
		} else{
		  e.preventDefault()
		  statusElm.append('<div> Subject is Not valid</div>')
		}
		
		if(message.length >=10){
		  statusElm.append('<div>Message is valid</div>')	
		}else{
	      e.preventDefault() 
		  statusElm.append('<div> Message is Not valid</div>')
		}
	 })
     });

     // navbar active link

     $(".navbar ul li a").click(function(){
     	 $(".navbar ul li a").removeClass("active")
     	 $(this).addClass("active");
     })
  
    $(".ham-burger").click(function(){
    	$(this).toggleClass("active")
    	$(".navbar").toggleClass("open");
    })

	});





