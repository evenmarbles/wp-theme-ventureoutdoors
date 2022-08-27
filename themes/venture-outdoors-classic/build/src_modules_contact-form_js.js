"use strict";
(globalThis["webpackChunkventure_outdoors_classic"] = globalThis["webpackChunkventure_outdoors_classic"] || []).push([["src_modules_contact-form_js"],{

/***/ "./src/modules/contact-form.js":
/*!*************************************!*\
  !*** ./src/modules/contact-form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intl-tel-input */ "./node_modules/intl-tel-input/index.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input__WEBPACK_IMPORTED_MODULE_1__);

 // let iti = null;

class ContactForm {
  constructor() {
    var instance = this;
    this.inpt = document.querySelector("#phone");
    this.iti = intl_tel_input__WEBPACK_IMPORTED_MODULE_1___default()(this.inpt, {
      autoPlaceholder: "off",
      formatOnDisplay: true,
      utilsScript: ventureoutdoorsData.template_uri + "/src/intl-tel-input-utils.js"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default().validator.addMethod("intTel", function (phoneNumber, element, params) {
      return this.optional(element) || instance.iti.isValidNumber();
    }, "Please enter a valid phone number.");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("form[name='contact_form']").validate({
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
      submitHandler: function (form) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('input#extra').val().length === 0) {
          instance.sendEmail(instance.iti.getNumber());
        }
      }
    });
    this.events();
  }

  events() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#phone').on('keyup', function () {
      if (this.iti.isValidNumber()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#phone').val(this.formatPhoneNumber());
      }
    }.bind(this));
  }

  sendEmail(phoneNumber) {
    jQuery.ajax({
      url: ventureoutdoorsData.template_uri + "/inc/send-email.php",
      data: 'firstName=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#first_name').val() + '&lastName=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#last_name').val() + '&phone=' + phoneNumber + '&email=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#email').val() + '&message=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#description').val() + '&foundUs=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#found_us option:selected').text() + '&optIn=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#opt_in').val(),
      type: "POST",
      success: function (data) {
        if (JSON.parse(data).status === "success") {
          var validator = jquery__WEBPACK_IMPORTED_MODULE_0___default()("form[name='contact_form']").validate();
          validator.resetForm();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("form[name='contact_form']")[0].reset();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".form-success").removeClass('hidden');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".form-error").addClass('hidden');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".form-success").addClass('hidden');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(".form-error").removeClass('hidden');
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".form-success").addClass('hidden');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".form-error").removeClass('hidden');
      }
    });
  }

  formatPhoneNumber() {
    var number = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#phone').val();
    var classf = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".iti__selected-flag > div").attr("class");
    var flag = classf.slice(-2);
    var formattedNumber = intlTelInputUtils.formatNumber(number, flag, intlTelInputUtils.numberFormat.NATIONAL);

    if (flag !== 'us') {
      formattedNumber = intlTelInputUtils.formatNumber(number, flag, intlTelInputUtils.numberFormat.INTERNATIONAL);
      formattedNumber = formattedNumber.slice(formattedNumber.indexOf(' ') + 1, formattedNumber.length);
    }

    return formattedNumber;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ })

}]);
//# sourceMappingURL=src_modules_contact-form_js.js.map