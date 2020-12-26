function toggleShare() {
    let shareIcon = document.querySelector('.share-icon');
    let shareList = document.querySelector('.share-list__container');
    let testimonialBox = document.querySelector('.testimonial__box');
    console.log ('here: ' + shareList.style.display);
    console.log (testimonialBox.style.gap);
    if (shareList.style.display === "none") {
        testimonialBox.classList.toggle('inactive');
        shareList.classList.toggle('active');
    } else {
        testimonialBox.classList.toggle('active');
        shareList.classList.toggle('inactive');
    }
  }
  
