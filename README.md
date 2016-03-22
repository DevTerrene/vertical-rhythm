# Vertical Rhythm

## New in this version
* All files can now be imported as a mixin.
* Standard 6 font sizes (xs - xxl).
* New calculations for typeface specific cap heights.
* Baseline can now be toggled via a variable instead of a checkbox.
* Fixed some bugs in the calculations.

## [Demo](http://vicompany.github.io/vertical-rhythm/)
A collection of examples that displays the effects of a proper vertical rhythm.

## How it works
### Base typography
The goal of typography is to create balanced, readable and legible text. Good typography depends on many factors.

VR takes into account the cap height of different typefaces. This is the only number that needs some fine-tuning to get everything just right. Located in: <_vr-user-settings.scss>

```
$show-baseline: true;

$font-display: Arial, sans-serif;
$cap-font-display: 0.0155em;

$px-font-size: 16;
$px-line-height: 24;

$modular-scale: 'golden section';
```

### Modular scales
The next step is selecing one of the 17 predefined modular scales.

```
$modular-scales: (
  'minor-second': 1.067,
  'major-second': 1.125,
  'minor-third': 1.2,
  'major-third': 1.25,
  'perfect-fourth': 1.333,
  'augmented-fourth': 1.414,
  'perfect-fifth': 1.5,
  'minor-sixth': 1.6,
  'golden-section': 1.618,
  'major-sixth': 1.667,
  'minor-seventh': 1.778,
  'major-seventh': 1.875,
  'octave': 2,
  'major-tenth': 2.5,
  'major-eleventh': 2.667,
  'major-twelfth': 3,
  'double-octave': 4
);
```

### Alignment
All alignment classes are based on the $rhythm ($base-font-size * $base-line-height).

```
div  { margin-bottom: $distance-s; }
h1   { @include vr($font-display, $font-size-m); }
code { padding: $paragraph-trailer; }
img  { max-height: $size-m; }
```

### Borders
Use negative margins to align elements that have a top- and/or bottom border(s). Aligning borders might be a bit tricky at first, but eventually it becomes second nature.

```
.foo {
  margin-top: ($border-width-m * -1);
  border-top: $border-width-m solid $black;
}

.bar {
  margin-bottom: ($distance-s - $border-width-m);
  border-bottom: $border-width-m solid $black;
}
```

## License

Vertical Rhythm is licensed under the [MIT license](http://opensource.org/licenses/MIT).
