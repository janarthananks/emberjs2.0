import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.APP.host,
  namespace: ENV.APP.namespace,
  ajax: function(url, method, hash) {
    hash = hash || {}; // hash may be undefined
    hash.crossDomain = true;
    //hash.xhrFields = {withCredentials: true};
    return this._super(url, method, hash);
  },
  ajaxError: function(jqXHR) {
   var error = this._super(jqXHR);
   if (jqXHR && jqXHR.status === 422) {
     var response = Ember.$.parseJSON(jqXHR.responseText),
         errors = {};

     if (response.errors !== undefined) {
       var jsonErrors = response.errors;
       Ember.EnumerableUtils.forEach(Ember.keys(jsonErrors), function(key) {
         errors[Ember.String.camelize(key)] = jsonErrors[key];
       });
     }
     return new DS.InvalidError(errors);
   } else {
     return error;
   }
 }
});
