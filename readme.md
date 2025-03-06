# Premium Modal System 🎯
[![Live Demo](https://img.shields.io/badge/Live-Demo-blue.svg)](https://myselfmudasir.github.io/Core-HTML-CSS-Model-Library)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/MySelfMudasir/Core-HTML-CSS-Model-Library)

A lightweight, flexible, and beautiful modal system with smooth animations and extensive customization options. No dependencies required!

![Modal Preview](https://raw.githubusercontent.com/MySelfMudasir/HTML-CSS-Popup-Model-Custom-Library/refs/heads/main/Screenshot%202024-12-31%20150907.jpg)

## ✨ Features

- 🎨 **Beautiful Design** - Modern, clean, and professional looking modals
- 🎭 **Multiple Animations** - Fade, slide, zoom transitions with smooth easing
- 📱 **Responsive** - Works perfectly on all screen sizes
- 🎛️ **Flexible Positioning** - Top, center, or bottom placement
- 📐 **Various Sizes** - From small to fullscreen
- ⚡ **Lightweight** - No dependencies, pure HTML/CSS/JS
- 🔧 **Easy to Customize** - Simple class-based customization
- 🎯 **Accessible** - Keyboard navigation and screen reader friendly

## 🚀 Quick Start

1. Include the CSS and JavaScript files in your project:
```html
<link rel="stylesheet" href="style.css">
<script src="style.js"></script>
```

2. Add the modal HTML structure:
```html
<div id="myModal" class="modal fade modal-lg">
    <div class="modal-backdrop"></div>
    <div class="modal-content">
        <div class="modal-header">
            <h2>Modal Title</h2>
            <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
            Your content here
        </div>
        <div class="modal-footer">
            <button class="btn-secondary">Cancel</button>
            <button class="btn-primary">OK</button>
        </div>
    </div>
</div>
```

3. Trigger the modal:
```html
<button onclick="showModal('myModal')">Open Modal</button>
```

## 🎨 Customization Options

### Size Options
```html
<div class="modal modal-sm">  <!-- Small modal (300px) -->
<div class="modal modal-md">  <!-- Medium modal (500px, default) -->
<div class="modal modal-lg">  <!-- Large modal (800px) -->
<div class="modal modal-xl">  <!-- Extra large modal (1140px) -->
<div class="modal modal-full"> <!-- Fullscreen modal -->
```

### Position Options
```html
<div class="modal modal-center"> <!-- Center of screen (default) -->
<div class="modal modal-top">    <!-- Top of screen -->
<div class="modal modal-bottom"> <!-- Bottom of screen -->
```

### Animation Options
```html
<div class="modal fade">      <!-- Fade animation -->
<div class="modal slide-up">  <!-- Slide from bottom -->
<div class="modal slide-down"> <!-- Slide from top -->
<div class="modal zoom">      <!-- Zoom in/out -->
```

### Additional Options
```html
<div class="modal scrollable">        <!-- Scrollable content -->
<div class="modal no-backdrop">       <!-- No dark background -->
<div class="modal no-close">          <!-- No close button -->
<div class="modal no-backdrop-close"> <!-- Disable closing on backdrop click -->
```

### Backdrop Color Options
```html
<div class="modal-backdrop modal-backdrop-black"> <!-- Black backdrop -->
<div class="modal-backdrop modal-backdrop-white"> <!-- White backdrop -->
```

## 📚 API

### JavaScript Methods

```javascript
// Show modal
showModal('modalId');

// Hide modal
hideModal('modalId');
```

### Events
The modal system triggers standard DOM events that you can listen to:

```javascript
const modal = document.getElementById('myModal');

modal.addEventListener('show', function() {
    console.log('Modal is showing');
});

modal.addEventListener('hide', function() {
    console.log('Modal is hiding');
});
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📦 Installation

### Using CDN
```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.example.com/premium-modal/1.0.0/modal.css">

<!-- JavaScript -->
<script src="https://cdn.example.com/premium-modal/1.0.0/modal.js"></script>
```

### Using NPM
```bash
npm install premium-modal-system
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name
- GitHub: [@MySelfMudasir](https://github.com/MySelfMudasir)
- Instagram: [@MySelfMudasir](https://instagram.com/MySelfMudasir)

## 🙏 Acknowledgments

- Inspired by Bootstrap's modal system
- Icons from [Feather Icons](https://feathericons.com)
- Animation timing functions from [cubic-bezier.com](https://cubic-bezier.com)

