const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.tool__ratings-counter'),
    lines = document.querySelectorAll('.tool__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
})

$('#feed-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
    },
    messages: {
        name: {
            required: "Пожалуйста, введите свое имя",
            minlength: jQuery.validator.format("Введите {0} символа!")
          },
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        },
        checkbox: {
            required: "Пожалуйста, ознакомьтесь и поставьте галочку"
        }
    }
});

$(document).ready(function(){
    $('#feed-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#feed-form').trigger('reset');
        });
        return false;
    });
});



