"use strict";
(globalThis["webpackChunkventure_outdoors_classic"] = globalThis["webpackChunkventure_outdoors_classic"] || []).push([["src_modules_page-filter_js"],{

/***/ "./src/modules/page-filter.js":
/*!************************************!*\
  !*** ./src/modules/page-filter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


class PageFilter {
  constructor() {
    this.currrentPage = 1;
    this.activitySearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.activity-search');
    this.isSidebarFilter = this.activitySearch.length;
    this.url = window.location.pathname;
    let pathname = this.url.split('/');
    this.slug = pathname[pathname.length - 2];
    this.numberResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-number-results');
    this.resetFilterFields();

    if (this.isSidebarFilter) {
      this.sideFilter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar-filter-wrap');
      this.activitySecCont = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sngl-activity-sec-cont .facetwp-template:first-child');
      this.initializeFilterFields();
    } else {
      this.getFilterSettings();
    }

    this.events();
  } // 2. events


  events() {
    if (this.isSidebarFilter) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.btn-activity-filter', this.toggleSideFilter.bind(this));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.facetwp-load-more', this.loadMore.bind(this));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('change', '.facetwp-checkbox', this.checkboxChanged.bind(this));
    }

    if (!this.isSidebarFilter) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet').on('change', this.selectedOptionChanged.bind(this));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-frontpage-filter').on('click', this.filterRedirect.bind(this));
    }
  } // 3. methods


  toggleSideFilter(e) {
    if (this.sideFilter.is(':hidden')) {
      this.sideFilter.slideDown('slow');
    } else {
      this.sideFilter.slideUp('fast', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sidebar').removeAttr('style');
      });
    }
  }

  loadMore() {
    this.currrentPage++;
    let data = {
      action: 'load_more',
      paged: this.currrentPage,
      slug: this.slug
    };

    for (const key in this.filterFields) {
      if (this.filterFields[key].length) {
        data[key] = this.filterFields[key];
      }
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      type: 'POST',
      url: '/wp-admin/admin-ajax.php',
      context: this,
      dataType: 'json',
      data: data,
      success: function (res) {
        if (this.currrentPage >= res.max) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-load-more').hide();
        }

        this.activitySecCont.append(res.html);
      }
    });
  }

  checkboxChanged(e) {
    let currentTarget = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
    let filter = currentTarget.parent().data('name').substr(9);

    if (currentTarget.hasClass('checked')) {
      currentTarget.removeClass('checked');
      const index = this.filterFields[filter].indexOf(currentTarget.data('value'));

      if (index > -1) {
        this.filterFields[filter].splice(index, 1);
      }
    } else {
      currentTarget.addClass('checked');
      this.filterFields[filter].push(currentTarget.data('value'));
    }

    this.currrentPage = 1;
    this.getFilterSettings(this.filterUpdated.bind(this)).then(() => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
        scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.activity-search').offset().top
      }, 500);
    });
  }

  selectedOptionChanged(e) {
    this.filter = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).data('name');
    this.filter = this.filter.substring(this.filter.indexOf('_') + 1);
    const type = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet-frontpage_activity_type select option:selected').val();
    const length = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet-frontpage_activity_length select').val();
    const difficulty = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet-frontpage_difficulty_level select').val();
    this.resetFilterFields();

    if (type) {
      this.filterFields['type'].push(type);
    }

    if (length) {
      this.filterFields['length'].push(length);
    }

    if (difficulty) {
      this.filterFields['difficulty'].push(difficulty);
    }

    this.getFilterSettings(this.updateBannerFilter.bind(this));
  }

  filterRedirect() {
    var queryString = [];
    var url = '/activity-types';
    const actType = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet-frontpage_activity_type select').val();
    const actLength = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet-frontpage_activity_length select').val();
    const actDifficulty = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet-frontpage_difficulty_level select').val();

    if (actType === '' || actType == null) {
      url = '/activities';
    } else {
      url += '/' + actType;
    }

    if (actLength !== '' && actLength != null) {
      queryString.push('fvo_length=' + encodeURIComponent(actLength));
    }

    if (actDifficulty !== '' && actDifficulty != null) {
      queryString.push('fvo_difficulty=' + encodeURIComponent(actDifficulty));
    }

    if (queryString.length > 0) {
      url += '?' + queryString.join("&");
    }

    window.location = url;
  }

  resetFilterFields() {
    this.filterFields = {
      type: [],
      length: [],
      difficulty: []
    };
  }

  initializeFilterFields() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(['fvo_length', 'fvo_difficulty'], function (index, name) {
      var value = this.getParameterByName(name);

      if (value !== null) {
        var inpt = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`label[data-value='${value}'] > input`);
        let filter = name.substr(4);
        this.filterFields[filter].push(value);
        inpt.attr('checked', 'checked');
        inpt.closest('li').children('.js-accordion').trigger('click');
      }
    }.bind(this));
    this.getFilterSettings(this.filterUpdated.bind(this));
  }

  filterUpdated(results) {
    this.numberResults.text(results['count']);
    this.activitySecCont.html(results['html']);

    if (this.currrentPage >= results['max']) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-load-more').hide();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-load-more').show();
    }

    let filters = ['type', 'length', 'difficulty'];
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(filters, function (index, f) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(results[f], function (index, value) {
        let checkbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".facetwp-checkbox[data-value='" + value.slug + "']");
        let inCheckbox = checkbox.children('input').eq(0);

        if (this.filter !== f) {
          checkbox.children('.facetwp-counter').html("(" + value.count + ")");
        }

        if (f === 'difficulty') {
          if (!value.count) {
            checkbox.css('display', 'none');
          } else {
            checkbox.removeAttr('style');
          }
        }

        if (!value.count) {
          if (this.filter !== f) {
            checkbox.addClass('disabled');
            inCheckbox.addClass('disabled');
            inCheckbox.prop('disabled', true);
          }

          return;
        }

        checkbox.removeClass('disabled');
        inCheckbox.removeClass('disabled');
        inCheckbox.prop('disabled', false);
      });
    });
  }

  updateBannerFilter(results) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.facetwp-facet').each(function (index, item) {
      var category = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).data('name');
      category = category.substring(category.indexOf('_') + 1);
      var selectedIndex = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${category}`).prop('selectedIndex');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${category}`).empty();
      let filter = category.substring(category.indexOf('_') + 1);

      if (this.filter === undefined || this.filter !== category || this.filter === category && jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).val() == "") {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${category}`).append(`<option value="">${this.capitalize(category)}</option>`);
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(results[filter], function (key, value) {
          if (value['count'] !== 0 || category === this.filter) {
            let title = value['title'];
            let slug = value['slug'];

            if (category === 'difficulty') {
              title = title.substr(0, title.length - 1) + ' ' + title.substr(-1);
            }

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${category}`).append(`<option value="${slug}">${title} (${value['count']})</option>`);
          }
        }.bind(this));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${category}`).selectric('refresh');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${category}`).prop('selectedIndex', selectedIndex).selectric('refresh');
      }
    }.bind(this));
  }

  capitalize(s) {
    const words = s.split('_');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(words, function (i, word) {
      words[i] = word[0].toUpperCase() + word.substring(1);
    });
    return words.join(' ');
  }

  getParams() {
    let params = '';
    let index = 0;

    for (const key in this.filterFields) {
      if (this.filterFields[key].length) {
        if (index) {
          params += '&';
        }

        params = params.concat(key, '=', this.filterFields[key].join(','));
        index++;
      }
    }

    return params;
  }

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  getFilterSettings() {
    let cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let params = this.getParams();

    if (this.slug.length) {
      params = params.length ? '&' + params : '';
      params = 'slug=' + this.slug + params;
    }

    return jquery__WEBPACK_IMPORTED_MODULE_0___default().getJSON(ventureoutdoorsData.root_url + '/wp-json/ventureoutdoors/v1/filter?' + params, cb);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageFilter);

/***/ })

}]);
//# sourceMappingURL=src_modules_page-filter_js.js.map