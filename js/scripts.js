/* :: MOBILE NAV TOGGLE :: */
$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('active')
  })
});

/* :: TABS & THEIR CONTENTS :: */
function openContent(evnt, tabNumber) {
  var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tab-content");
  for(i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

    tabLinks = document.getElementsByClassName("tablink");
  for(i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(tabNumber).style.display = "block";
  evnt.currentTarget.className += " active";
}

// Make <button> with ID "defaultOpen" visible by default
document.getElementById("defaultOpen").click();
