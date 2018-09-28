# vowel.css
Yet another CSS library. There are many like it, but this one is mine.

**vowel.css** is a set of base element styles and functional styles that I've been using with my own projects for quite some time.

The `elements/` styles are a mix of ideas from [sanitize.css](https://github.com/csstools/sanitize.css), [Bootstrap Reboot](https://github.com/twbs/bootstrap/blob/v4-dev/dist/css/bootstrap-reboot.css) and my own. 
Element styles should provide a solid base style with low specificity.

The functional classes basically evolved from [Basscss](https://github.com/basscss/basscss) with utility classes and more OOCSS style components added as needed.

The structure and naming conventions are influenced by Harry Robert's Inverted Triangle CSS architecture **[ITCSS](http://itcss.io/)**.

- **a**ppliance
- **e**lements
- **o**bjects
- **u**tility

> The order is `!important` to prevent unexpected over-rides.

And the **i**ndex.css completes the "vowel" theme.

## Usage
Currently using **postcss** to compile the stylesheets.

These are the postcss plugins that may or may not currently be required. *This changes over time.*
```
    "postcss-discard-comments"
    "postcss-discard-empty"
    "postcss-extend-rule"
    "postcss-import"
    "postcss-preset-env"
    "postcss-simple-vars"
```
