<h1 align="center">floating-brain</h1>
<p align="center">
<a href="https://www.npmjs.com/package/floating-brain"><img src="https://i.pinimg.com/originals/0d/59/22/0d5922d05bf2866c850a470f3ee84c0b.png" height="30"/></a>
</p>
<br/>

* A beautiful API for your portfolio, to present your skills
* Works with JSON
* Responsive and easy to use
* Styling can be easily customized!

<img src="https://user-images.githubusercontent.com/38051431/67490825-2510ad80-f674-11e9-84a6-09b8a53e1aa9.gif">

## ➤ Table of Contents
* [➤ Description](#-description)
* [➤ 0. Installation](#-0-installation)
* [➤ 1. Set your data](#-1-set-your-data)
* [➤ 2. Feed the module with data](#-2-feed-the-module-with-data)
* [➤ 3. Customize styling](#-3-customize-styling)
* [➤ License](#-license)

## ➤ Description
Floating-brain is a simple to use API, allowing you to present your skills and their description in a unique and eye-catching way. In order to use it, all you need is to call a function, where you will pass the data you need.
	
## ➤ 0. Installation
Install the component...
```javascript
npm install floating-brain
```
...and import it afterwards
```javascript
<script type="module">
import { floatingBrain } from "./lib/index.js";
</script>
```
## ➤ 1. Set your data

You can pass exactly 5 skills with they descriptions. All of them need to be grouped into a one object. The best is for you to define the object, and the pass it in the arguments.
You should also chose the placeholder where the descriptions will be displayed after the user hovers over a certain skill. Finally, you need to pass the fallback sentence, to which the placeholder for skills descriptions will be reseted after the user moves the mouse or taps away from the SVG.

Optionally, you may also chose the parent, where you want to append the module. If you don't define the parent, the floating brain will be appended to the body of the document. Another optional argument is the width of the module, to which the whole svg will scale. The default is defined to be "40vw", however you might change it.

```javascript
 let mySkills = {
            sleeping: "I sleep",
            eating: "I eat",
            running: "I don't run",
            jumping: "I can jump",
            crying: "I cri"
        };
let fallbackText = "Check out my skills";
let placeholder =  document.querySelector("p");
let parent = document.querySelector("#parent");
let width = "35vw"
```
## ➤ 2. Feed the module with data
After importing the component and creating your own data, it's time to combine both.

<b>Vanila JS</b>:
```javascript
let brain = floatingBrain(mySkills, fallbackText, placeholder, width, parent);
```

## ➤ 3. Customize styling
The module can be easily customized according to your style needs, just like in the example below:
<img src="https://user-images.githubusercontent.com/38051431/67490835-28a43480-f674-11e9-877a-172f874be236.png">

In order to implement your own styling, all you need is to define the css variables mentioned in the code below.
The font is inherited, so you can simply assign it to the module f.ex. through a unique id.
```css
:host{    
    --skill1-background-color: yellow;
    --skill2-background-color: orange;
    --skill3-background-color: red;
    --skill4-background-color: green;
    --skill5-background-color: purple;
    --floating-brain-font-family: "Dosis";
}
#mytreeview {
font-family: "Dosis", sans-serif;
color: purple;
}
```

If you decide not to apply any styling, the module will fallback to the default styling, as in the demo gif.

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).
