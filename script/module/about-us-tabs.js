const advantageBtns = document.querySelectorAll('.advantage__btn');
const advantageItemsContent = document.querySelectorAll('.advantage__item-content');

advantageBtns.forEach((advantageBtn, i) => {
    advantageBtn.addEventListener('click', () => {
        advantageItemsContent.forEach((advantageItemContent, j) => {
            if (i === j) {
                advantageBtns[j].classList.add('advantage__btn_active');
                advantageItemsContent[j].classList.add('advantage__item-content_active');
            } else {
                advantageBtns[j].classList.remove('advantage__btn_active');
                advantageItemsContent[j].classList.remove('advantage__item-content_active');
            }
        })
    })
})