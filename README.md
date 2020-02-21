# native-mathjax
A simple NPM nodule to show Mathmatical equations using MathJAX in react nativeusing Webview.
It uses AutoHeightwebview to render the content as webview and set height of the content automatically.

# Installation
`npm install react-native-mathjax --save`

# Usage
```javascript
<MathJax
  // HTML content with MathJax support
  html={'$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$<br><p>This is an equation</p>'}
  //use it with scrollview like this 
  <ScrollView nestedScrollEnabled = {true} style={{maxHeight:220}} >
  <MathJax html={"$$\\frac{1}{\\sqrt{x^2 + 1}}$$"}/>
  </ScrollView>
  // MathJax configuration option : You can add your own configuration here. Default configuration this Module uses is : If you want to use this configuration, then no need to use this prop in your code.
  defaultConfiguration = {{
	jax: ["input/TeX","output/HTML-CSS"],
            tex2jax: { inlineMath: [["$$","$$"],["\\(","\\)"]] },
            showMathMenu: false,
            showMathMenuMSIE: false
  }}
 />

```
