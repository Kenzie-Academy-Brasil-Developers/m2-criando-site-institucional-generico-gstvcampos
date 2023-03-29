/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function handleModal() {
    const buttons = document.querySelectorAll('.button__modal')
    const modal = document.getElementById('modal__container')

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            modal.showModal()

            closeModal()
        });
    });
}

function closeModal() {
    const button = document.querySelector('#close__modal')
    const modal = document.getElementById('modal__container')

    button.addEventListener('click', () => {
        modal.close()
    })
}


function showText() {
    const buttonsMore = document.querySelectorAll('.more')
    const buttonsLess = document.querySelectorAll('.less')
    const info = document.querySelectorAll('.info')

    for (let i = 0; i < buttonsMore.length; i++) {

        buttonsMore[i].addEventListener('click', () => {
            info[i].classList.toggle('hide')
            buttonsMore[i].classList.toggle('hide')
            buttonsLess[i].classList.toggle('hide')
        })

        buttonsLess[i].addEventListener('click', () => {
            info[i].classList.toggle('hide')
            buttonsMore[i].classList.toggle('hide')
            buttonsLess[i].classList.toggle('hide')
        })
    }
}

function scrolSection() {
    const button = document.querySelector('.scroll-to-section')

    const section = document.querySelector('.section2__container')

    button.addEventListener('click', () => {
        const sectionTop = section.offsetTop

        window.scrollTo({
            top: sectionTop,
            
            behavior: 'smooth'
        })
    })
}


scrolSection()
handleModal()
showText()