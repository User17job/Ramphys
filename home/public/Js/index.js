
// responsive menu

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('menu-active');
        document.querySelector('.navLInks').style.opacity="100%";
    } else {
        document.body.classList.remove('menu-active');
        document.querySelector('.navLInks').style.opacity="0%";

    }
});
  
// scroll nav changes
let change=5;
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    // alert('You have scrolled 150px or more.');
    document.getElementById('navbar').classList.add('scrolled');
    // document.getElementById('navbar').style.opacity="5%";

    // Add any action you want to trigger here
  }
  else {
    document.getElementById('navbar').classList.remove('scrolled');
    document.getElementById('navbar').style.opacity="100%";
    // Add any action you want to trigger here
    }
});

// stack changes 
const optionOne = document.getElementById('StackGallery');
const optiontwo = document.getElementById('StackAnimation');

const img_cont = document.getElementById('stackImage')
const anim_cont = document.getElementById('animContainer')
// const gallery_cont = document.getElementById('stack_gallery')
const gallery_filter = document.getElementById('stack_gallery_filter')


optionOne.addEventListener('click', showOptionOne)
optiontwo.addEventListener('click', showOptionTwo)
  

  function showOptionTwo() {
  gallery_filter.style.display="none";
  
  anim_cont.style.display="block";
  img_cont.style.display="block";
}; 

function showOptionOne() {
  gallery_filter.style.display="block";

  anim_cont.style.display="none";
  img_cont.style.display="none"; 
};
showOptionOne()

setTimeout(() => {
  showOptionTwo() 
}, 3000);

// Go Up button
const goUp = document.querySelector('.goUpButton').addEventListener('click', goUpp)

function goUpp() { 
  window.scrollTo({ top: 0, behavior: 'smooth' });
} 
 goUpp() 

