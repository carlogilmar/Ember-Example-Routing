import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('evaluations', function() {
    this.route('new');
    this.route('evaluation', {path:'evaluation/:evaluation_id'}, function(){});
  });
});

export default Router;
