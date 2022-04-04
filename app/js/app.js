import { Swiper, Navigation, Autoplay } from 'swiper'
Swiper.use([ Navigation, Autoplay ])

document.addEventListener('DOMContentLoaded', () => {

	// Слайдер Service
	const swiperService = new Swiper('.service__box', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		autoplay: {
			delay: 5000,
		},
		loopedSlides: 1,
		speed: 1500,
		slidesPerView: 3
	})

	// Слайдер Testimonials
	const swiperTestimonials = new Swiper('.testimonials__slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		autoplay: {
			delay: 5000,
		},
		loopedSlides: 1,
		speed: 1500,
		slidesPerView: 2
	})

	// Определение устройства
	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i)
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i)
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i)
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i)
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i)
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows())
		}
	}

	if (isMobile.any()) {
		document.body.classList.add('_touch')
	} else {
		document.body.classList.add('_pc')
	}


	// Прокрутка при клике
	const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
		if (menuLinks.length > 0) {
			menuLinks.forEach(menuLink => {
				menuLink.addEventListener('click', onMenuLinkClick)
			})
			
			function onMenuLinkClick(e) {
				const menuLink = e.target
				if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
					const gotoBlock = document.querySelector(menuLink.dataset.goto)
					const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight
					
					if (iconMenu.classList.contains('_active')) {
						document.body.classList.remove('_lock')
						iconMenu.classList.remove('_active')
						menu.classList.remove('_active')
						btn.classList.remove('_active')
					}
					
					window.scrollTo({
						top: gotoBlockValue,
						behavior: 'smooth'
					})
					e.preventDefault()
				}
			}
		}
		
		// Меню бургер
		const iconMenu = document.querySelector('.menu__icon')
		const menu = document.querySelector('.menu')
		const btn = document.querySelector('.header__btn-wrap')
		if (iconMenu) {
			iconMenu.addEventListener('click', function(e) {
				document.body.classList.toggle('_lock')
				iconMenu.classList.toggle('_active')
				menu.classList.toggle('_active')
				btn.classList.toggle('_active')
			})
		}
		
		
 })
