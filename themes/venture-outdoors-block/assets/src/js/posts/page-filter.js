import $ from 'jquery'
import Filter from './filter'

/**
 * Class Filter.
 */
class PageFilter extends Filter {
  /**
   * Contructor.
   */
  constructor() {
    super()
    this.filterControl = $('.sidebar-filter-wrap');
  }

  events() {
    // mobile filter button
    $('body').on('click', '.btn-activity-filter', this.toggleFilterControl.bind(this))
    // checkbox button clicked
    $('body').on('change', '.facetwp-checkbox', this.chkChanged.bind(this))
  }

  init() {
    var pathname = window.location.pathname.split('/')
    this.slug = pathname[pathname.length - 2]

    $.each(['fvo_length', 'fvo_difficulty'], function (index, name) {
      var value = this.getParameterByName(name)

      if (value !== null) {
        var inpt = $(`label[data-value='${value}'] > input`)
        var filter = name.substr(4)
        this.filterFields[filter].push(value)
        inpt.attr('checked', 'checked')
        inpt.closest('li').children('.js-accordion').trigger('click')
      }
    }.bind(this))

    this.filterActivities(this.updateFilterControl.bind(this))
  }

  getData() {
    var data = super.getData()
    if (this.slug.length) {
      data['slug'] =  this.slug
    }
    return data
  }

  getParameterByName(name, url = null) {
    if (!url) url = window.location.href;

    name = name.replace(/[\[\]]/g, "\\$&")
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
    var results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''

    return decodeURIComponent(results[2].replace(/\+/g, " "))
  }

  updateFilterControl(response) {
    delete response.count

    for (const key in response) {
      response[key].forEach(item => {
        var chk = $(".facetwp-checkbox[data-value='" + item.slug + "']")
        var chkIn = chk.children('input').eq(0)

        if (this.filterKey != key) {
          chk.children('.facetwp-counter').html("(" + item.count + ")")
        }

        if ('difficulty' === key) {
          if (!item.count) {
            chk.css('display', 'none')
          } else {
            chk.removeAttr('style')
          }
        }

        if (!item.count) {
          if (this.filterKey != key) {
            chk.addClass('disabled')
            chkIn.addClass('disabled')
            chkIn.prop('disabled', true)
          }
          return
        }

        chk.removeClass('disabled')
        chkIn.removeClass('disabled')
        chkIn.prop('disabled', false)
      })
    }

    this.isRequestProcessing = false;
  }

  // Event Handlers

  chkChanged(e) {
    var currentTarget = $(e.currentTarget);
    var filter = currentTarget.parent().data('name').substr(9)
    var chkIn = currentTarget.children('input')

    if (chkIn.attr('checked') === 'checked') {
      chkIn.removeAttr('checked');
      const index = this.filterFields[filter].indexOf(currentTarget.data('value'))
      if (index > -1) {
        this.filterFields[filter].splice(index, 1)
      }
    } else {
      chkIn.attr('checked', 'checked')
      this.filterFields[filter].push(currentTarget.data('value'))
    }

    this.filterActivities(this.updateFilterControl.bind(this)).then(() => {
      $('html, body').animate({
        scrollTop: $('.activity-search').offset().top
      }, 500)
    })
  }

  toggleFilterControl(e) {
    if (this.filterControl.is(':hidden')) {
      this.filterControl.attr('style', 'display:none')
      this.filterControl.removeClass('normal-hidden-sm-down')
      this.filterControl.slideDown('slow');
    } else {
      this.filterControl.slideUp('fast', function () {
        console.log('animation done')
        $('#sidebar').addClass('normal-hidden-sm-down')
        $('#sidebar').removeAttr('style');
      });
    }
  }
}

export default PageFilter