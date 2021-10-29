var button1=document.getElementById("askButton");
var input = document.getElementById("askInput");
// execute the function after validate the input field
button1.addEventListener("click", function ask() {
  if (!input.value) {
  
     alert("input your request")

    
  }
///if there if value in the input field start the function
else {
 
      let imgNew = ["images/magic8ball_2.png", "images/magic8ball_3.png", "images/magic8ball_3.png", "images/magic8ball_9.png", "images/magic8ball_10.png", "images/magic8ball_11.png", "images/magic8ball_12.png", "images/magic8ball_13 (1).png"];
 
      ///bind event listener with the ask button
      document.getElementById("askButton").addEventListener("click", function imgRandom() {

        //replace the random picked img by the "start img" on HTML

        document.getElementById("start").src = imgNew[Math.floor(Math.random() * imgNew.length)];
      });
      // hide the askButton after it is clicked
      let buttonHide = document.getElementById("askButton");
      buttonHide.addEventListener("click", hideShow, false);
//hide the button after it is clicked 
      function hideShow() {
        document.getElementById("hide-div").style.display = "block";
        this.style.display = "none";

    }
    //reset the page for next cycle
      function reSetButton() {
        document.getElementById("hide-div").reset();
      }
      reSetButton();
    }
  }

  );

    ask();
















