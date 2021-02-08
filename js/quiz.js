window.addEventListener('DOMContentLoaded', () => {

    // Валидация формы

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