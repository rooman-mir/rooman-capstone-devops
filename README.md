### DevOps Capstone Project - Rooman Mir

# 🛒 Mir's One-Stop Store

A modern e-commerce shopping cart application built with React + Vite, featuring full-screen responsive design and automated CI/CD pipeline using GitHub Actions.

## 📋 Project Overview

This project demonstrates a complete DevOps workflow using **100% free tools**:

- ✅ **Frontend:** React 19 + Vite (modern build tool)
- ✅ **Testing:** Vitest with comprehensive test coverage
- ✅ **Code Quality:** ESLint for static analysis
- ✅ **CI/CD:** GitHub Actions (free tier)
- ✅ **Deployment:** GitHub Pages (free hosting)
- ✅ **Artifact Management:** GitHub Actions artifacts
- ✅ **Release Management:** Automated versioning with Git tags

## 🚀 Features

- **Full-screen responsive design** - Optimized for all screen sizes
- View products with images, descriptions, and prices
- Add products to shopping cart
- Update quantities (increase/decrease)
- Remove items from cart
- Real-time cart total calculation
- Clear entire cart functionality
- **6 sample products** across Electronics, Sports, and Home categories

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/) (v10 or higher)
- [Git](https://git-scm.com/)

## 📦 Quick Start

```bash
# Clone the repository
git clone https://github.com/rooman-mir/rooman-capstone-devops.git
cd rooman-capstone-devops

# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:5173
```

## 🧪 Testing & Quality

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run linting
npm run lint

# Build for production
npm run build
```

## 🔄 CI/CD Pipeline

Automated pipeline runs on every push:

### 1. **Test & Quality Checks**
- Install dependencies
- ESLint static analysis
- Comprehensive unit tests
- Upload coverage reports

### 2. **Build Application**
- Production build
- Artifact storage (30 days)

### 3. **Deploy to GitHub Pages**
- Automatic deployment on main branch
- Live staging environment

### 4. **Release Management**
- Git tag-based versioning
- Automated release notes
- Release asset uploads

## 🚀 Creating Releases

```bash
# Patch release (1.0.0 → 1.0.1)
./release.sh patch

# Minor release (1.0.0 → 1.1.0)
./release.sh minor

# Major release (1.0.0 → 2.0.0)
./release.sh major
```

## 📁 Project Structure

```
├── .github/workflows/ci.yml    # CI/CD pipeline
├── src/
│   ├── components/             # React components
│   ├── context/               # State management
│   ├── data/products.json     # Sample data
│   ├── app.test.js           # Test suite
│   └── App.jsx               # Main component
├── vite.config.js            # Build configuration
├── package.json              # Dependencies
└── release.sh               # Version management
```

## 🧰 Technology Stack

| Technology | Purpose |
|------------|----------|
| React 19 | Frontend framework |
| Vite | Build tool & dev server |
| Vitest | Testing framework |
| ESLint | Code quality |
| GitHub Actions | CI/CD automation |
| GitHub Pages | Free hosting |

## 🎯 DevOps Best Practices Demonstrated

- **Automated Testing:** Unit tests with coverage reporting
- **Static Analysis:** ESLint integration in CI
- **Artifact Management:** Build artifacts with retention policies
- **Release Automation:** Git tag-based releases
- **Environment Management:** Staging deployment
- **Code Quality Gates:** Tests must pass before deployment

## 🌐 Live Demo

View the live application: [GitHub Pages Deployment](https://rooman-mir.github.io/rooman-capstone-devops/)

## 👤 Author

**Rooman Mir**  
DevOps Capstone Project - SEED Academy Course

---

*This project showcases a complete software development lifecycle from code to production deployment using modern DevOps practices and free cloud services.*