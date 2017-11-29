import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    return this.store.findRecord('evaluation', params.evaluation_id);
  },
  actions:{
    addTest:function(){
      var skillTest = this.store.createRecord('skill-test',{
        description: this.controller.get('description')
      });
      alert('Agregando un test');
    }
  }
});
