(function($) {
  $('#contact-form').submit(function(event) {
    event.preventDefault();

    $('#contact-submit-button').prop('disabled', true);

    const data = {
      name: $('#name').val(),
      email: $('#email').val(),
      description: $('#message').val()
    };

    if (data.name === '' || data.email === '' || data.description === '' || !(/(.+)@(.+){2,}\.(.+){2,}/.test(data.email))) {
      $('#contact-submit-button').prop('disabled', false);
      $('#contact-missing-field').removeClass('remove-form-element');
      return;
    }
  
    $.ajax({
      "async": true,
      "crossDomain": true,
      type: 'POST',
      url: 'https://jt5lribq5g.execute-api.us-east-1.amazonaws.com/stage0/contact',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function () {
        $('#contact-success').removeClass('remove-form-element');
        $('#contact-form').addClass('remove-form-element');
      },
      error: function () {
        $('#contact-api-error').removeClass('hide-form-messages');
      }
    });
  });

  $('#subscription-form').submit(function(event) {
    event.preventDefault();

    const data = {
      email_address: $('#mailchimp-email').val(),
    };
  
    $.ajax({
      "async": true,
      "crossDomain": true,
      type: 'POST',
      url: 'https://jt5lribq5g.execute-api.us-east-1.amazonaws.com/stage0/subscribe',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function () {
        // $('#contact-success').removeClass('hide-form-messages');
        // $('#contact-form').addClass('hide-form-messages');
      },
      error: function () {
        // $('#error-message').removeClass('hide-form-messages');
        // $('#contact-form').addClass('hide-form-messages');
        // $('#processing-message').addClass('hide-form-messages');
      }
    });
  });
})(jQuery);