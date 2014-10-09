head.ready(function() {

    $('.b1 form').validate();
    $('.b2 form').validate();
    $('.other-item.i1 form').validate();
    $('.other-item.i2 form').validate();
    $('.other-item.i3 form').validate();

    $(window).scroll(function () {
        if ( $(this).scrollTop() > 200 && !$('.scrollMenu').hasClass('open') ) {
            $('.top-b-scroll').addClass('open');
            $('.top-b-scroll').slideDown();
        } else if ( $(this).scrollTop() <= 200 ) {
            $('.top-b-scroll').removeClass('open');
            $('.top-b-scroll').slideUp();
        }
    });


    $('.top-menu li a').on('click',function (e) {
        e.preventDefault();

        $('.top-menu li').removeClass('is-active');
        $(this).parent('li').addClass('is-active');

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 60
        }, 500, 'swing', function () {
            // window.location.hash = target;
        });
    });


    $('.fancybox').fancybox({
        padding: 0,
        helpers: {
            overlay: {
                locked: false,
                css:{'background' : 'rgba(24, 15, 39, 0.63)'}
            }
        },
        tpl: {
            closeBtn: '<div class="myFancyClose"></div>'
        },
        beforeShow: function(){
            $(".fancybox-skin").css("backgroundColor","transparent");
            $(".fancybox-skin").css("boxShadow","none");
        }
    });


    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    var now = new Date();
    var timer;
    var startDay = 4;
    var start = new Date(2013, 1, startDay, 23, 59, 59);
    var distance = now - start;
    var day = Math.floor(distance / _day);
    day = day - Math.floor(day / 3) * 3;
    var end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + day, 23, 59, 59);

    function showRemaining() {
        var now = new Date();
        now.setMinutes(1);
        var distance = end - now;
        var days = Math.floor(distance / _day);
        if (days < 10) days = '0' + days;
        var hours = Math.floor((distance % _day) / _hour);
        if (hours < 10) hours = '0' + hours;
        var minutes = Math.floor((distance % _hour) / _minute);
        if (minutes < 10) minutes = '0' + minutes;
        var seconds = Math.floor((distance % _minute) / _second);
        if (seconds < 10) seconds = '0' + seconds;

        //$(".count_line .d").html(days);
        $(".count_line .h").html(hours);
        $(".count_line .m").html(minutes);
        $(".count_line .s").html(seconds);
    }
    showRemaining();
    timer = setInterval(showRemaining, 1000);

});