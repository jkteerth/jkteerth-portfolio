var tablinks = document.getElementsByClassName("tab-links"); 
var tabcontents = document.getElementsByClassName("tab-contents"); 

function opentab(tabname) { 
    for(tablink of tablinks) { 
        tablink.classList.remove("active-link"); 
    } 
    for (tabcontent of tabcontents) { 
        tabcontent.classList.remove("active-tab"); 
    } 
    event.currentTarget.classList.add("active-link"); 
    document.getElementById(tabname).classList.add("active-tab"); 
}

// --------------------JS Logic for Show More and Show Less--------------------//

const showMoreBtn = document.getElementById("showMoreBtn");
const moreContent = document.getElementById("moreContent");
const showLessBtn = document.getElementById("showLessBtn");

showMoreBtn.addEventListener("click" , function() {
    moreContent.style.display = "block";
    showMoreBtn.style.display = "none"; 
    moreContent.style.transform = "scaleY(1)";

});

showLessBtn.addEventListener("click", function() {
    moreContent.style.display = "none";
    showMoreBtn.style.display = "block";
})


// --------------------JS Logic responsiveness--------------------//
const sidemenu = document.getElementById("sidemenu");

function openMenu() {
    sidemenu.style.right = "0";
}

function closeMenu() {
    sidemenu.style.right = "-200px";
}
