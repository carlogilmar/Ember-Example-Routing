import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    addEvaluation:function(){
      var evaluation = this.store.createRecord('evaluation', {
        title: this.controller.get('title'),
        author: this.controller.get('author')
      });
      evaluation.save().then( () => {
        alert("Evaluacion Ok");
      },
      function(){
        alert("No se registro la evaluación");
      });
    }
  }
});
