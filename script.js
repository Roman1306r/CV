$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,   // точки включены
        adaptiveHeight: false,  //подстраивание точек и стрелок под каждый слайдер
        slidesToShow: 1,  //сколько слайдеров показано за раз 
        slidesToScroll: 1,  //Количество слайдов которое пролистывается при скроле
        speed: 600, //Скорость пролистывания слайдов
        easing: 'easy',  //Тип анимации при смене слайдов
        infinite: true, //Будет ли слайдер бесконечный
        autoplay: true,  //Будет ли он автоматически листаться
        autoplaySpeed: 3000, //Скорость автоматического листания
        pauseOnFocus: true, //пауза автопроигрывания при нажатии 
        pauseOnHover: true, //пауза автопроигрывания при наведении 
        pauseOnDotsHover: true, //пауза автопроигрывания при наведении на точки 
        swipe: true, //Можно свайпать на телефоне
        touchThreshold: 5, //Какое растояние нужно просвайпить для смены слайда
        touchMove: true, //Нельзя тягать с места на место при false
        waitForAnimate: false, 
        vertical: false, //Вертикальный слайдер
        verticalSwiping: true, //Вертикальный свайп в вертикальном слайдере
    });
    $('.slidertop').slick({
        arrows: false,  //Стрелким включены
        dots: false,   // точки включены
        adaptiveHeight: true,  //подстраивание точек и стрелок под каждый слайдер
        slidesToShow: 1,  //сколько слайдеров показано за раз 
        slidesToScroll: 1,  //Количество слайдов которое пролистывается при скроле
        speed: 1000, //Скорость пролистывания слайдов
        easing: 'easy',  //Тип анимации при смене слайдов
        infinite: true, //Будет ли слайдер бесконечный
        initialSlide: 0, //Стартовыый слайдер
        autoplay: true,  //Будет ли он автоматически листаться
        autoplaySpeed: 4000, //Скорость автоматического листания
        pauseOnFocus: true, //пауза автопроигрывания при нажатии 
        pauseOnHover: true, //пауза автопроигрывания при наведении 
        pauseOnDotsHover: true, //пауза автопроигрывания при наведении на точки 
        draggable: true, //Можно свайпать на компе
        swipe: true, //Можно свайпать на телефоне
        touchThreshold: 5, //Какое растояние нужно просвайпить для смены слайда
        touchMove: true, //Нельзя тягать с места на место при false
        centerMode: false, //Включает центрирование слайда, можно использовать вместе с opacity
        asNavFor: ".sliderbottom",
        responsive: [  //Изменение настроек слайдера при таких то брейкпоинтов
            {
                breakpoint: 768,  //брейкпоинт max-width
                settings: {    //Настройки
                    arrows: true,
                    adaptiveHeight: false,  //Настройка которую поменяли
                }  
            }
        ]
    });
    $('.sliderbottom').slick({
        arrows: true,  //Стрелким включены
        dots: false,   // точки включены
        adaptiveHeight: true,  //подстраивание точек и стрелок под каждый слайдер
        slidesToShow: 3,  //сколько слайдеров показано за раз 
        slidesToScroll: 1,  //Количество слайдов которое пролистывается при скроле
        speed: 1000, //Скорость пролистывания слайдов
        easing: 'easy',  //Тип анимации при смене слайдов
        infinite: true, //Будет ли слайдер бесконечный
        initialSlide: 0, //Стартовыый слайдер
        autoplay: true,  //Будет ли он автоматически листаться
        autoplaySpeed: 4000, //Скорость автоматического листания
        pauseOnFocus: true, //пауза автопроигрывания при нажатии 
        pauseOnHover: true, //пауза автопроигрывания при наведении 
        pauseOnDotsHover: true, //пауза автопроигрывания при наведении на точки 
        draggable: true, //Можно свайпать на компе
        swipe: true, //Можно свайпать на телефоне
        touchThreshold: 5, //Какое растояние нужно просвайпить для смены слайда
        touchMove: true, //Нельзя тягать с места на место при false
        waitForAnimate: false, //Включает быстрое перелистывание при быстром нажатии на стрелки и точки
        centerMode: true, //Включает центрирование слайда, можно использовать вместе с opacity
        variableWidth: false, //размеры слайдов не регулируются, авто-адаптивность, можно использовать с centerMode
        asNavFor: ".slidertop",
        responsive: [  //Изменение настроек слайдера при таких то брейкпоинтов
            {
                breakpoint: 1000,  //брейкпоинт max-width
                settings: {    //Настройки
                    slidesToShow: 2, //Настройка которую поменяли
                }  
            },
            {
                breakpoint:767,  //брейкпоинт max-width
                settings: {    //Настройки
                    slidesToShow: 1, //Настройка которую поменяли
                    variableWidth: true,
                }  
            }
        ],
    });
})