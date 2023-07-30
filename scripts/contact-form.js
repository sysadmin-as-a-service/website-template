window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("contactForm");
    var button = document.getElementById("formSubmit");
    var status = document.getElementById("formStatus");
    var emailInput = document.getElementById("formEmail");
    var messageInput = document.getElementById("formMessage");

    // Success and Error functions for after the form is submitted
    
    function success() {
    form.reset();
    status.innerHTML = '<div class="alert alert-success" role="alert">Thanks! Your message has been sent to us.</alert>';
    button.style = "display: none ";
    emailInput.style = "display: none ";
    messageInput.style = "display: none ";

    }

    function error() {
    status.innerHTML = '<div class="alert alert-warning" role="alert">Oops! There was a problem. Try submitting the form again.</alert>';
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {

    button = document.getElementById("formSubmit");
    button.innerHTML = '<span class="spinner-border spinner-border-md m-1" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>';

    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
    } else {
        error(xhr.status, xhr.response, xhr.responseType);
    }
    };
    xhr.send(data);
}