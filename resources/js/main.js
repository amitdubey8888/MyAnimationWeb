function sendContact() {
    var valid;
    valid = validateContact();
    if (valid) {
        jQuery.ajax({
            url: '/resources/js/contact_mail.php',
            type: 'POST',
            data: 'userName=' + $("#userName").val() + '&userEmail=' +
                $("#userEmail").val() + '&userPhone=' +
                $("#userPhone").val() + '&userMessage=' +
                $("#userMessage").val(),
            success: function(data) {
                $("#mail-status").html(data);
            },
            error: function() { alert("Something went wrong. Please try again!"); }
        });
    }
}

function validateContact() {
    var valid = true;
    $(".demoInputBox").css('background-color', '');
    $(".info").html('');
    if (!$("#userName").val()) {
        $("#userName-info").html("(required)");
        valid = false;
    }
    if (!$("#userEmail").val()) {
        $("#userEmail-info").html("(required)");
        valid = false;
    }
    if (!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#userEmail-info").html("(invalid)");
        valid = false;
    }
    if (!$("#userPhone").val()) {
        $("#userPhone-info").html("(required)");
        valid = false;
    }
    if (!$("#userMessage").val()) {
        $("#userMessage-info").html("(required)");
        valid = false;
    }
    return valid;
}