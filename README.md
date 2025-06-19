# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![mobile design screenshot](/images/screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript (for interactive elements)

### What I learned

- **CSS filter property** to change the color of SVG icons from a dark color to white (and vice-versa) based on active states.
  ```
  filter: brightness(0) invert(1)
  ```
- **JavaScript DOM Manipulation** to manage the visibility and styling of the share social links.

  ```
  function toggleShare() {
  shareDiv.classList.toggle("active");
  shareButton.classList.toggle("active");
  shareImage.classList.toggle("active");
  }
  ```

- **Absolute Positioning** for the share overlay, especially for the desktop tooltip and its arrow.
- **Flexbox Alignment** for fine-tuning vertical alignment for elements with different heights (like the profile picture, multi-line text, and button) using align-items.

### Continued development

- I'd like to experiment with more advanced CSS animations or transitions.
- Improving my vanilla JavaScript skills for more complex interactions.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) An invaluable resource for CSS, HTML, and JavaScript.
- [CSS-Tricks](https://css-tricks.com/) Great articles and guides on various CSS topics.
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) Guide on flexbox at CSS-Tricks
- [Flexbox Froggy](https://flexboxfroggy.com/) A game to learn Flexbox.

## Author

- Frontend Mentor - [@pheight-89](https://www.frontendmentor.io/profile/pheight-89)
