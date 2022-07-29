const notice = document.querySelector('.notice');
let height = notice.offsetHeight;
notice.style.height = `${height}px`;

const closeNotice = () => {
    height -= 5;
    notice.style.height = `${height}px`;

    if (height > 0) {
        requestAnimationFrame(closeNotice);
    } else {
        notice.style.display = 'none';
    }
}

notice.addEventListener('click', closeNotice);

