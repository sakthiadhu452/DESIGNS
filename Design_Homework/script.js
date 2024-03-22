var changeicons = document.getElementsByClassName("change-navicon");
const navleft = document.querySelector(".nav-left");
const navright = document.querySelector(".nav-right");
const sidebar = document.querySelector(".sidebar");
var flag=0;
for (var i = 0; i < changeicons.length; i++) {
    changeicons[i].addEventListener("click", function() {
        // No need to check for the existence of `this` or `this.getAttribute` in an event listener
        if (this.getAttribute("name") == "close-outline") {
            this.setAttribute("name", "menu-outline");
        } else {
            this.setAttribute("name", "close-outline");
        }
        addContentToSideBar();
        toggleSidebar();
    });
}

function addContentToSideBar() {
    if(flag==1){
        return ;
    }
    flag=1;

    if (getComputedStyle(navleft).display == "none") {
        sidebar.innerHTML += navleft.innerHTML;
    }
    if (getComputedStyle(navright).display == "none") {
        sidebar.innerHTML += navright.innerHTML;
    }
}

function toggleSidebar() {
    document.body.style.overflow = "hidden"; // Disable scrolling when the sidebar is open
    
    if (parseInt(getComputedStyle(sidebar).width) === 0) {
        sidebar.style.width = "100vw";
    } else {
        sidebar.style.width = "0";
        document.body.style.overflow = ""; // Reset to enable scrolling when the sidebar is closed
    }
}
