import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    editTodo: function() {
      this.set("isEditing", true);
    },
    acceptChanges: function() {
      this.set("isEditing", false);
    }
  }
});
