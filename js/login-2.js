(function() {

    var loginContainer = $('#login-container').hide().on('click');
    var loginForm = loginContainer.children('form');
    var speed = 1500;
    var hoverClass = 'hover';

    function isField(field, type) {
        return field.attr('type') == type;
    }

    function isEmailField(field) {
        return isField(field, 'email');
    }

    function isPasswordField(field) {
        return isField(field, 'password');
    }

    loginForm.on('submit', function(e) {
        e.preventDefault();
    });

    loginForm.on('focusin', 'input', function() {
        var $this = $(this);
        if(isPasswordField($this) || isEmailField($this)) {
            $this.closest('li').addClass(hoverClass);
        }
    });

    loginForm.on('focusout', 'input', function() {
        var $this = $(this);
        if(isPasswordField($this) || isEmailField($this)) {
            $this.closest('li').removeClass(hoverClass);
        }
    });

    loginForm.find('#cancel-button').on('click', function() {
        loginContainer.fadeOut(speed);
    });

    loginForm.find('#login-button').on('click', function() {
        loginContainer.fadeOut(speed);
    });

    loginContainer.fadeIn(speed / 2);

})();