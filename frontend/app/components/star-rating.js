import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  starred: Ember.computed('starCount', function() {
    return new Array(this.get('startCount')).fill('x');
  }),
  unstarred: Ember.computed('starCount', function() {
    return new Array(5-this.get('startCount')).fill('x');
  })
});
