

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application should now be running at [http://localhost:5173](http://localhost:5173).

## Build

To create a production build, run:

```bash
npm run build
```

Then, you can preview the production build with:

```bash
npm run preview
```

## Folder Structure

```
your-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── sections/
│   │       ├── Home.jsx
│   │       ├── About.jsx
│   │       ├── Projects.jsx
│   │       └── Contact.jsx
│   ├── index.css          # Tailwind base styles and global styles
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

