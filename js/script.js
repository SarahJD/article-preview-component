let shareIcon = document.querySelector('.share-icon');

function toggleShare() {
    let shareList = document.querySelector('.share-list__container');
    let testimonialBox = document.querySelector('.testimonial__box');
    shareList.classList.toggle('show');
}

shareIcon.addEventListener ('click', toggleShare);
