import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition: function() {
      var product = this.currentModel;

      if (product.get('hasDirtyAttributes')) {
        product.rollbackAttributes();
      }
      this.controller.set('isEditing', false);
    }
  }
});
