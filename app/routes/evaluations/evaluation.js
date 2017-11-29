import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    //return this.store.query('skillTest', {evaluation: params.evaluation_id})
    return this.store.findRecord('evaluation', params.evaluation_id);
  }
});
