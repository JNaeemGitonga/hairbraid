
export const stickyNav = (navbar, sticky) => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

export const scrollTo = elmt => {
    const pos = document.getElementsByClassName(elmt)[0].offsetTop;
    window.scrollTo(0, pos - 75);
};

export const scrollTop = yOff => {
    function scroll(n){
        if ( n > 5 ) {
            setTimeout(function(){
                const newLocation = n / 1.03;
                window.scrollTo(0, newLocation);
                scroll(newLocation);
            }, 0);
        }
    }
    
    scroll(yOff);
};