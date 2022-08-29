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
    this.isOptionsProcessing = false;
    this.isActivitiesProcessing = false;

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

  addSpinner() {}
  removeSpinner() {}

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
    if (this.isOptionsProcessing || this.isActivitiesProcessing) {
      return null;
    }

    var data = this.getData()
    data['_wpnonce'] = this.ajaxNonce

    this.isOptionsProcessing = true;
    this.isActivitiesProcessing = true;
    this.addSpinner()

    $.ajax({
      type: 'get',
      url: this.restUrl + 'filter',
      data: data,
      success: (response) => {
        callback(response)
        this.isOptionsProcessing = false;
        this.removeSpinner()
      },
      error: (response) => {
        console.log(response);
        this.isOptionsProcessing = false;
        this.removeSpinner()
      },
    })

    return $.ajax({
      type: 'get',
      url: this.restUrl + 'activities',
      data: data,
      success: (response) => {
        $('.load-more-content-wrap').html(response.innerHTML);
        publisher.publish('activitiesUpdated', { count: response.postCount })
        this.isActivitiesProcessing = false;
        this.removeSpinner()
      },
      error: (response) => {
        console.log(response);
        this.isActivitiesProcessing = false;
        this.removeSpinner()
      },
    })
  }
}

export default Filter