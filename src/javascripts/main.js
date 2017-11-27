'use strict';

import $ from 'jquery';

$(function() {
  class Page {
    constructor() {
      this.$elm = $('body');
    }
  };

  new Page();
});
