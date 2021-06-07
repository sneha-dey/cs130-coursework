const scrollElements = document.querySelectorAll(".scroll-element");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = (ev) => {
    console.log('Scroll just happened', ev);
    //checks each element with the "scroll-element" class
    scrollElements.forEach((el) => {
        //if the element is visisble, we're going to run the animation by adding a class
        if (elementInView(el, 1.25)) {
            displayScrollElement(el); /*adds a class*/
        } 
        // otherwise, we're going to hide it again
        else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}
// how we attach a function to a scroll change
window.addEventListener("scroll", handleScrollAnimation);


jQuery(document).on('scroll', function() {
  jQuery('h1').css("top", Math.max(100 - 0.2*window.scrollY, 1) + "vw");
})