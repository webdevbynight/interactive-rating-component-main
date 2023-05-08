'use strict';

// Target modern browsers
if ('addEventListener' in document && 'querySelector' in document)
{
    document.addEventListener('DOMContentLoaded', () =>
    {
        const card = document.querySelector('.card'),
            form = card.querySelector('form');
        
        // Thank the user when the form is submitted
        form.addEventListener('submit', e =>
        {
            e.preventDefault();
            const checkedRadio = form.querySelector('input[type="radio"]:checked'),
                rate = checkedRadio ? checkedRadio.value : 0,
                title = card.querySelector('.title'),
                p = card.querySelector('p');
            card.classList.add('rate-submitted');
            title.innerHTML = `<span>You selected ${rate} out of 5</span><span>Thank you!</span>`;
            p.innerHTML = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
            form.remove();
        })
    });
}