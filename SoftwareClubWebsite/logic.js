
//$-means its a jquery function a library for JS that has specific functions for web dev like key listeners changing html elements
//document.ready waits for the page to load before code is run
$(document).ready(function(){
  var typePace = 25
  var message = "Instantiate Abington Heights Software Club"
  // # = id of element
  //typed.js has you make a   
      var intromessage = new Typed('#title', {
        strings: [message],
        showCursor: false,
        //how long it takes to type one character
        typeSpeed: typePace,

      });
      //retrieve progress bar from html and hide it untill timer has complete
      var bar = document.getElementById("downloading");
      //same process as above for a button
      var changeButton = document.getElementById("learnmore");
      //uses html element.style to manipulate css and then changes its display to none (hides element)
      bar.style.display = "none";

      changeButton.style.display = "none";

      //the time it waits equals typePace * message length *2 to give a small delay
      setTimeout(displayDownload,typePace*message.length*2);


      //once typed.js finishes loading make downloading screen visible  
      function displayDownload(){
        //uses same process as above typed.js to create downloading message
        var downloadingmessage = new Typed('#txtDownload', {
          strings: ["Downloading..."],
          typeSpeed: typePace,
          showCursor: false,
        });
        //shows loading bar after 1 second
        setTimeout(showBar, 1000);
        
      }
      function showBar(){
        //changes display to inline - block is similar to text (takes its own line)
      bar.style.display="block";
      //every 50 milliseconds (1/ a second) increase bar amount once it is ready to be displayed
      var progressDownloadBar = setInterval(incrementBar, 25);
      //increases bar size
      function incrementBar() {
        bar.value +=1
        //if current value == max then stop interval
        if(bar.value == bar.max){
          window.clearInterval(progressDownloadBar);
          //switches to main page after 1 second
          setTimeout(changeSiteButton,1000);
        }
        function changeSiteButton(){
          changeButton.style.display= "block";
        }
      }
    } 
});
