/* Lägger till/tar bort "responsive" klassen när användaren trycker på tre streck knappen, gör att menyn går att öppna och stänga i mobil format */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }