
$(document).ready(function() {
    $(".btn-android").on("click", function () {
        $(".android-phone").css("display", "inline-block");
        $(".iphone").css("display", "none");

    });

    $(".btn-iphone").on("click", function () {
        $(".iphone").css("display", "inline-block");
        $(".android-phone").css("display", "none");
    });
});