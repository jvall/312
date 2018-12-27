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
    $('#mailchimp-subscribe-button').prop('disabled', true);

    const data = {
      email_address: $('#mailchimp-email').val(),
    };

    if (data.email_address === '' || !(/(.+)@(.+){2,}\.(.+){2,}/.test(data.email_address))) {
      $('#mailchimp-subscribe-button').prop('disabled', false);
      $('#subscription-field-error').removeClass('remove-form-element');
      return;
    }
  
    $.ajax({
      "async": true,
      "crossDomain": true,
      type: 'POST',
      url: 'https://jt5lribq5g.execute-api.us-east-1.amazonaws.com/stage0/subscribe',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function () {
        $('#subscription-success').removeClass('remove-form-element');
        $('#subscription-form').addClass('remove-form-element');
      },
      error: function () {}
    });
  });
})(jQuery);