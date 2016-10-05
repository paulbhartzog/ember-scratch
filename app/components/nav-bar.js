import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    collapse() {
      this.$('#instructions').collapse('toggle');
    }
  },

});
