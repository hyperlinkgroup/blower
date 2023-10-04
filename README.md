# Blower Frontend Framework

Blower is a modern CSS frontend framework for modern browsers. It brings full support for RTL languages, uses the new CSS Cascade Layers syntax and just doesn't want to stay in your way.

## Currently in development
Blower is currently in development and not ready for production use. You can still try it out, but be aware that there could be still some bugs and missing features. Watch this project to follow the development progress.

## Minimum Browser support
As Blower tries to bring you the newest CSS features, it requires a modern browser.  
The minimum browser support (according to **[Can I use](https://caniuse.com/css-cascade-layers)**) is:

* Chrome 99
* Edge 99
* Safari 15.4
* Firefox 97
* Opera 86

So if your target group uses browser versions that were released after March 2022, you're good to go.

## CSS Cascade Layers
CSS Cascade Layers are a new CSS feature that allows you to define a layer for your CSS rules. This allows you to define a layer for your CSS rules, so that you can easily override them. This is especially useful for CSS frameworks, as it allows you to override the framework's CSS rules without having to use `!important`. 

Blower wrap itself in a global layer called simply `blower`, so that you can easily see in your dev tools which rules are from Blower and which are not. As it's possible to nest layers Blower brings some additional layers to group its rules:
* `reset` – This layer contains a simple modern CSS reset 
* `base` – All of Blowers base styles, this contains base HTML elements and stuff like that
* `layout` – All website layout related styles as themes or the navigation classes
* `components` – The core of Blower, all components like buttons, cards, etc. are in this layer
* `utilities` – Everything you love from utility based CSS frameworks will be in this layer
