var flag = false;



// for change of color for each pink red and yellow
 function colorchange(color) {
   document.getElementById("image-preview").style.display = "none";
   document.getElementById("place").style.display = "none";

   var loader = document.getElementById("loader");
   loader.style.display = "block";

   if (color == "blue") {
      var btncolor = document.getElementById("button");
      btncolor.style.backgroundColor = "#00a4d6";

      var body = document.querySelector("*");
      body.style.backgroundColor = "#DDF3F3";

      loader.style.filter =
         "invert(53%) sepia(29%) saturate(6813%) hue-rotate(162deg) brightness(96%) contrast(101%)";

      setTimeout(function () {
         document.getElementById("loader").style.display = "none";
         document.getElementById("place").src = "./Images/Blue_umbrella.png";

         document.getElementById("place").style.display = "block";
         if (flag == true) {
            document.getElementById("image-preview").style.display = "block";
         }
      }, 2000);
   } else if (color == "pink") {
      var btncolor = document.getElementById("button");
      btncolor.style.backgroundColor = "#D82B48";

      var body = document.querySelector("*");
      body.style.backgroundColor = "#FFE3F9";

      loader.style.filter =
         " invert(40%) sepia(56%) saturate(7387%) hue-rotate(333deg) brightness(86%) contrast(96%)";
      setTimeout(function () {
         document.getElementById("loader").style.display = "none";
         document.getElementById("place").src = "./Images/Pink_umbrella.png";

         document.getElementById("place").style.display = "block";
         if (flag == true) {
            document.getElementById("image-preview").style.display = "block";
         }
      }, 2000);
   } else {
      var btncolor = document.getElementById("button");
      btncolor.style.backgroundColor = "#f0ce35";

      var body = document.querySelector("*");
      body.style.backgroundColor = "#FCFADD";

      loader.style.filter =
         "invert(98%) sepia(47%) saturate(4219%) hue-rotate(327deg) brightness(97%) contrast(94%)";
      setTimeout(function () {
         document.getElementById("loader").style.display = "none";
         document.getElementById("place").src = "./Images/Yello_umbrella.png";

         document.getElementById("place").style.display = "block";
         if (flag == true) {
            document.getElementById("image-preview").style.display = "block";
         }
      }, 2000);
   }
}



// for the button click uploadImage to add the logo

 function uploadImage() {
   var input = document.getElementById("image-input");
   var preview = document.getElementById("image-preview");
    

   document.getElementById("svvg").style.display = "none";
   var element = document.querySelector("#filename");

   var loader2 = document.getElementById("loader2");
   loader2.style.display = "block";
   loader2.style.filter='invert(100%) sepia(0%) saturate(0%) hue-rotate(208deg) brightness(110%) contrast(101%)';

   preview.style.display = "none";
   document.getElementById("place").style.display = "none";
   var loader = document.getElementById("loader");
   loader.style.display = "block";

   var reader = new FileReader();
   reader.onload = function () {
      preview.src = reader.result;
   };
   if (input.files && input.files[0]) {
      reader.readAsDataURL(input.files[0]);
      flag = true;
      element.textContent = input.files[0].name;
   }

   setTimeout(function () {
      if (flag == true) {
         loader.style.display = "none";
         loader2.style.display = "none";
         document.getElementById("place").style.display = "block";
         document.getElementById("image-preview").style.display = "block";
      }
   }, 2000);
}






// to change from do2 function to upload input function 
function do2() {
   document.getElementById("image-input").click();
}
