# vowel.css
Yet another CSS library. There are many like it, but this one is mine.

**vowel.css** is a set of functional styles that I've been using with my own projects for quite some time.

The functional classes basically evolved from [Basscss](https://github.com/basscss/basscss) with utility classes and more OOCSS style components added as needed.

The structure and naming conventions are influenced by Harry Robert's Inverted Triangle CSS architecture **[ITCSS](http://itcss.io/)**.

- **a**ppliance
- **e**lements
- **o**bjects
- **u**tility

> The order is `!important` to prevent unexpected over-rides.

Oh, and the **i**ndex.css completes the "vowel" theme.

## Usage
Currently using **postcss** to compile the separate stylesheets.

These are the postcss plugins that may or may not currently be required. *I plan to trim this down in the very near future.*
```
"postcss-color-function": "^2.0.1",
"postcss-custom-media": "^5.0.1",
"postcss-custom-properties": "^5.0.1",
"postcss-import": "^9.0.0",
"postcss-increase-specificity": "^0.3.0",
"postcss-inline-svg": "^2.3.0",
"postcss-mixins": "^5.4.1",
"postcss-nested": "^1.0.0",
"postcss-plugin-context": "^2.0.0",
"postcss-remove-root": "^0.0.2",
"postcss-simple-vars": "^3.0.0",
"postcss-strip-units": "^1.2.0",
```
