
//Components: Hero Slides 

const images = document.querySelectorAll('.jewerly-slideshow img');
let currentIndex = 0;

function showImage(index) {
  images[currentIndex].classList.remove('active');
  images[currentIndex].style.opacity = 0;
  images[index].classList.add('active');
  images[index].style.opacity = 1;
  currentIndex = index;
}

images.forEach((image, index) => {
  image.style.opacity = 0;
  image.addEventListener('load', () => {
    if(index === 0) {
      image.classList.add('active');
      image.style.opacity = 1;
    }
  })
})

setInterval(() => {
  let nextIndex = currentIndex + 1;
  if(nextIndex >= images.length) {
    nextIndex = 0;
  }
  showImage(nextIndex)
}, 3000);

//Menu: Accordion - stores
const accordionContainer = document.querySelector('.aContainer');

accordionContainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.aHeader');

  if(accordionHeader) {
    const accordion = accordionHeader.parentElement;
    const accordionContent = accordionHeader.nextElementSibling;
    const accordionInner = accordionContent.children[0];
    let height;

    if(accordion.classList.contains('isOpen')) {
      height = 0;
    } else {
      height = accordionInner.getBoundingClientRect().height;
    }

    accordion.classList.toggle('isOpen');
    accordionContent.style.height = height + 'px';

    console.log(accordionInner);
    console.log(accordionHeader);
    console.log(accordionContent);
    console.log(accordionContent.children[0]);
    console.log(accordionContent.style.height);
    console.log(height);
    console.log(accordionInner.getBoundingClientRect());

  }
})