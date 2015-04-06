/* global AutoForm, $ */

AutoForm.addInputType("spectrum-colorpicker", {
  template: "afSpectrumColorpicker",
  valueOut: function () {
    return this.val();
  }
});

Template.afSpectrumColorpicker.helpers({
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    delete atts.datePickerOptions;
    return atts;
  }
});

Template.afSpectrumColorpicker.rendered = function () {
  var $input = this.data.atts.buttonClasses ? this.$('.input-group.color') : this.$('input');
  var data = this.data;

  // instanciate datepicker
  $input.spectrum(data.atts.colorPickerOptions);

  // set and reactively update values
  this.autorun(function () {
    var data = Template.currentData();

    // set field value
    // if (data.value instanceof Date) {
    //   $input.datepicker('setUTCDate', data.value);
    // } else if (typeof data.value === "string") {
    //   $input.datepicker('update', data.value);
    // }

    // // set start date if there's a min in the schema
    // if (data.min instanceof Date) {
    //   // datepicker plugin expects local Date object,
    //   // so convert UTC Date object to local
    //   var startDate = utcToLocal(data.min);
    //   $input.datepicker('setStartDate', startDate);
    // }

    // // set end date if there's a max in the schema
    // if (data.max instanceof Date) {
    //   // datepicker plugin expects local Date object,
    //   // so convert UTC Date object to local
    //   var endDate = utcToLocal(data.max);
    //   $input.datepicker('setEndDate', endDate);
    // }
  });
};

Template.afSpectrumColorpicker.destroyed = function () {
  var $input = this.data.atts.buttonClasses ? this.$('.input-group.color') : this.$('input');
  $input.spectrum('destroy');
};