thegreatshasha:spectrumcolorpicker
=========================

An add-on Meteor package for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). Provides a single custom input type, "spectrum-datepicker", which renders an input using the [spectrum-colorpicker](https://bgrins.github.io/spectrum/) plugin.

## Prerequisites

Spectrum colorpicker must be installed separately.

Include the spectrum colorpicker css and js files

## Installation

In a Meteor app directory, enter:

```
$ meteor add thegreatshasha:spectrumcolorpicker
```

## Usage

Specify "spectrum-colorpicker" for the `type` attribute of any input. This can be done in a number of ways:

In the schema, which will then work with a `quickForm` or `afQuickFields`:

```js
{
  date: {
    type: Date,
    autoform: {
      type: "spectrum-colorpicker"
    }
  }
}
```

Or on the `afFieldInput` component or any component that passes along attributes to `afFieldInput`:

```js
{{> afQuickField name="typeTest" type="spectrum-colorpicker"}}

{{> afFormGroup name="typeTest" type="spectrum-colorpicker"}}

{{> afFieldInput name="typeTest" type="spectrum-colorpicker"}}
```

## Customizing Appearance

To easily add an input group add-on after the field, just provide the classes for the span in a `buttonClasses` attribute:

```js
{{> afFieldInput name="typeTest" type="spectrum-colorpicker" buttonClasses="glyphicon glyphicon-calendar"}}
```

If you want to customize the appearance of the input more, for example to use input group add-ons both before and after the field, use the [aldeed:template-extension](https://atmospherejs.com/aldeed/template-extension) package to replace the "afBootstrapDatepicker" template, like this:

```html
<template name="dpReplacement">
  <div class='input-group date'>
    <input type="text" value="" {{atts}}/>
    <span class="input-group-addon">
      <span class="glyphicon glyphicon-calendar"></span>
    </span>
  </div>
</template>
```

```js
Template.dpReplacement.replaces("afBootstrapDatepicker");
```

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.

[![Support via Gittip](https://rawgithub.com/twolfson/gittip-badge/0.2.0/dist/gittip.png)](https://www.gittip.com/aldeed/)