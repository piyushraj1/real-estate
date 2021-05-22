// Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      // Thumbnail image controls
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

//Automatic Slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}
var id= null;
      function move(){
        var elem=document.getElementById('anima');
        var box=document.getElementById('anima');
        var width=box.offsetWidth;
        var reqWidth=window.innerWidth-width;
        clearInterval(id);
        var pos=0;
        id=setInterval(frame,5);
        function frame(){
        if(pos==reqWidth-20){
          clearInterval(id);
        }
        else{
          pos++;
          elem.style.left= pos + 'px';
        }
      }
    }

    

      function greet(){
      var hr= new Date().getHours();
      if (hr<10) {
        alert("Good Morning");
      }
      else{
        alert("Good Day");
      }
    }
    function thanks(){
      alert("Thank You for Visiting our site")
    }

  // Get the modal
  var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function getModal(){
  modal.style.display="block";
}

function closetab(){
  alert('Have a Good Day!!')
}
var btn3=document.getElementById("nav-btn");
	var modal3=document.getElementById("myModal3");
	var cl= document.getElementsByClassName("close3")[0];

	btn3.onclick= function(){
		modal3.style.display="block";
	}
	cl.onclick= function(){
		modal3.style.display="none";
	}

	// Get the modal
	var modal2 = document.getElementById("myModal2");

	// Get the button that opens the modal
	var btn2 = document.getElementById("myBtn2");

	// Get the <span> element that closes the modal
	var span2 = document.getElementsByClassName("close2")[0];
	
	// When the user clicks on the button, open the modal
	btn2.onclick = function() {
	  modal2.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span2.onclick = function() {
	  modal2.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal2) {
		modal2.style.display = "none";
	  }
	  if(event.target==modal3){
		modal3.style.display="none";
	  }
	  if(event.target==modal){
		modal.style.display="none";
	  }
	}
function myMedia(){
    var x=document.getElementById('media');
    if (x.style.display==="none") {
      x.style.display="block";
    }
    else{
      x.style.display="none";
    }
  }
  var $carousel = $('.carousel').flickity({
    imagesLoaded: true,
    percentPosition: false,
  });
  
  var $imgs = $carousel.find('.carousel-cell img');
  // get transform property
  var docStyle = document.documentElement.style;
  var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
  // get Flickity instance
  var flkty = $carousel.data('flickity');
  
  $carousel.on( 'scroll.flickity', function() {
    flkty.slides.forEach( function( slide, i ) {
      var img = $imgs[i];
      var x = ( slide.target + flkty.x ) * -1/3;
      img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
  });

  

//SLIDESHOW
/*var slideIndex = 1;
      showSlides(slideIndex);
      
      // Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      // Thumbnail image controls
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" activ", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " activ";
      }

/*var slideIndex=1;
showSlides(slideIndex);

//Prev,next controls
function plusSlides(n){
  showSlides(slideIndex += n);
}

//dot conrols
function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides=document.getElementByClassName("myslides");
  var dots=document.getElementByClassName("dot");
  if(n>slides.length){slideIndex=1}
  if (n<1) {slideIndex=slides.length}
    for(i=0;i<slides.length;i++){
      slides[i].style.display="none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className=dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex+1].className += "active";
}

/*function button1(){
  document.getElementById('left').src='coming soon.png';
}

function button2(){
  document.getElementById('left').src='feed.jpg';
}*/


