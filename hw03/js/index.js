/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const showImage = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.style.backgroundImage);
    currentIndex = parseInt(elem.dataset.index);    
    displayImage();
    
        // update .featured_image
    };
   /*    
    const featured = `url("${images[elem.dataset.index]}")`
    console.log(featured)
    document.querySelector('.featured_image').style.backgroundImage = featured; 
    
    document.querySelector('.featured_image').style.backgroundImage = elem.style.backgroundImage;
    
    let currentIndex = 0;
    currentIndex = parseInt(elem.dataset.index);
    console.log("currentIndex:", currentIndex);
    const image = images[currentIndex];
*/


    // your job: set the .featured_image's backgroundImage to the
    // element that was just clicked.

    


/*defines the function*/
const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    style="background-image:url('${image}')"
                    data-index="${idx}"></div>
            </li>`;
    });
  //   const imageElements = document.querySelectorAll('.image');
    /* for (const elem of imageElements) {
        elem.onclick = showImage;
    } */

    
    // then loop through each one and attach an event handler
    // to each element's click event:
 
};

const displayImage = () => {
    const image = images[currentIndex];
    document.querySelector('.featured_image').style.backgroundImage = `url('${image}')`;
};

const showNext = () => {
    currentIndex += 1;
    if (currentIndex >= images.length){
        currentIndex = 0;
    }
    console.log("currentIndex:", currentIndex);
    displayImage();
};

const showPrev = (ev) => {
    currentIndex -= 1;
    if (currentIndex < 0){
        currentIndex = images.length - 1;
    }
    console.log("currentIndex:", currentIndex);
    displayImage();
};


// attach event handler to all of the image tags 
// (after initScreen() has been invoked).
const attachEventHandlers = () => {
    const imageElements = document.querySelectorAll('.image');
    for (const elem of imageElements) {
        elem.onclick = showImage;
    }

document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;

}

/* runs code block */
initScreen();
attachEventHandlers();
/*







for  (const image of images) {
    
    currentIndex += 1;

}
const showNext = (ev) => {
    currentIndex += 1;
    console.log("currentIndex:", currentIndex);
    console.log(`${images[currentIndex]}`);
    document.querySelector('.featured_image').style.backgroundImage = ${images[currentIndex]};

document.querySelector('.next').onclick=showNext



const nextElement = (ev) =>{
    document.querySelector('.featured_image').style.backgroundImage = nextElementSibling;
    console.log(nextElementSibling)
}
document.querySelector('.next').onclick = nextElement


const nextElement = (ev) =>{
document.querySelector('.featured_image').style.backgroundImage = ev.currentTarget.nextElementSibling.style.backgroundImage;
}
/*

let next = elem('.next');
console.log (next);
console.log (elem.nextElementSibling);
document.querySelector('.featured_image').style.backgroundImage = elem.nextElementSibling */