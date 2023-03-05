# TailwindCSS Debugger



<p align="center">
	<img src="https://github.com/kimagin/Tailwind-Debugger/blob/master/Pasted%20image%2020230305181541.png?raw=true" width="350" height="70" style="max-width: 100%;">
</p>

<p align="center">
  A small module to show the current Window information and the media query state of <a href="https://www.tailwindcss.com">TailwindCSS</a> in your current project.
</p>

------

## Documentation

1) Import both files into a folder in your project.
2) For the tailwind-debugger.css import it in on top of your global file :

```css
@import url("tailwind-debugger.css");
```

3) Now you can import tailwind-debugger.js directly into the html file at the end of the `<body>` tag
```html
<script type="module" src="/tailwind-debugger.js"></script>
</body>
```



>Please remember to add the `type="module"` in the script



4) At this point simply create a div inside the `<body>` and add `"data-debugger"` as an attribute:

```html
<div data-debugger></div>
```

If you're interested in contributing to Tailwind CSS Debugger, I will be more than happy.
