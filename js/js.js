$( document ).ready(function() {
    let count = 1;
    let witdh = "";
    $(".click_btn").click(function () {

        witdh = $(".loading-bar").width() / 6 * 5 + 1;
        if ($(".progressLine").width() > witdh) {
            return false;
        }
        count++;
        $(".steps").text(count);
        $(".progressLine").animate({
            "width": count * 16.67 + "%"
        }, 600)
    });
});
