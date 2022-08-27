import $ from 'jquery'
import Filter from './filter'

const publisher = require('../helpers/publisher')

/**
 * Class Filter.
 */
class BannerFilter extends Filter {
  /**
   * Contructor.
   */
  constructor() {
    super()
    this.numberResults = $('.js-number-results');

		publisher.subscribe('activitiesUpdated', this.updateResults.bind(this))
  }

  // 2. events
  events() {
    $('.facetwp-facet').on('change', this.optionChanged.bind(this));
    $('.js-frontpage-filter').on('click', this.redirect.bind(this));
  }

  init() {
    this.filterActivities(this.updateBannerFilter.bind(this))
  }

	updateResults(e, data) {
		this.numberResults.text(data.count.toString())
  }

  capitalize(s) {
    const words = s.split('_');
    $.each(words, function(i, word) {
      words[i] = word[0].toUpperCase() + word.substring(1);
    });
    return words.join(' ');
  }

  updateBannerFilter(response) {
    $('.facetwp-facet').each(function (index, item) {
      var category = $(item).data('name');
      category = category.substring(category.indexOf('_')+1);

      var selectedIndex = $(`#${category}`).prop('selectedIndex');
      $(`#${category}`).empty();

      let filter = category.substring(category.indexOf('_')+1);
      if (this.filter === undefined || this.filter !== category || (this.filter === category && $(item).val() == "")) {
        $(`#${category}`).append(`<option value="">${this.capitalize(category)}</option>`);
        $.each(response[filter], function (key, value) {
          if (value['count'] !== 0 || category === this.filter) {
            let title = value['title'];
            let slug = value['slug'];
            if (category === 'difficulty') {
              title = title.substr(0, title.length-1) + ' ' + title.substr(-1);
            }
            $(`#${category}`).append(`<option value="${slug}">${title} (${value['count']})</option>`);
          }
        }.bind(this));
        $(`#${category}`).selectric('refresh');
        $(`#${category}`).prop('selectedIndex', selectedIndex).selectric('refresh');
      }
    }.bind(this));
  }

  // Event Handler

  optionChanged(e) {
    this.filter = $(e.currentTarget).data('name');
    this.filter = this.filter.substring(this.filter.indexOf('_')+1);

    const type = $('.facetwp-facet-frontpage_activity_type select option:selected').val();
    const length = $('.facetwp-facet-frontpage_activity_length select').val();
    const difficulty = $('.facetwp-facet-frontpage_difficulty_level select').val();

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

    this.filterActivities(this.updateBannerFilter.bind(this));
  }

  redirect() {
    var queryString = [];

    var url = '/activity-types';

    const actType = $('.facetwp-facet-frontpage_activity_type select').val();
    const actLength = $('.facetwp-facet-frontpage_activity_length select').val();
    const actDifficulty = $('.facetwp-facet-frontpage_difficulty_level select').val();

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
}

export default BannerFilter