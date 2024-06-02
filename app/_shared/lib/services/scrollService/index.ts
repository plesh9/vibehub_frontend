interface ScrollServiceType {
    lock: () => void
    unlock: () => void
}

export const scrollService = {
    lock: () => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        const fixedElements = document.querySelectorAll<HTMLElement>('[data-fixed]')

        fixedElements.forEach((el) => (el.style.paddingRight = `${scrollbarWidth}px`))
        document.body.style.paddingRight = `${scrollbarWidth}px`
        document.body.classList.add('scroll-lock')
    },
    unlock: () => {
        const fixedElements = document.querySelectorAll<HTMLElement>('[data-fixed]')

        fixedElements.forEach((el) => el.style.removeProperty('padding-right'))
        document.body.style.removeProperty('padding-right')
        document.body.classList.remove('scroll-lock')
    }
}
