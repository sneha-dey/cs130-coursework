const makeBigger = () => {
   alert('make bigger!');
   document.querySelector("p").style.fontSize = "2em";
};

const makeSmaller = () => {
   alert('make smaller!');
   document.querySelector("p").style.fontSize = "1em";
};

document.querySelector(".a1").onclick = makeBigger;
document.querySelector(".a2").onclick = makeSmaller;

