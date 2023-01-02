$(document).ready(function () {

    var current = 0;
    var setIntervalId;

    $('.btn li').click(function (e) {
        e.preventDefault();
        var i = $(this).index();
        move(i);
    });



    $('.web_mn').mouseover(function () {
        clearInterval(setIntervalId);
    });
    $('.web_mn').mouseleave(function () {
        timer();
    });



    timer();
    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            if (n == 2) {

                n = 0;
            };

            move(n);
        }, 4000);
        console.log(current)
    };

    function move(i) {
        // var fadeIn = $('.fadeIn');
        //     var fadeOut = $('.fadeOut');
        //     var fadeTo = $('.fadeTo');
        //     var box = $('.box');

            // fadeIn.click(function () {
            //     box.fadeIn(500);    //투명도 1
            // });
            // fadeOut.click(function () {
            //     box.fadeOut(500);   //투명도 0
            // });
            // fadeTo.click(function () {
            //     box.fadeTo(500, 0.5);
            //     //box.fadeTo(시간, 투명도(0~1));
            // });

        if (i == current) return;

        var currentEl = $('.web_mn img').eq(current);
        var nextEl = $('.web_mn img').eq(i);

        currentEl.fadeIn(1000).fadeOut(500);
        nextEl.fadeIn(1000);
        current = i;
    };

});
