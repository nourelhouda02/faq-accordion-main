document.addEventListener('DOMContentLoaded', () => {
   
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
           
            header.classList.toggle('active');
            const accordionContent = header.nextElementSibling;
            const img = header.querySelector('img');
            if (header.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                img.src = './assets/images/icon-minus.svg';
            } else {
                accordionContent.style.maxHeight = null;
                img.src = './assets/images/icon-plus.svg';
            }
        });
    });
});