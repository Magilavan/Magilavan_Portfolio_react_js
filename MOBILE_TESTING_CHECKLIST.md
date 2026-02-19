# Mobile Testing Checklist

## Quick Test Guide for Your Portfolio

### ✅ Navigation Testing
- [ ] Hamburger menu appears on mobile (≤768px)
- [ ] Menu icon animates when clicked (transforms to X)
- [ ] Navigation drawer slides in from right
- [ ] All menu items are visible and clickable
- [ ] Menu closes when clicking a link
- [ ] Menu closes when clicking outside (optional feature)
- [ ] Logo remains visible and clickable

### ✅ Hero Section
- [ ] Content stacks vertically on mobile
- [ ] Profile image is centered
- [ ] Profile image scales appropriately (200px on small screens)
- [ ] Text is centered and readable
- [ ] "View My Work" button is easily tappable
- [ ] No horizontal scrolling

### ✅ Skills Section
- [ ] Skill cards stack in single column on mobile
- [ ] Cards are full width with proper padding
- [ ] Text is readable and properly sized
- [ ] Hover effects work (or tap effects on mobile)
- [ ] No content overflow

### ✅ Projects Section
- [ ] Projects display in single column on mobile
- [ ] Project images load and scale properly
- [ ] Tech pills wrap correctly
- [ ] "Details" and "GitHub" buttons are full width
- [ ] Buttons stack vertically on small screens
- [ ] Pagination buttons are easily tappable

### ✅ Contact Form
- [ ] Form inputs are full width
- [ ] Input fields have adequate padding
- [ ] Labels are visible and readable
- [ ] Submit button is full width on mobile
- [ ] Keyboard appears correctly for email/text inputs
- [ ] Success/error messages display properly

### ✅ Footer
- [ ] Footer content stacks vertically
- [ ] All sections are centered
- [ ] Social links are easily tappable
- [ ] Quick links work correctly
- [ ] Copyright text is visible

### ✅ Project Detail Pages
- [ ] Content is readable with proper margins
- [ ] Images scale to fit screen
- [ ] Headings are properly sized
- [ ] Lists are properly indented
- [ ] No horizontal scrolling
- [ ] Back navigation works

### ✅ General Mobile Experience
- [ ] No horizontal scrolling on any page
- [ ] All text is readable (minimum 14px)
- [ ] Touch targets are at least 44x44px
- [ ] Page loads quickly
- [ ] Smooth scrolling works
- [ ] No layout shifts during load
- [ ] Images don't overflow containers

### ✅ Cross-Device Testing
Test on these screen sizes:
- [ ] 320px (iPhone SE, older phones)
- [ ] 375px (iPhone 12/13 Mini)
- [ ] 390px (iPhone 12/13/14)
- [ ] 414px (iPhone Plus models)
- [ ] 768px (iPad portrait)
- [ ] 1024px (iPad landscape)

### ✅ Browser Testing
- [ ] Chrome Mobile
- [ ] Safari iOS
- [ ] Samsung Internet
- [ ] Firefox Mobile

## How to Test

### Method 1: Chrome DevTools
1. Open your site in Chrome
2. Press F12 to open DevTools
3. Click the device icon (Ctrl+Shift+M)
4. Select different devices from dropdown
5. Test all interactions

### Method 2: Real Device Testing
1. Start your dev server: `npm start`
2. Find your computer's IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. On your phone, visit: `http://YOUR_IP:3000`
4. Test all features

### Method 3: Online Tools
- Use BrowserStack or LambdaTest for cross-device testing
- Use Google's Mobile-Friendly Test
- Use PageSpeed Insights for performance

## Common Issues & Fixes

### Issue: Menu doesn't close
**Fix**: Check that onClick handlers are on all nav links

### Issue: Text too small
**Fix**: Adjust font-size in media queries in index.css

### Issue: Horizontal scrolling
**Fix**: Check for elements with fixed widths, add `overflow-x: hidden` to body

### Issue: Images too large
**Fix**: Ensure all images have `max-width: 100%` and `height: auto`

### Issue: Buttons too small
**Fix**: Ensure minimum 44px height/width for touch targets

## Performance Checklist
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] No layout shifts (CLS < 0.1)
- [ ] Images optimized and compressed
- [ ] CSS minified for production

## Accessibility Checklist
- [ ] All interactive elements keyboard accessible
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Alt text on all images
- [ ] Sufficient color contrast
- [ ] Form labels properly associated
- [ ] ARIA labels on icon buttons

## Notes
- Test in both portrait and landscape orientations
- Test with slow 3G connection simulation
- Test with different font size settings
- Test with screen readers if possible

---

**Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete

Last Updated: [Add date when you complete testing]
