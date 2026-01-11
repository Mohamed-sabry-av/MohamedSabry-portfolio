# Quick Reference Guide - New Portfolio Design

## 🎨 Color Variables

### Light Theme

```css
--bg-primary: #ffffff
--bg-secondary: #f8fafc
--text-primary: #0f172a
--text-secondary: #475569
--accent-primary: #3b82f6
--accent-secondary: #8b5cf6
```

### Dark Theme

```css
--bg-primary: #0f172a
--bg-secondary: #1e293b
--text-primary: #f8fafc
--text-secondary: #cbd5e1
--accent-primary: #60a5fa
--accent-secondary: #a78bfa
```

### Gradients

```css
--accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--accent-gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
--accent-gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
```

---

## 🧩 Reusable CSS Classes

### Buttons

- `.btn-modern` - Base modern button
- `.btn-primary-gradient` - Gradient button
- `.btn-outline-modern` - Outlined button

### Cards

- `.glass-card` - Glassmorphism card effect
- `.skill-badge` - Skill badge/pill

### Text

- `.gradient-text` - Gradient colored text
- `.section-title` - Section heading with underline

### Animations

- `.fade-in` - Fade in animation (add `.visible` to trigger)

---

## 📱 Responsive Breakpoints

```css
@media (max-width: 576px) /* Mobile */ @media (max-width: 768px) /* Tablet */ @media (max-width: 992px); /* Small Desktop */
```

---

## 🔧 Your Contact Information

```
Name: Mohamed Sabry
Title: Full-Stack Developer
Email: Mohamed.Sabry.AV@gmail.com
Phone: +20 106 2439 552
Location: Cairo, Egypt
LinkedIn: linkedin.com/in/mohamed-sabry200/
GitHub: Mohamed-sabry-av
```

---

## 📊 Your Stats

- **Experience**: 2+ years
- **Projects**: 10+ completed
- **Certifications**: 5+

---

## 🛠️ Tech Stack (from your CV)

### Backend

- Nest.js, Express.js, RESTful APIs, MVC patterns

### Frontend

- Angular (SSR 19), React, Next.js (SSR/SSG), Vue.js
- Tailwind CSS, Bootstrap, SCSS, shadcn/ui

### Databases

- PostgreSQL, MySQL, MongoDB, Redis

### DevOps

- Docker, CI/CD (GitHub Actions), AWS, Vercel, Netlify

### Languages

- JavaScript, ES6, TypeScript, C, C++

### Security

- JWT, OAuth2, Cookies & Sessions, CORS, CSRF, XSS protection

---

## 📁 File Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          ✅ Updated
│   │   ├── hero/            ✅ Updated
│   │   ├── about/           ⏳ To Update
│   │   ├── skills/          ✅ Updated
│   │   ├── experience/      ⏳ To Update
│   │   ├── projects/        ⏳ To Update
│   │   ├── contact/         ⏳ To Update
│   │   └── footer/          ⏳ To Update
│   └── app.component.*
├── assets/
│   ├── img/
│   │   └── my_image/
│   │       ├── me.jpg       🔄 Replace with your photo
│   │       └── profile_placeholder.png  ✅ Generated
│   └── cv/
│       └── Mohamed_Sabry_CV.pdf  ⏳ To Add
└── styles.css               ✅ Updated
```

---

## 🎯 To-Do Checklist

- [ ] Replace `me.jpg` with your professional photo (white background)
- [ ] Create and add CV PDF to `assets/cv/`
- [ ] Update About section
- [ ] Update Experience section
- [ ] Update Projects section
- [ ] Update Contact section
- [ ] Update Footer
- [ ] Test on mobile devices
- [ ] Test dark/light theme
- [ ] Deploy to production

---

## 💡 Tips

1. **Profile Photo**: Use a professional headshot with white background, 500x500px, under 100KB
2. **CV PDF**: Export your CV as PDF and save to `src/assets/cv/Mohamed_Sabry_CV.pdf`
3. **Testing**: Always test both light and dark themes
4. **Performance**: Keep images optimized (use WebP format when possible)
5. **Accessibility**: Ensure good color contrast for text

---

**Last Updated**: January 11, 2026
