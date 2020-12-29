let shareIcon = document.querySelector('.share-icon');

function toggleShare() {
    let shareList = document.querySelector('.share-list__container');
    let testimonialBox = document.querySelector('.testimonial__box');
    shareList.classList.toggle('active');
    testimonialBox.classList.toggle('inactive')
}

shareIcon.addEventListener ('click', toggleShare);


// media query event handler
if (matchMedia) {
    const mq = window.matchMedia("(min-width: 475px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
    }
    
    // media query change
    function WidthChange(mq) {
    if (mq.matches) {
        let testimonialBox = document.querySelector('.testimonial__box');
        testimonialBox.classList.toggle('active')
    } else {

    }
    
    }