import $ from 'jquery'

const publisher = require('../helpers/publisher')

/**
 * Class Loadmore.
 */
class LoadMore {
	/**
	 * Contructor.
	 */
	constructor(filter) {
		this.restUrl = siteConfig?.restUrl ?? '';
		this.ajaxNonce = siteConfig?.ajax_nonce ?? '';
		this.numberResults = $('.js-number-results');
		this.loadMoreBtn = $('#load-more');
		this.loadingTextEl = $('#loading-text');
		this.isRequestProcessing = false;

		this.filter = filter

		this.options = {
			root: null,
			rootMargin: '0px',
			threshold: 1.0, // 1.0 means set isIntersecting to true when element comes in 100% view.
		};

		this.init()
		publisher.subscribe('activitiesUpdated', this.init.bind(this))
	}

	init(e, data) {
		if (data) {
			this.numberResults.text(data.count.toString())
		}

		this.loadMoreBtn = $('#load-more')

		if (!this.loadMoreBtn.length) {
			return;
		}

		this.totalPagesCount = $('#post-pagination').data('max-pages');
		if (!this.totalPagesCount) {
			this.totalPagesCount = 0;
			this.removeLoadMoreIfOnLastPage(0);
		}

		/**
		 * Add the IntersectionObserver api, and listen to the load more intersection status.
		 * so that intersectionObserverCallback gets called if the element intersection status changes.
		 *
		 * @type {IntersectionObserver}
		 */
		const observer = new IntersectionObserver(
			(entries) => this.intersectionObserverCallback(entries),
			this.options
		);
		observer.observe(this.loadMoreBtn[0]);
	}

	/**
	 * Gets called on initial render with status 'isIntersecting' as false and then
	 * everytime element intersection status changes.
	 *
	 * @param {array} entries No of elements under observation.
	 *
	 */
	intersectionObserverCallback(entries) {
		// array of observing elements

		// The logic is apply for each entry ( in this case it's just one loadmore button )
		entries.forEach((entry) => {
			// If load more button in view.
			if (entry?.isIntersecting) {
				this.handleLoadMorePosts();
			}
		});
	}

	/**
	 * Load more posts.
	 *
	 * 1.Make an ajax request, by incrementing the page no. by one on each request.
	 * 2.Append new/more posts to the existing content.
	 * 3.If the response is 0 ( which means no more posts available ), remove the load-more button from DOM.
	 * Once the load-more button gets removed, the IntersectionObserverAPI callback will not be triggered, which means
	 * there will be no further ajax request since there won't be any more posts available.
	 *
	 * @return null
	 */
	handleLoadMorePosts() {
		// Get page no from data attribute of load-more button.
		const page = this.loadMoreBtn.data('page');
		if (!page || this.isRequestProcessing) {
			return null;
		}

		const nextPage = parseInt(page) + 1; // Increment page count by one.
		this.isRequestProcessing = true;
		this.loadMoreBtn.addClass('is-loading')

		var data = this.filter.getData()
		data['page'] = page
		data['_wpnonce'] = this.ajaxNonce

		$.ajax({
			type: 'get',
			url: this.restUrl + 'loadmore',
			// beforeSend: function ( xhr ) {
			// 	xhr.setRequestHeader( 'X-WP-Nonce', this.ajaxNonce )
			// },
			data: data,
			success: (response) => {
				this.loadMoreBtn.data('page', nextPage);
				$('#load-more-content').append(response);
				this.removeLoadMoreIfOnLastPage(nextPage);
				this.loadMoreBtn.removeClass('is-loading')
				this.isRequestProcessing = false;
			},
			error: (response) => {
				console.log(response);
				this.loadMoreBtn.removeClass('is-loading')
				this.isRequestProcessing = false;
			},
		})
	}


	/**
	 * Remove Load more Button If on last page.
	 *
	 * @param {int} nextPage New Page.
	 */
	removeLoadMoreIfOnLastPage(nextPage) {
		if (nextPage + 1 > this.totalPagesCount) {
			this.loadMoreBtn.remove();
		}
	}

}

export default LoadMore
