$(document).ready(function() {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    var name = document.getElementById("username");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var compname = document.getElementById("compname");
    var compaddress = document.getElementById("compaddress");
    var companytel = document.getElementById("companytel");
    var personname = document.getElementById("personname");
    var position = document.getElementById("position");
    var personaltel = document.getElementById("personaltel");

    var val_name = /^[a-zA-Z ]+$/
    var val_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var val_phone = /^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/;
    var val_tel_phone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    setProgressBar(current);

    $(".next").click(function() {
        if (name.value.length <= 7 || name.value.length >= 31 || !name.value.match(val_name)) {
            alert("You have entered 8~30 long name and not content number!");
            name.focus();
            return false;
        } else if (!email.value.match(val_email)) {
            alert("You have entered an invalid email address!");
            email.focus();
            return false;
        } else if (!phone.value.match(val_phone)) {
            alert("You have entered an invalid phone number!");
            phone.focus();
            return false;
        } else {
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            //Add Class Active
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function(now) {
                    // for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    next_fs.css({ 'opacity': opacity });
                },
                duration: 500
            });
            setProgressBar(++current);
        }

    });

    $(".previous").click(function() {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").click(function() {
        if (compname.value.length <= 7 || compname.value.length >= 31) {
            alert("You have entered 8~30 long comapany name!");
            compname.focus();
            return false;
        } else if (compaddress.value.length <= 11 || compaddress.value.length >= 71) {
            alert("You have entered 12~70 long comapany address!");
            compaddress.focus();
            return false;
        } else if (!companytel.value.match(val_tel_phone)) {
            alert("You have entered an invalid company phone number!");
            companytel.focus();
            return false;
        } else if (personname.value.length <= 7 || personname.value.length >= 31 || !name.value.match(val_name)) {
            alert("You have entered 8~30 long Name!");
            personname.focus();
            return false;
        } else if (position.value.length <= 0) {
            alert("You have to enter a position!");
            position.focus();
            return false;
        } else if (!personaltel.value.match(val_phone)) {
            alert("You have to enter a position!");
            personaltel.focus();
            return false;
        } else {
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            //Add Class Active
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({ opacity: 0 }, {
                step: function(now) {
                    // for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    next_fs.css({ 'opacity': opacity });
                },
                duration: 500
            });
            document.getElementById("msform").submit();
            setProgressBar(++current);
        }

    })

});