
sap.ui.define([
    "ui5Classes/model/BaseObject"
], function(BaseObject) {
  "use strict";
  return BaseObject.extend("ui5Classes.model.Skill", {
      constructor: function(data) {
        BaseObject.call(this);
        if(data){
          this.name = data.name;
          this.value = data.value;
        }
      }
    });
});
