/* global AutoForm, $ */

AutoForm.addInputType("spectrum-colorpicker", {
  template: "afSpectrumColorpicker",
  valueOut: function () {
    return this.val();
  },
  valueConverters: {
    "string": function (val) {
      return (val instanceof Date) ? AutoForm.Utility.dateToDateStringUTC(val) : val;
    },
    "stringArray": function (val) {
      if (val instanceof Date) {
        return [AutoForm.Utility.dateToDateStringUTC(val)];
      }
      return val;
    },
    "number": function (val) {
      return (val instanceof Date) ? val.getTime() : val;
    },
    "numberArray": function (val) {
      if (val instanceof Date) {
        return [val.getTime()];
      }
      return val;
    },
    "dateArray": function (val) {
      if (val instanceof Date) {
        return [val];
      }
      return val;
    }
  }
});

Template.afSpectrumColorpicker.helpers({
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    delete atts.colorPickerOptions;
    return atts;
  }
});

Template.afSpectrumColorpicker.rendered = function () {
  var $input = this.data.atts.buttonClasses ? this.$('.input-group.date') : this.$('input');
  var data = this.data;
  
  // instanciate datepicker
  $input.spectrum(data.atts.colorPickerOptions);

  //TODO: set and reactively update values
  //this.autorun(function () {
    //var data = Template.currentData();

    // set field value
    // if (data.value instanceof Date) {
    //   $input.datepicker('setUTCDate', data.value);
    // } else if (typeof data.value === "string") {
    //   $input.datepicker('update', data.value);
    // }

  //});
};

Template.afSpectrumColorpicker.destroyed = function () {
  var $input = this.data.atts.buttonClasses ? this.$('.input-group.date') : this.$('input');
  $input.datepicker('remove');
};