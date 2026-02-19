# Responsive Design Reference

## Breakpoints Overview

Your portfolio uses a mobile-first approach with two main breakpoints:

```css
/* Base styles: Mobile (320px - 768px) */
/* Default styles work for mobile devices */

/* Tablet: 768px and below */
@media (max-width: 768px) {
  /* Tablet-specific adjustments */
}

/* Mobile: 480px and below */
@media (max-width: 480px) {
  /* Small mobile devices */
}
```

## Component Breakpoints

### Header / Navigation
| Screen Size | Behavior |
|------------|----------|
| > 768px | Horizontal navigation bar |
| ≤ 768px | Hamburger menu with slide-in drawer |
| ≤ 480px | Wider drawer (80% width) |

### Hero Section
| Screen Size | Layout | Image Size | Font Size |
|------------|--------|------------|-----------|
| > 768px | Side-by-side | 300px | 48px (h1) |
| ≤ 768px | Stacked, centered | 250px | 36px (h1) |
| ≤ 480px | Stacked, centered | 200px | 28px (h1) |

### Skills Section
| Screen Size | Layout | Card Width |
|------------|--------|------------|
| > 768px | Grid (auto-fit, min 250px) | Flexible |
| ≤ 768px | Grid (auto-fit, min 200px) | Flexible |
| ≤ 480px | Single column | Full width |

### Projects Section
| Screen Size | Grid Columns | Card Layout |
|------------|--------------|-------------|
| > 768px | Auto-fit (min 300px) | Side-by-side |
| ≤ 768px | Auto-fit (min 280px) | Flexible |
| ≤ 600px | 1 column | Stacked |
| ≤ 520px | 1 column | Compact |

### Contact Form
| Screen Size | Layout | Button Width |
|------------|--------|--------------|
| > 768px | Standard | Auto |
| ≤ 768px | Full width inputs | Auto |
| ≤ 600px | Stacked buttons | Full width |
| ≤ 480px | Compact padding | Full width |

### Footer
| Screen Size | Layout | Alignment |
|------------|--------|-----------|
| > 768px | 3 columns | Left-aligned |
| ≤ 768px | Stacked | Centered |
| ≤ 480px | Compact | Centered |

## Typography Scale

### Desktop (> 768px)
```css
html { font-size: 16px; }
h1 { font-size: 48px; }
h2 { font-size: 32px; }
h3 { font-size: 22px; }
body { font-size: 16px; }
```

### Tablet (≤ 768px)
```css
html { font-size: 15px; }
h1 { font-size: 36px; }
h2 { font-size: 28px; }
h3 { font-size: 20px; }
body { font-size: 15px; }
```

### Mobile (≤ 480px)
```css
html { font-size: 14px; }
h1 { font-size: 28px; }
h2 { font-size: 24px; }
h3 { font-size: 18px; }
body { font-size: 14px; }
```

## Spacing Scale

### Padding (Sections)
| Screen Size | Padding |
|------------|---------|
| > 768px | 60px 8% |
| ≤ 768px | 40px 5% |
| ≤ 480px | 30px 4% |

### Container Padding
| Screen Size | Padding |
|------------|---------|
| > 768px | 0 20px |
| ≤ 768px | 0 16px |
| ≤ 480px | 0 12px |

### Gap Between Elements
| Screen Size | Gap |
|------------|-----|
| > 768px | 30px |
| ≤ 768px | 20px |
| ≤ 480px | 16px |

## Touch Target Sizes

All interactive elements follow these minimum sizes:

```css
button, a {
  min-height: 44px;
  min-width: 44px;
}
```

### Recommended Sizes
- **Minimum**: 44x44px (Apple HIG, WCAG)
- **Comfortable**: 48x48px (Material Design)
- **Optimal**: 56x56px (for primary actions)

## Common Patterns Used

### 1. Flexbox for Navigation
```css
.nav ul {
  display: flex;
  gap: 20px;
}

@media (max-width: 768px) {
  .nav ul {
    flex-direction: column;
  }
}
```

### 2. CSS Grid for Cards
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

### 3. Responsive Images
```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### 4. Stacking Layout
```css
.container {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
}
```

## Performance Tips

### 1. Use CSS Instead of JavaScript
- CSS transitions for animations
- CSS media queries for responsive design
- CSS Grid/Flexbox for layouts

### 2. Optimize Images
```bash
# Recommended image sizes
- Hero image: 600x600px (mobile), 1200x1200px (desktop)
- Project images: 400x300px (mobile), 800x600px (desktop)
- Icons: 48x48px (1x), 96x96px (2x)
```

### 3. Lazy Loading
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

### 4. Minimize Reflows
- Avoid changing layout properties in JavaScript
- Use transform instead of top/left for animations
- Batch DOM reads and writes

## Browser Support

Your portfolio supports:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ iOS Safari 14+
- ✅ Chrome Android 90+

## CSS Features Used

- CSS Grid (97% browser support)
- Flexbox (99% browser support)
- CSS Variables (96% browser support)
- Media Queries (99% browser support)
- CSS Transitions (99% browser support)

## Debugging Tips

### Check Responsive Issues
```css
/* Add temporary borders to see layout */
* {
  outline: 1px solid red;
}
```

### Check Overflow
```css
/* Find horizontal scroll culprits */
* {
  outline: 1px solid red;
  overflow: hidden;
}
```

### Check Touch Targets
```javascript
// Run in console to highlight small touch targets
document.querySelectorAll('a, button').forEach(el => {
  const rect = el.getBoundingClientRect();
  if (rect.width < 44 || rect.height < 44) {
    el.style.outline = '2px solid red';
  }
});
```

## Quick Fixes

### Fix: Content Overflowing
```css
body {
  overflow-x: hidden;
}

* {
  max-width: 100%;
}
```

### Fix: Text Too Small
```css
@media (max-width: 480px) {
  html {
    font-size: 16px; /* Increase from 14px */
  }
}
```

### Fix: Buttons Too Small
```css
button, a {
  min-height: 48px;
  padding: 12px 24px;
}
```

## Resources

- [MDN: Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Google: Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Can I Use](https://caniuse.com/) - Check browser support
- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)

---

**Last Updated**: [Current Date]
**Version**: 1.0
