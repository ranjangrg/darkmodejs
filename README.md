# Dark Mode feature for Webpages

## How it works
Uses `JavaScript` and `CSS` to achieve dark-mode and light-mode color toggler. 

Styling is provided via `style.css`.


HTML elements are triggered and initiated via `code.js` file. It handles toggling of the color-modes via classes, namely `light-mode` and `dark-mode`.

> note: Library files can be compiled manually if needed. `style.scss` (SASS) for `style.css` and `code.ts` (Typescript) for `code.js`

## Usage
Import the `lib/darkmode/code.js` file within the html using `<script type="module"> ... </script>`.

Example,<br>
within `html` file:
```html
...
<!--
set 'data-dm-enable-color-mode' attribute to the 
body to enable dark mode feature (within the html body)
-->
<body data-dm-enable-color-mode>
	<!--
	set 'data-dm-use-color-mode' attribute to each 
	element which will use the darkmode feature
	-->
	<h1 data-dm-use-color-mode> ... </h1>
	<div data-dm-use-color-mode> ... </div>
	...
	<script type="module" src="./dist/lib/darkmode/code.js"></script>
</body>
...
```

within your project `JavaScript` file:
```js
import { DarkModeApp } from "./dist/lib/darkmode/code.js";
window.onload = function() {
	// create a 'DarkModeApp' object first
	const darkmode_app: DarkModeApp = new DarkModeApp();
	// call the init() method within 'DarkModeApp' object
	// to initiate the feature
	darkmode_app.init();
};
```
> if `DarkMode` library is located at `"./dist/lib/darkmode"`


Source code for `code.js` can be compiled via `Typescript` compiler as well. File to compile: `lib/darkmode/code.ts`


