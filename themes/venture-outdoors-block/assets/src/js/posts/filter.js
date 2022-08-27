import $ from 'jquery'

const publisher = require('../helpers/publisher')

/**
 * Class Filter.
 */
class Filter {
  /**
   * Contructor.
   */
  constructor() {
    this.restUrl = siteConfig?.restUrl ?? ''
    this.ajaxNonce = siteConfig?.ajax_nonce ?? ''
    this.isRequestProcessing = false;

    this.resetFilterFields()

    this.events()

    this.init()
  }

  resetFilterFields() {
    this.filterFields = {
      type: [],
      length: [],
      difficulty: []
    }
  }

  events() {
    throw new Error('Implementation required.')
  }

  init() {
    throw new Error('Implementation required')
  }

  getData() {
    var data = {}
    for (const key in this.filterFields) {
      if (this.filterFields[key].length !== 0) {
        data[key] = this.filterFields[key]
      }
    }
    return data;
  }

  filterActivities(callback) {
    if (this.isRequestProcessing) {
      return null;
    }

    var data = this.getData()
    data['_wpnonce'] = this.ajaxNonce

    this.isRequestProcessing = true;

    $.ajax({
      type: 'get',
      url: this.restUrl + 'filter',
      data: data,
      success: (response) => {
        callback(response)
      },
      error: (response) => {
        console.log(response);
        this.isRequestProcessing = false;
      },
    })

    return $.ajax({
      type: 'get',
      url: this.restUrl + 'activities',
      data: data,
      success: (response) => {
        $('.load-more-content-wrap').html(response.innerHTML);
        publisher.publish('activitiesUpdated', { count: response.postCount })
        this.isRequestProcessing = false;
      },
      error: (response) => {
        console.log(response);
        this.isRequestProcessing = false;
      },
    })
  }
}

export default Filter