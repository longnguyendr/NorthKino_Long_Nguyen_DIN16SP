
/*------------------------------*/
/*             SHOW             */
/*------------------------------*/
$(function() 
{
  
          $( '#mi-slider' ).catslider();
  
});
/*------------------------------*/
/*         SLIDE SHOW           */
/*------------------------------*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*------------------------------*/
/*         Display Order        */
/*------------------------------*/

/*  MOVIES   */
function displaymov()
{

  var x = document.getElementById("mov").options[mov.selectedIndex].innerHTML;
  var a = document.getElementById("mov").selectedIndex;
  if(a == 0)
  {
    alert("please choose Movies");
  }
  else if (a == 1)
  {
    document.getElementById("mov1").innerHTML="MOVIES: " + x;
    document.getElementById('imgs').src='images/Hoteltransy.jpg';
    document.getElementById('imgs').style.display='block';
  }
  else if (a == 2)
  {
    document.getElementById("mov1").innerHTML="MOVIES: " + x;
    document.getElementById('imgs').src='images/ant.jpg';
    document.getElementById('imgs').style.display='block';
  }

  else if (a == 3)
  {
    document.getElementById("mov1").innerHTML="MOVIES: " + x;
    document.getElementById('imgs').src='images/maze.jpg';
    document.getElementById('imgs').style.display='block';
  }
  else if (a == 4)
  {
    document.getElementById("mov1").innerHTML="MOVIES: " + x;
    document.getElementById('imgs').src='images/noes.jpg';
    document.getElementById('imgs').style.display='block';
  }
  else if (a == 5)
  {
    document.getElementById("mov1").innerHTML="MOVIES: " + x;
    document.getElementById('imgs').src='images/now5.jpg';
    document.getElementById('imgs').style.display='block';
  }
  else if (a == 6)
  {
    document.getElementById("mov1").innerHTML="MOVIES: " + x;
    document.getElementById('imgs').src='images/now6.jpg';
    document.getElementById('imgs').style.display='block';
  }
  else if (a == 7)
  {
    document.getElementById("mov1").innerHTML="MOVIES: " + x;
    document.getElementById('imgs').src='images/now8.jpg';
    document.getElementById('imgs').style.display='block';
  }
  else if (a == 8)
  {
    document.getElementById("mov1").innerHTML="MOVIES: " + x;
    document.getElementById('imgs').src='images/now7.jpg';
    document.getElementById('imgs').style.display='block';
  }
  
}
/*  CINEMAS   */
function displaycin()
{

  var x = document.getElementById("cin").options[cin.selectedIndex].innerHTML;
  var a = document.getElementById("cin").selectedIndex;
  if(a == 0)
    {
      alert("please choose Cinemas");
    }
  else
    {
      document.getElementById("cin1").innerHTML="CINEMAS: " + x;
    }
}

/*  DATE  */
function displaydate()
{

  var x = document.getElementById("date").options[date.selectedIndex].innerHTML;
  var a = document.getElementById("date").selectedIndex;
  if(a == 0)
    {
      alert("Please choose Date");
    }
  else
  {
    document.getElementById("date1").innerHTML="DATE: " + x;
  }
}

/*  TIME   */
function displaytime()
{

  var x = document.getElementById("time").options[time.selectedIndex].innerHTML;
  var a = document.getElementById("time").selectedIndex;
  if(a == 0)
    {
      alert("Please choose Time");
    }
  else
  {
    document.getElementById("time1").innerHTML="TIME: " + x;
  }
  

}

