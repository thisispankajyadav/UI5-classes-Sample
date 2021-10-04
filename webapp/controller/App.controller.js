sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ui5Classes/model/Person",
	"ui5Classes/model/Skill"
], function(Controller, Person, Skill) {
	"use strict";

	return Controller.extend("ui5Classes.controller.App", {
		onInit:function(){
			this.p = new Person({firstname:"Pankaj",lastname:"Yadav"});
			this.getView().setModel(this.p.getModel(),"person");
			this.s = new Skill({name:"name",value:"value"});
			this.getView().setModel(this.s.getModel(),"skill");
		},
		addSkill: function(){
			this.p.addSkill(this.s);
			this.s = new Skill({name:"name", value:"value"});
			this.getView().setModel(this.s.getModel(),"skill");
		}

	});
});