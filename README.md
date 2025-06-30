# Cerita Ketindan

A modern, responsive website showcasing the rich cultural heritage and tourism potential of Ketindan Village, Lawang, Malang Regency, East Java, Indonesia.

## 🌟 Overview

Cerita Ketindan is a comprehensive digital platform that presents the historical legacy, cultural artifacts, tourism destinations, and local businesses of Ketindan Village. The website features an immersive user experience with interactive elements, virtual tours, and detailed information about the village's heritage.

## ✨ Features

### 🏛️ Core Sections

- **Hero Slider**: Interactive 3D carousel showcasing village highlights
- **Village History**: Comprehensive historical timeline and narratives
- **Cultural Heritage**: Detailed catalog of historical artifacts and relics
- **Tourism Destinations**: Interactive guide to local attractions
- **Local Businesses (UMKM)**: Showcase of village enterprises and products
- **Virtual Tour**: 360° immersive experience of the village

### 🎨 Design & UX

- **Responsive Design**: Optimized for all device sizes
- **Traditional Aesthetics**: Batik-inspired patterns and ornamental designs
- **Smooth Animations**: CSS-based transitions and micro-interactions
- **Accessibility**: WCAG-compliant design principles
- **Performance Optimized**: Fast loading times and efficient asset management

### 🚀 Technical Features

- **Launch Countdown**: Animated countdown timer for website launch
- **Launch Transition**: Smooth animated transition from countdown to main site
- **Dynamic Routing**: React Router-based navigation with slug-based detail pages
- **SEO Optimized**: Meta tags and structured data for search engines
- **Analytics Integration**: Built-in analytics tracking

## 🛠️ Technology Stack

### Frontend

- **React** 
- **TypeScript**
- **Tailwind CSS**
- **React Router**
- **Vite**

### Fonts & Typography

- **Noto Serif** - Primary serif font for headings
- **Noto Serif Display** - Display font for titles
- **Plus Jakarta Sans** - Sans-serif font for body text

### Assets & Media

- **SVG Icons** - Scalable vector graphics
- **Optimized Images** - WebP and JPEG formats
- **Custom Ornaments** - Traditional Javanese design elements

## 📁 Project Structure

```
src/
├── components/          
│   ├── Card.tsx        
│   ├── Navbar.tsx      
│   ├── Footer.tsx      
│   ├── HeroSlider.tsx 
│   ├── SectionTitle.tsx
│   ├── LaunchTransition.tsx 
│   └── ...
├── pages/              
│   ├── Home.tsx       
│   ├── CountdownPage.tsx
│   ├── DetailPage.tsx 
│   └── ...
├── data/               
│   ├── sliderData.ts  
│   ├── wisataData.ts   
│   ├── peninggalanData.ts
│   └── UMKMData.ts  
├── assets/           
│   ├── images/        
│   └── ornaments/     
├── hooks/              
├── config/           
└── routes/            
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AiFahri/cerita-ketindan.git
   cd cerita-ketindan
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment

The project is configured for deployment on various platforms:

- **Vercel**: Zero-config deployment
- **Netlify**: Continuous deployment from Git
- **GitHub Pages**: Static site hosting
- **Traditional Hosting**: Upload `dist/` folder contents

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Configuration

### Countdown Configuration

Edit `src/config/countdown.ts` to customize launch settings:

```typescript
export const COUNTDOWN_CONFIG = {
  LAUNCH_DATE: "2025-06-28T10:03:30",
  REDIRECT: {
    onComplete: "/",
    autoRedirect: true,
  },
  CONTACT: {
    phone: "Ketindan, Lawang, Kabupaten Malang",
    instagram: "@pakdesadewa.berbakti",
    copyright: "© 2025 Cerita Ketindan",
  },
};
```

### Content Management

Update content in the `src/data/` directory:

- `sliderData.ts` - Hero slider content and navigation items
- `wisataData.ts` - Tourism destinations with images and descriptions
- `peninggalanData.ts` - Cultural artifacts and historical items
- `sejarahData.ts` - historical information of village
- `UMKMData.ts` - Local businesses and products

### Virtual Tour Integration

The website includes a 360° virtual tour powered by Panoee:

```typescript
// Virtual tour URL in VirtualTourSection.tsx
const VIRTUAL_TOUR_URL = "https://tour.panoee.net/685eb7a5329df6da384a5c61";
```

## 🎯 Key Pages & Routes

- **`/`** - Main homepage with all sections
- **`/countdown`** - Launch countdown page
- **`/demo`** - Launch transition demo
- **`/wisata/:slug`** - Tourism destination details
- **`/peninggalan/:slug`** - Cultural artifact details
- **`/umkm/:slug`** - Local business details

## 🎨 Customization

### Adding New Content

1. **Tourism Destinations**: Add entries to `src/data/wisataData.ts`
2. **Cultural Artifacts**: Add entries to `src/data/peninggalanData.ts`
3. **Local Businesses**: Add entries to `src/data/UMKMData.ts`
4. **Hero Slides**: Update `src/data/sliderData.ts`

### Styling Customization

- **Colors**: Modify Tailwind config or CSS custom properties
- **Fonts**: Update font imports in `index.html`
- **Ornaments**: Replace SVG files in `src/assets/`

## 🚀 Performance Features

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Route-based code splitting with React Router
- **Asset Optimization**: Vite handles asset bundling and optimization
- **Responsive Images**: Multiple image formats and sizes
- **Caching**: Browser caching for static assets

## 📊 Analytics & SEO

- **Google Analytics**: Integrated tracking (configure in Analytics component)
- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated sitemap for SEO

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Write meaningful commit messages
- Test on multiple devices and browsers

## 🐛 Troubleshooting

### Common Issues

**Build Errors**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Port Already in Use**

```bash
# Use different port
npm run dev -- --port 3001
```

**Image Loading Issues**

- Ensure images are in `src/assets/`
- Check file paths and extensions
- Verify image optimization settings

## 👥 Team

**Developed by Tim Sadewa UB - Bakti BCA Awardee**

## 🔗 Links

- **Live Demo**: [https://cerita-ketindan.vercel.app](https://cerita-ketindan.vercel.app)
- **Virtual Tour**: [https://tour.panoee.net/685eb7a5329df6da384a5c61](https://tour.panoee.net/685eb7a5329df6da384a5c61)
- **Repository**: [https://github.com/AiFahri/cerita-ketindan](https://github.com/AiFahri/cerita-ketindan)

---

**© 2025 Cerita Ketindan. Preserving heritage, embracing the future.**
