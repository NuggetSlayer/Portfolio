document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("scrollToTop").style.display = "block";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }
}

function toggleNavbar() {
    var navbarItems = document.querySelector('.navbar-items');
    navbarItems.style.display = navbarItems.style.display === 'flex' ? 'none' : 'flex';
}
