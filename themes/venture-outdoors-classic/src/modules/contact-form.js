import $ from 'jquery'
import intlTelInput from "intl-tel-input";

// let iti = null;

class ContactForm {
  constructor() {
    var instance = this;

    this.inpt = document.querySelector("#phone");
    this.iti = intlTelInput(this.inpt, {
        autoPlaceholder: "off",
        formatOnDisplay: true,
        utilsScript: ventureoutdoorsData.template_uri + "/src/intl-tel-input-utils.js",
    });
    
    $.validator.addMethod( "intTel", function( phoneNumber, element, params) {
      return this.optional( element ) || instance.iti.isValidNumber();
    }, "Please enter a valid phone number." )

    $("form[name='contact_form']").validate({
      rules: {
        first_name: "required",
        last_name: "required",
        phone: {
          required: true,
          intTel: true
        },
        email: {
          required: true,
          email: true
        },
        description: "required"
      },
      submitHandler: function(form) {
        if ($('input#extra').val().length === 0) {
          instance.sendEmail(instance.iti.getNumber());
        }
      },
    });

    this.events();
  }

  events() {
    $('#phone').on('keyup', function () {
      if (this.iti.isValidNumber()) {
        $('#phone').val(this.formatPhoneNumber());
      }
    }.bind(this));
  }

  sendEmail(phoneNumber) {
    jQuery.ajax({
        url: ventureoutdoorsData.template_uri + "/inc/send-email.php",
        data: 'firstName=' + $('#first_name').val() + '&lastName=' + $('#last_name').val() + '&phone=' + phoneNumber
            + '&email=' + $('#email').val() + '&message=' + $('#description').val() + '&foundUs=' + $('#found_us option:selected').text() + '&optIn=' + $('#opt_in').val(),
        type: "POST",
        success: function (data) {
          if (JSON.parse(data).status === "success") {
            var validator = $("form[name='contact_form']").validate();
            validator.resetForm();
            $("form[name='contact_form']")[0].reset();
            $(".form-success").removeClass('hidden');
            $(".form-error").addClass('hidden');
          } else {
            $(".form-success").addClass('hidden');
            $(".form-error").removeClass('hidden');
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $(".form-success").addClass('hidden');
          $(".form-error").removeClass('hidden');
        }
    });
  }

  formatPhoneNumber() {
    var number = $('#phone').val();
    var classf = $(".iti__selected-flag > div").attr("class");
    var flag = classf.slice(-2);
    var formattedNumber = intlTelInputUtils.formatNumber(number, flag, intlTelInputUtils.numberFormat.NATIONAL);
    if (flag !== 'us') {
      formattedNumber = intlTelInputUtils.formatNumber(number, flag, intlTelInputUtils.numberFormat.INTERNATIONAL);
      formattedNumber = formattedNumber.slice(formattedNumber.indexOf(' ') + 1, formattedNumber.length);
    }
    return formattedNumber;
  }
}

export default ContactForm;
