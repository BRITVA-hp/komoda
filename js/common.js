document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  options = {
    edge:'right'
  }
  var instances = M.Sidenav.init(elems,options);

  // slick

  $('.cert__slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  $('.comments__slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  const countSlide = document.querySelector('.cert .cert__counter-current'),
        countSlideComments = document.querySelector('.comments .cert__counter-current'),
        all = document.querySelector('.cert .cert__counter-all'),
        slides = document.querySelectorAll('.cert__slider .certificates__link'),
        slidesComments = document.querySelectorAll('.comments__slider .comments__card'),
        allComments = document.querySelector('.comments .cert__counter-all');

  all.textContent = slides.length;
  allComments.textContent = slidesComments.length;
  $('.cert__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){ //счётчик слайдов
    countSlide.innerText = currentSlide + 1;
  });
  $('.comments__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){ //счётчик слайдов
    countSlideComments.innerText = currentSlide + 1;
  });


  // Плавный скролл

  $('.nav__company').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#company').offset().top }, 1000);
    e.preventDefault();
  });
  $('.sidenav__company').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#company').offset().top }, 1000);
    e.preventDefault();
  });

  $('.nav__advantages').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#advantages').offset().top }, 1000);
    e.preventDefault();
  });
  $('.sidenav__advantages').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#advantages').offset().top }, 1000);
    e.preventDefault();
  });

  $('.nav__catalog').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#catalog').offset().top }, 1000);
    e.preventDefault();
  });
  $('.sidenav__catalog').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#catalog').offset().top }, 1000);
    e.preventDefault();
  });

  $('.nav__order').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#order').offset().top }, 1000);
    e.preventDefault();
  });
  $('.sidenav__order').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#order').offset().top }, 1000);
    e.preventDefault();
  });

  $('.nav__comments').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#comments').offset().top }, 1000);
    e.preventDefault();
  });
  $('.sidenav__comments').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#comments').offset().top }, 1000);
    e.preventDefault();
  });

  $('.nav__contacts').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1000);
    e.preventDefault();
  });
  $('.sidenav__contacts').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1000);
    e.preventDefault();
  });

  $(document).ready(function(){
    $('.modal').modal();
  });

  //Маска и валидация телефона в модалке
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      modalTel: "required"
    },
    messages: {
      modalTel: "Телефон обязателен"
    }
  });

  //Маска
  $('input[name="modalTel"]').mask('+7 (000) 000-00-00');

  $('.quiz__block--end').validate({
    errorClass: "invalid",
    rules: {
      quizTel: "required"
    },
    messages: {
      quizTel: "Телефон обязателен"
    }
  });

  //Маска
  $('input[name="quizTel"]').mask('+7 (000) 000-00-00');


});