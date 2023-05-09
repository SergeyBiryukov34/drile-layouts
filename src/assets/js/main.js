window.addEventListener('load', () => {
    const $body = document.querySelector('body')
    const $burger = document.querySelector('.header-actions__burger')
    const $nav = document.querySelector('.header-nav')

    $body.classList.remove('loader')

    $burger.addEventListener('click', (e) => {
        e.preventDefault()

        $nav.classList.toggle('header-nav_open')
        $body.classList.toggle('overlay')
    })
})
