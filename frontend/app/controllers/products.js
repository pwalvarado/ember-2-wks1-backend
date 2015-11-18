import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  filteredContent: Ember.computed('model', 'application.search', function() {
    var products = this.model;
    products = products.filterBy('title', this.get('application.search'));
    return products;
  })
});
