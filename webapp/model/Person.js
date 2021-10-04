sap.ui.define([
 "ui5Classes/model/BaseObject"
], function(BaseObject) {
  "use strict";
  return BaseObject.extend("ui5Classes.model.Person", {
    constructor: function(data) {
    	BaseObject.call(this);
      if (data) {
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.fullname = this.getFullName();
      }
      this.skills=[];
    },
    getFullName: function() {
      return this.firstname + " " + this.lastname;
    },
    addSkill:function(skill){
    	this.skills.push(skill);
    	this.model.refresh();
    }
  });
});