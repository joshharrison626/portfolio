# Easy input validation with HTML and React

describe how form validation can get unwieldy

TL;DR of the solution
uses the `input`'s [`pattern`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern) attribute
uses the `:valid` and `:invalid` CSS pseudo-classes to display error messages
uses the `input`'s `checkValidity` to check the validity (test with `reportValidity`) too
uses the `input`'s `setCustomValidity` to display a custom message

Benefits
    accessibility
    native HTML attributes
    code management

Implementation
## Basic Setup
This guide assumes that you already know how to build a simple `<input />` as a stateful component with React's `useState` hook and the `input`'s `value` and `onChange` attributes. For further information you can read React's [input API reference](https://react.dev/reference/react-dom/components/input). Let's take a quick look at our basic setup.

We are going to use minimal CSS styling throughout so that we can focus just on the HTML structure and React functionality. At the end of this guide, I'll include some quick styling that will make it more visually appealing.

### HTML
Not much to see here, and we won't be using it anymore beyond this `#root` element.
```html
<div id="root"></div>
```

### CSS
Simple alignment of the `#root` container to get our examples into the center of the viewport.
```css
#root {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### JS
Creates a simple `label` and `input` for entering a string of text to be used as someone's username.
```javascript
import React, { useState } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";


function RootContainer() {
  const [username, setUsername] = useState('');
 
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  return (
    <div>
      <label for="signup-username">Username</label>
      <input id="signup-username" type="text" value={username} onChange={handleUsernameChange} required />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootContainer />
  </React.StrictMode>
);
```

### Result
<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="xxorWBx" data-pen-title="Easy input validation 1" data-user="Josh-Harrison" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Josh-Harrison/pen/xxorWBx">
  Easy input validation 1</a> by Josh Harrison (<a href="https://codepen.io/Josh-Harrison">@Josh-Harrison</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Add a validation pattern
We are going to use the `input`'s [`pattern` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) to specify a regular expression that the value should match. For our example, we will require that the username contains 8 to 10 alphanumeric characters and no special characters. We'll also add a simple style to the `input`'s `:valid` and `:invalid` pseudo-classes to illustrate the two states.

> NOTE: These pseudo-classes use red and green to convey invalid and valid. To meet accessibility guidelines it is never recommended to convey meaning by color alone. We will improve these styles as we continue.

```javascript
// ...

// Add the pattern attribute and value to the input element
return (
    <div>
      <label for="signup-username">Username</label>
      <input 
        id="signup-username"
        type="text"
        value={username}
        onChange={handleUsernameChange}
        required
        pattern="\w{8,10}"
      />
    </div>
  );

// ...
```
```css
/* Add two pseudo-classes to your CSS */
#signup-username:invalid {
  border: 3px solid red;
}

#signup-username:valid {
  border: 3px solid green;
}
```

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="poXwVaM" data-pen-title="Easy input validation 2" data-user="Josh-Harrison" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Josh-Harrison/pen/poXwVaM">
  Easy input validation 2</a> by Josh Harrison (<a href="https://codepen.io/Josh-Harrison">@Josh-Harrison</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
    
## Add helper text

Now we will add helper text to the `input` to describe the expected format. We need to make sure that the helper text is accessible to support a screen reader. The [`pattern` spec](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern#usability_and_accessibility_considerations) suggests using a `title` attribute. The [`title` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#title) is announced is represented as a tooltip and is announced as secondary or supplemental information by a screen reader.

```javascript
// ...

// Add the title attribute and value to the input element
return (
    <div>
      <label for="signup-username">Username</label>
      <input 
        id="signup-username"
        type="text"
        value={username}
        onChange={handleUsernameChange}
        required
        pattern="\w{8,10}"
        title="8 characters, should not contain any spaces or special characters"
      />
    </div>
  );

// ...
```
* Mouse Hover
    
    <img src="../assets/images/easy-input-validation-tooltip.png" alt="" />
* Screen Reader

    <img src="../assets/images/easy-input-validation-sr-1.png" alt="" />
    <img src="../assets/images/easy-input-validation-sr-2.png" alt="" />

    
    
    this setup assumes you already know how to connect an input to react state management
    input and attributes
        start with type=text for simplicity
        pattern
        validity
            verify whether validity is always there or only if pattern is used
    react setup for input (leave details out)
    include a ref (link)
    show validity and valid state
    screen reader output
Other input types
    password
    email
    link to other types

OUttro
    link to codepen for final example this is based off of

