define(['underscore','backbone'], function(_, Backbone) {
   var AddressModel = Backbone.Model.extend({
      validate: function(attrs) {
         if (!attrs.firstName) {
            return "First Name Required";
         }
         if (!attrs.lastName) {
            return "Last Name Required";
         }
      }
   });

   return AddressModel;
});
