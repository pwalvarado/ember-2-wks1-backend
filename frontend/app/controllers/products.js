import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  filteredContent: Ember.computed('model', function() {
    var products = this.model;

    return products;
  })
});
