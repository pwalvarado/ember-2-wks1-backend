import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  filteredContent: Ember.computed('model', 'application.search', 'model.@each.title', 'model.@each.description', function() {
    var products = this.model,
        search = new RegExp(this.get('application.search'), 'i');
    products = products.filter(function(product) {
      var str = product.get('title') + product.get('description');
      return search.test(str);
    });
    return products;
  })
});
