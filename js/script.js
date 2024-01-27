$(document).ready(function () {
	$(".lazy").lazyload();
	$(".vi-banner-img-mob").lazyload();


	// До начала работы скриптов  клас vi-slider--modificator-apload роставляет елементы внтури будущего слайдера
	// так же как это в итоге сделает скрипт.
	// Результат- в слайдере не скачут елементы(картинки) во время загрузки.
	
	$('.vi-slider').removeClass('vi-slider--modificator-apload');


	// Слайдер на главной
	$(".vi-slider-box").slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		autoplay: true,
	});



	// До начала работы скриптов  клас vi-slider--modificator-apload роставляет елементы внтури будущего слайдера
	// так же как это в итоге сделает скрипт.
	// Результат- в слайдере не скачут елементы(картинки) во время загрузки.
	$('.vi-goods').removeClass('vi-goods--modificator-apload');


	// Нижний слайдер на главной-использован дважы
	// Также использован на item-внизу страницы, также использован дважы
	$('.vi-goods-slider').slick({
		arrows: true,
		infinite: true,
		dots: true,
		variableWidth: true,
		slidesToShow: 4,
		autoplay: false,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 994,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1401,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			}
		]
	});

	// До начала работы скриптов  клас vi-slider--modificator-apload роставляет елементы внтури будущего слайдера
	// так же как это в итоге сделает скрипт.
	// Результат- в слайдере не скачут елементы(картинки) во время загрузки.
	$('.vi-product-details__slider').removeClass('vi-product-details__slider--modify ');

	// Основной Слайдер страници карточки  товара item 
	$(".vi-product-details__slider").slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		asNavFor: '.vi-product-details__slider-service',
		autoplay: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					dots:false,
				}
			},
			{
				breakpoint: 994,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					dots:false,
				}
			}
			
		]
	});
	// Вспомагательный слайдер для Основного 
	$(".vi-product-details__slider-service").slick({
		arrows: false,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: false,
		vertical: true,
    	verticalSwiping: true,
		asNavFor: '.vi-product-details__slider',
		// centerMode: true,
    	focusOnSelect: true,
		adaptiveHeight:true,
		infinite:false,
		easing: 'linear',
		responsive: [
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					dots:false,
				}
			},
			{
				breakpoint: 994,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					dots:false,
				}
			}
			
		]
	});
	// Смена фона стрелок навигации при достижении конца или начала ленты слайдов
	$(".vi-product-details__slider").on('afterChange', function(event, slick, currentSlide) {
		if (slick.$slides.length == currentSlide + slick.options.slidesToScroll) {
			// Докрутили до последнего слайда

			// ЧТО и кому присвоить когда докрутили до последнего слайда
			$('.vi-product-details__arrow-down').addClass('vi-product-details__arrow-down--noactive');
	
		} else if (currentSlide === 0) {
			// Если текущий слайд - первый, ЧТО и кому присвоить
			$('.vi-product-details__arrow-up').addClass('vi-product-details__arrow-up--noactive');
		} else {
			  // Если условие не выполнено (не первый и не последний слайд), удаляем клас
			  $('.vi-product-details__arrow-up, .vi-product-details__arrow-down').removeClass('vi-product-details__arrow-up--noactive vi-product-details__arrow-down--noactive');
		}
	});


	// Назначение стрелками слайдера
	$('.vi-product-details__arrow-down').click(function(){
		$('.vi-product-details__slider').slick('slickNext');
	  });
  
	 
	  $('.vi-product-details__arrow-up').click(function(){
		$('.vi-product-details__slider').slick('slickPrev');
	  });

	

	// //   Вызов галереи Fancybox с отсеиванием клонированых слайдов(картинок)
	// Fancybox.bind(".slick-slide:not(.slick-cloned) [data-fancybox='gallery']", {
		
	//   });

	// //   Вызов галереи Fancybox с отсеиванием клонированых слайдов(картинок)
	// Fancybox.bind(".slick-slide:not(.slick-cloned) [data-fancybox='gallery']", {
	// 	Thumbs : {
	// 		type: "classic"
	// 	  }
	//   });


// МОДАЛКА !!!
	  Fancybox.bind('[data-fancybox]', {
		
        
		 
      });    
	
	  Fancybox.bind('[data-fancybox="gallery"]', {
		idle:false,
		Hash: true,
		Thumbs: true,
	
		compact: false,
	
		contentClick: "toggleCover",
		wheel : "slide",
	
		Toolbar: {
			items: {
				btnCloseCustom: {
				  tpl: `<button data-fancybox-close class="gallery__close-btn  f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20" stroke="orange" fill="orange"/></svg></button>`,
				},
			  },
		  display: {
			left: [],
			middle: ["infobar"],
			right: ["btnCloseCustom"],
		  },
		},
	
		Images: {
		  Panzoom: {
			panMode: "mousemove",
			mouseMoveFactor: 1.1,
			mouseMoveFriction: 0.12
		  },
		},
		// tpl: {
		// 	closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 17.8854L23.5427 25.428C23.7941 25.6709 24.1309 25.8053 24.4805 25.8023C24.8301 25.7992 25.1645 25.659 25.4118 25.4118C25.659 25.1646 25.7992 24.8302 25.8022 24.4806C25.8053 24.131 25.6709 23.7942 25.428 23.5427L17.8853 16L25.428 8.45737C25.6709 8.2059 25.8053 7.8691 25.8022 7.5195C25.7992 7.16991 25.659 6.83549 25.4118 6.58828C25.1645 6.34107 24.8301 6.20084 24.4805 6.1978C24.1309 6.19477 23.7941 6.32916 23.5427 6.57204L16 14.1147L8.45733 6.57204C8.20473 6.33516 7.86988 6.20586 7.52364 6.21148C7.1774 6.2171 6.84692 6.35721 6.60215 6.60216C6.35737 6.84711 6.21749 7.17768 6.21212 7.52393C6.20674 7.87018 6.33628 8.20494 6.57333 8.45737L14.1147 16L6.572 23.5427C6.44465 23.6657 6.34308 23.8128 6.2732 23.9755C6.20332 24.1382 6.16654 24.3131 6.165 24.4902C6.16346 24.6672 6.1972 24.8428 6.26424 25.0066C6.33128 25.1705 6.43028 25.3194 6.55547 25.4446C6.68066 25.5698 6.82953 25.6688 6.99339 25.7358C7.15726 25.8028 7.33283 25.8366 7.50987 25.835C7.68691 25.8335 7.86187 25.7967 8.02454 25.7268C8.18721 25.657 8.33434 25.5554 8.45733 25.428L16 17.8854Z" fill="#F2672E"/></svg></button>',
		// 	// closeButton:
		// 	//   '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="mingcute:close-line" clip-path="url(#clip0_772_7)"><g id="Group"><path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M16 17.8854L23.5427 25.428C23.7941 25.6709 24.1309 25.8053 24.4805 25.8023C24.8301 25.7992 25.1645 25.659 25.4118 25.4118C25.659 25.1646 25.7992 24.8302 25.8022 24.4806C25.8053 24.131 25.6709 23.7942 25.428 23.5427L17.8853 16L25.428 8.45737C25.6709 8.2059 25.8053 7.8691 25.8022 7.5195C25.7992 7.16991 25.659 6.83549 25.4118 6.58828C25.1645 6.34107 24.8301 6.20084 24.4805 6.1978C24.1309 6.19477 23.7941 6.32916 23.5427 6.57204L16 14.1147L8.45733 6.57204C8.20473 6.33516 7.86988 6.20586 7.52364 6.21148C7.1774 6.2171 6.84692 6.35721 6.60215 6.60216C6.35737 6.84711 6.21749 7.17768 6.21212 7.52393C6.20674 7.87018 6.33628 8.20494 6.57333 8.45737L14.1147 16L6.572 23.5427C6.44465 23.6657 6.34308 23.8128 6.2732 23.9755C6.20332 24.1382 6.16654 24.3131 6.165 24.4902C6.16346 24.6672 6.1972 24.8428 6.26424 25.0066C6.33128 25.1705 6.43028 25.3194 6.55547 25.4446C6.68066 25.5698 6.82953 25.6688 6.99339 25.7358C7.15726 25.8028 7.33283 25.8366 7.50987 25.835C7.68691 25.8335 7.86187 25.7967 8.02454 25.7268C8.18721 25.657 8.33434 25.5554 8.45733 25.428L16 17.8854Z" fill="#F2672E"/></g></g><defs><clipPath id="clip0_772_7"><rect width="32" height="32" fill="white"/></clipPath></defs></svg></button>',
		// 	main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>',
		//   },
		// tpl: {
		// 	closeButton:
		// 	  '<button data-fancybox-close class="f-button is-close-btn" title="Закрыть">' +
		// 	  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"></path></svg>' +
		// 	  "</button>",
		//   },
		Thumbs : {
			type: "classic"
		  }
		 
	  }); 
	   
		 //  Клик по елементу  vi-goods-card__gift-choose
		 $('.vi-goods-card__gift-choose').on('click', function() {
			// Убить клас vi-goods-card__gift-choose--picked со всех
			$('.vi-goods-card__gift-choose').removeClass('vi-goods-card__gift-choose--picked');
			
			// Добавить клас vi-goods-card__gift-choose--picked текущему елементу
			$(this).addClass('vi-goods-card__gift-choose--picked');
		});

	$(".vi-menu__item").click(function (e) {
		var subMenu = $(this).find(".vi-submenu");
		var hasClass = subMenu.hasClass("active");
		$(".vi-submenu").removeClass("active");
		$(".vi-menu__item").removeClass("active");
		subMenu.addClass("active");
		$(this).addClass("active");

		if (!$("body").hasClass("vi-mobile-open")) {
			$("body").addClass("vi-mobile-open");
		}

		if (!hasClass) {
			$("body").addClass("active");
		}

		e.stopPropagation();
	});

	$(document).on("click", function () {
		if (window.matchMedia("(min-width: 994px)").matches) {
			$(".vi-submenu").removeClass("active");
			$(".vi-menu__item").removeClass("active");
			$("body").removeClass("vi-mobile-open");
		}
	});
	$(".vi-gamburger__active").click(function () {
		$("body").removeClass("vi-mobile-open active");
		$(".vi-menu__item, .vi-submenu").removeClass("active");
	});

	$(".vi-title-submenu, .vi-gamburger").click(function () { });

	$(".vi-title-submenu").click(function () {
		var viSubmenu = $(".vi-submenu");

		if (viSubmenu.hasClass("active")) {
			viSubmenu.addClass("non-active");
			setTimeout(function () {
				viSubmenu.removeClass("active non-active");
			}, 500);
		}
	});

	$(".vi-buttons__item").on("click", function () {
		$(".vi-buttons__item").removeClass("vi-buttons__item--active");

		$(this).addClass("vi-buttons__item--active");
	});

	var scrollPosition = 0;
	var isMobileClassesActivated = false;

	function saveScrollPosition() {
		scrollPosition = window.scrollY;
	}

	function restoreScrollPosition() {
		window.scrollTo(0, scrollPosition);
	}

	$(".vi-nav-button__item--katalog, .vi-nav-button__item--gamburger").click(function () {
		if (!isMobileClassesActivated) {
			saveScrollPosition();
		}
		$("body").addClass("vi-mobile-open");
		isMobileClassesActivated = true;
	});

	$(".vi-gamburger__static").click(function () {
		if (!isMobileClassesActivated) {
			saveScrollPosition();
		}
		$("body").addClass("vi-mobile-inform");
		isMobileClassesActivated = true;
	});

	$(".vi-gamburger__active").click(function () {
		if (isMobileClassesActivated) {
			$("body").removeClass("vi-mobile-open");
			$("body").removeClass("vi-mobile-inform");
			restoreScrollPosition();
			isMobileClassesActivated = false;
		}
	});

	$('.vi-nav-button__item--gamburger').click(function () {

		$('#search').focus();
	});

	$(".vi-close-message").click(
		function () {
			$(".vi-head-container__item--mobile-mesagge").addClass("vi-hide")
		}
	)



		// Помена текста при кликах в гамбургере при переходах по подменю.
		// Название выбраной категории замещает надпись каталог с появлением стрелки для обратного клика

	var initialSpanText = $(".vi-title-submenu span").text();

	$(".vi-menu__item").click(function () {
		var spanText = $(this).find("span:first").text();
		var viTitleSubmenu = $(".vi-title-submenu");
		viTitleSubmenu.find("span").text(spanText).end().addClass("active");
	});

	$(".vi-title-submenu").click(function () {
		$(this).removeClass("active");

		$(this).find("span").text(initialSpanText);
		$("body").removeClass("active");
		$(".vi-menu__item").removeClass("active");
	});

	$(".vi-gamburger").click(function () {
		$(".vi-title-submenu")
			.removeClass("active")
			.find("span")
			.text(initialSpanText);
	});





	// При начале ввода в строку поиск появляется кнопка сброса
	$("#search").on("input", function () {
		if ($(this).val().trim() !== "") {
			$(".lupa").hide();
			$(".close-search").show();
		} else {
			$(".lupa").show();
			$(".close-search").hide();
		}
	});
	// Клик  по крестику при вводе в поиске сбрасивает до начального состояния, 
	$(".close-search").on("click", function () {
		$("#search").val("");
		$(this).hide();
		$(".lupa").show();
		$("#search").attr("placeholder", "Поиск по каталогу");
	});



	
// Подплывающий хедер в мобильной версии сайта- при скролле вверх появляется(приплывает хедер)
		const onScrollHeader = () => {
			const header = $('.vi-header');
			const body = $('body');


			let prevScroll = 0;
			let currentScroll;
			document.addEventListener('scroll', () => {

				if ($("body").hasClass("vi-mobile-inform")) {
					return false;
				}

				if (body.hasClass('vi-mobile-open')) {
					if (header.hasClass('vi-header_hidden')) {
						header.removeClass('vi-header_hidden');
					}
					return;
				}

				currentScroll = $(window).scrollTop();

				const headerHidden = () => header.hasClass('vi-header_hidden');

				if (currentScroll > prevScroll) {
					if (!headerHidden()) {
						header.addClass('vi-header_hidden');
					}

				} else {
					if (headerHidden()) {
						header.removeClass('vi-header_hidden');
					}

				}


				prevScroll = currentScroll;

			});


		}

		onScrollHeader();

	
		// Остановка перехода по ссылке в меню
	$(".vi-menu__item .vi-link-disabled").on("click", function (e) {
		e.preventDefault();
		var parentElement = $(this).parent(".vi-menu__item");
	});


	// Клик в ленте брендов, добавляет клас который меняет задний фон выбраных брэндов на главной
	$(".vi-brand__name").click(function () {
		$(this).toggleClass("vi-brand__name--active");
	});



	// Клик в пагинации добавляет текущему елементу клас который меняет задний фон
	$(".vi-pagination__element").click(function () {
	
		$(".vi-pagination__element").removeClass("vi-pagination__element--active");

		
		$(this).addClass("vi-pagination__element--active");
	});



	// Добавление товара в избраное при клике по сердцу +  примитивный счетчик добавления
	$(".vi-wish").on("click", function () {
		var $wish = $(this);

		$wish.toggleClass("vi-wish--active");

		var $icons = $(".icon.animated");
		$icons.each(function () {
			var $icon = $(this);
			var currentCount = parseInt($icon.attr("data-count")) || 0;

			if ($wish.hasClass("vi-wish--active")) {
				$icon.attr("data-count", currentCount + 1);
				$icon.addClass("active");
			} else {
				$icon.attr("data-count", Math.max(0, currentCount - 1));
				if (currentCount - 1 === 0) {
					$icon.removeClass("active");
				}
			}
		});
	});

	// ИНИЦИАЛИЗАЦИЯ библиотеки inputmask маски номеров телефонов
	$('#phone').inputmask();
	


	$('.vi-product-title__add-to-wishes').on('click', function () {
		var $element = $(this);
	
		if (!$element.hasClass('vi-product-title__add-to-wishes--active')) {
			
			$element.addClass('vi-product-title__add-to-wishes--added');
	
			
			setTimeout(function () {
				$('.vi-product-title__add-to-wishes').removeClass('vi-product-title__add-to-wishes--added').addClass('vi-product-title__add-to-wishes--active');
			}, 2000);
	
			
			var $icons = $('.icon.animated');
			$icons.each(function () {
				var $icon = $(this);
				var currentCount = parseInt($icon.attr("data-count")) || 0;
				$icon.attr("data-count", currentCount + 1);
				$icon.addClass("active");
			});
	
		} else {
			
			$('.vi-product-title__add-to-wishes').removeClass('vi-product-title__add-to-wishes--active');
	
			
			var $icons = $('.icon.animated');
			$icons.each(function () {
				var $icon = $(this);
				var currentCount = parseInt($icon.attr("data-count")) || 0;
				$icon.attr("data-count", Math.max(0, currentCount - 1));
				if (currentCount - 1 === 0) {
					$icon.removeClass("active");
				}
			});
		}
	});

	$('.vi-product-title__to-cart').on('click', function () {
		var $element = $(this);
	
		if (!$element.hasClass('vi-product-title__to-cart--active')) {
			
			$element.addClass('vi-product-title__to-cart--added');
	
			
			setTimeout(function () {
				$('.vi-product-title__to-cart').removeClass('vi-product-title__to-cart--added').addClass('vi-product-title__to-cart--active');
			}, 2000);
	
			
			var $icons = $('.icon2.animated');
			$icons.each(function () {
				var $icon = $(this);
				var currentCount = parseInt($icon.attr("data-count")) || 0;
				$icon.attr("data-count", currentCount + 1);
				$icon.addClass("active");
			});
	
		} else {
			
			$('.vi-product-title__to-cart').removeClass('vi-product-title__to-cart--active');
	
			
			var $icons = $('.icon2.animated');
			$icons.each(function () {
				var $icon = $(this);
				var currentCount = parseInt($icon.attr("data-count")) || 0;
				$icon.attr("data-count", Math.max(0, currentCount - 1));
				if (currentCount - 1 === 0) {
					$icon.removeClass("active");
				}
			});
		}
	});


	

	
	
	// Обработка вывода сообщения доставки, при выборе типа доставки-выводиться свое сообщение!
	$('.vi-delivery__item').click(function(){
		// получить id текущего елемента
		var currentId = $(this).attr('id');
		
		// Снять клас vi-delivery__item--active со всех елементов
		$('.vi-delivery__item').removeClass('vi-delivery__item--active');
		// Добавить vi-delivery__item--active по которому кликнули
		$(this).addClass('vi-delivery__item--active');
		
		// Снять клас vi-delivery-message__item--active со всех елементов
		$('.vi-delivery-message__item').removeClass('vi-delivery-message__item--active');
		
		// Добавить клас vi-delivery-message__item--active к елементу с соответсующим id
		$('#' + currentId + '.vi-delivery-message__item').addClass('vi-delivery-message__item--active');
	});
// Обработка вывода сообщения оплаты, при выборе типа оплаты -выводиться свое сообщение!
	$('.vi-checkbox-container').click(function(){
		// получить id текущего елемента-поиск производиться у дочерних елементах
		var currentId = $(this).children('input').attr('id');
		
		// Снять vi-delivery__item--active со всех елементов
		$('.vi-checkbox-container').removeClass('vi-checkbox-container--active');
		// Добавить клас vi-checkbox-container--active к текущему елементу
		$(this).addClass('vi-checkbox-container--active');
		
		// Снять клас vi-delivery-message__item--active со всех елементов
		$('.vi-payment-message__item').removeClass('vi-payment-message__item--active');
		
		// Добавить клас vi-delivery-message__item--active к елементу с соответсующим id
		$('#' + currentId + '.vi-payment-message__item').addClass('vi-payment-message__item--active');
	});







// ЧАСТИЧНО ДУБЛИРУЕТ ФУНКЦИЮ СКОПИРОВАННУЮ С ГУСЯ- ТАК КАК ПОСЛЕДНЯЯ НЕ ПОЛНОСТЮ РАБОТАЕТ В ДАННОМ ВАРИАНТЕ!
// ПОПРАВИВ ФУНКЦИЮ С ГУСЯ-ЭТОТ КОД МОЖНА УДАЛИТЬ

					// НАЧАЛО!




	$(document).ready(function () {
      
        function addClasses(element) {
            element.find('.vi-tools__filter-button-nick').toggleClass('--active');
            element.find('.bx_filter_block').toggleClass('--active');
        }

        
        function removeClasses() {
            $('.vi-tools__filter-button-nick').removeClass('--active');
            $('.bx_filter_block').removeClass('--active');
        }

       
        $('.vi-tools__filter-button-nick').on('click', function () {
            var parentElement = $(this).closest('.vi-tools__filter-button');
            addClasses(parentElement);
        });

        
        $(window).resize(function () {
            if ($(window).width() > 994) {
                removeClasses();
            }
        });
	});



	$(".vi-tools__filter-button-title, .vi-tools__title-name").click(function () {
		var isActive = $(this).closest(".vi-tools__filter-button .vi-tools__sort").hasClass('--active');

		$(".vi-tools__filter-button, .vi-tools__sort").removeClass('--active');

		if (!isActive) {
			$(this).closest(".vi-tools__filter-button, .vi-tools__sort").addClass('--active');
		}
	});

	$('.vi-tools__main-title').on('click', function() {
		
		if ($(window).width() < 994) {
		
		  $('.vi-tools__container').toggleClass('--active');
		}
	  });
  
	
	  $(window).on('resize', function() {
	
		if ($(window).width() >= 994) {
		 
		  $('.vi-tools__container').removeClass('--active');
		}
	  });




	  				// КОНЕЦ!
	  // ЧАСТИЧНО ДУБЛИРУЕТ ФУНКЦИЮ СКОПИРОВАННУЮ С ГУСЯ- ТАК КАК ПОСЛЕДНЯЯ НЕ ПОЛНОСТЮ РАБОТАЕТ!
// ПОПРАВИВ ФУНКЦИЮ С ГУСЯ-ЭТОТ КОД МОЖНА УДАЛИТЬ

	





//   ФУНКЦИЯ С ГУСЯ
		// СкопипизЖЕнО с ГУСЯ!!!
		 let __this = this;
    let genobj = $(".vi-tools__filter");

	

    // Ховер на кнопку в фильтре при наведении на странице каталога c чекбоксами
    $(".vi-tools__filter-button-title").on("click", function (e) {

        let parrent = $(this).parents(".vi-tools__filter-button");
        // Развернута ли область
        let isState = parrent.hasClass('--active');
        // выбраны ли пункты
        let isSelected = parrent.hasClass('--selected');
        let isClear = false;
        // если элемент свойство выбрано
        if(isSelected){
            // если это кнопка снятия всех параметров
            if( $(e.target).hasClass("vi-tools__filter-button-icon") ){
                // выполняем снятие всех галок
                isClear = true;
                if( window.VILKA.smartFilter!=undefined ){
                    window.VILKA.smartFilter.DeleteParamEvent(parrent)
                }
            }
        }
        // если это не очистка
        if(!isClear){
            if (isState) {
                window.VILKA.removeClasses(parrent, '--active');
            } else {
                window.VILKA.removeClasses($(".vi-tools__filter-button,.vi-tools__sort"), '--active');
                window.VILKA.addClasses(parrent, '--active');
            }
        }

    })
    // Закрытие выпадающего фильтра с чекбоксами
    $(".vi-tools__filter-button-popup .vi-tools__filter-button-close",genobj).on("click", function () {
        window.VILKA.removeClasses($(".vi-tools__filter-button.--active"), '--active')
    })
    $(".vi-tools__filter-title",genobj).on("click", function () {
        __this.openMobileFilter();
    });
    $(".vi-tools__filter-popup-mobile-close,.vi-tools__filter-add.vi-btn",genobj).on("click", function () {
        __this.closeMobileFilter();
    });

    $(".vi-tools__filter-clear.vi-btn",genobj).on("click", function () {
        if( window.VILKA.smartFilter!=undefined ){
            window.VILKA.smartFilter.DeleteAllParamEvent();
        }
    });


    // раскрыть все
    $(document).on("click",".vi-tools__filter-button-more",function (){
        let parrent = $(this).parents(".vi-tools__filter-button-popup");
        $(".element-hide",parrent).addClass("element-show");
        $(this).css("display","none")
        $(".vi-tools__filter-button-hide",parrent).css("display","block")
    })
    $(document).on("click",".vi-tools__filter-button-hide",function (){
        let parrent = $(this).parents(".vi-tools__filter-button-popup");
        $(".element-hide.element-show",parrent).removeClass("element-show");
        $(this).css("display","none")
        $(".vi-tools__filter-button-more",parrent).css("display","block");
    })

    /// body --body-filter-open
    // при клике открываем попап фильтра body --body-filter-open, .vi-tools__filter bx_filter.--open

    // Открыть фильтр
    this.openMobileFilter = function (){
        $("body").addClass("--body-filter-open");
        genobj.addClass("--open");
    }
    // Закрыть фильтр
    this.closeMobileFilter = function (){
        $("body").removeClass("--body-filter-open");
        genobj.removeClass("--open");
        $('html, body').animate({scrollTop: 0}, 600);
    }

    // сбор выделенных чекетов
    this.SelectFilter = function (){
        let __this = this;
        let parrents = $(".vi-tools__filter-button");
        parrents.each(function(key,parrent) {
            let active = {};
            if( parrent.getAttribute("data-filter-type")=="A" ) {
                $("input",parrent).each(function(key,item) {
                    if( parseInt($(this).val())>=0 ){
                        active = $(this);
                    }
                });
            }else{
                active = $(".active", parrent);
            }
            // закрыить
            if( active.length>0 ){
                __this.SelectFilterView(active,parrent);
            }else{ // убрать выделение
                __this.SelectFilterClear(parrent);
            }
        });

    }
    // показать что выделили
    this.SelectFilterView = function (element,parrent){
        let __this = this;
        let text = ": ";
        let $mass = [];
        // если это полунок
        let item = {};
        if( parrent.getAttribute("data-filter-type")=="A" ){
            $("input",parrent).each(function(key,item) {
                items = $(this);
                if( items.val()!="" ){
                    $mass[key] = items.val();
                }
            });
            text+=$mass.join(" - ");
        }else{// если все остальныйе
            element.each(function(key,item) {
                $mass[key] = $(".bx-filter-param-text",this).html();
            });
            text+=$mass.join(",");
        }

        $(parrent).addClass("--selected");
        $(".vi-tools__filter-button-check",parrent).html(text);
    }
    // скрываем выделение
    this.SelectFilterClear = function (parrent){
        $(parrent).removeClass("--selected");
        $(".vi-tools__filter-button-check",parrent).html("");
    }

});

