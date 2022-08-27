class ChatWidget {
  constructor() {
    var instance = this;
    $('.chat-widget-container').click(this.toggle);
    $('#chatClose').click(this.close);
    $('#chatSuccessClose').click(this.close);
    $('#submit-btn').click(function(e) {
      instance.sendEmail(e, instance);
    });
  }

  sendEmail(e, instance) {
    if (instance.valid()) {
      jQuery.ajax({
				url: "https://www.ventureoutdoorsllc.com/php/chat-widget.php",
				data: 'name=' + $('#name').val() + '&email=' + $('#email').val() + '&message=' + $('#message').val(),
				type: "POST",
				success: function (data) {
					$(".chat-success").attr('style', 'display:block');
					$(".chat-error").attr('style', 'display:none');
				},
				error: function (data) {
					$(".chat-success").attr('style', 'display:none');
					$(".chat-error").attr('style', 'display:block');
				}
			});
    }
  }

  valid() {
    if (this.validateMessage() && this.validateName() && this.validateEmail()) {
      return true;
    }
    return false;
  }

  validateMessage() {
    let val = $('#message').val();
    if (val.length == 0) {
      return false;
    }
    return true;
  }

  validateName() {
    let val = $('#name').val();
    if (val.length == 0) {
      return false;
    }
    return true;
  }

  validateEmail() {
    let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    let val = $('#email').val();
    if (val.length > 0 && regex.test(val)) {
      return true;
    }
    return false;
  }

  close() {
    $('.chat-widget-form-container').removeClass('open');
    $(".chat-success").attr('style', 'display:none');
    $(".chat-error").attr('style', 'display:none');
}

  toggle() {
    $('.chat-widget-form-container').toggleClass('open');
    $(".chat-success").attr('style', 'display:none');
    $(".chat-error").attr('style', 'display:none');
  }
}

let chatWidget = new ChatWidget();

$(document).mouseup(function(e)
{
  var container = $('.chat-widget');
  if (!container.is(e.target) && container.has(e.target).length === 0)
  {
    $('.chat-widget-form-container').removeClass('open');
    $('#wf-form-widget-email input[type="text"]').val('');
    $('#wf-form-widget-email input[type="email"]').val('');
    $('#wf-form-widget-email textarea').val('');
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= $('#pageBody').offset().top) {
    $('.chat-widget').fadeIn('slow');
  }
  else {
    $('.chat-widget').fadeOut('slow');
  }
})
