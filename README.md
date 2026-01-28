### DevOps Capstone Project - Rooman Mir

# 🛒 Mir's One-Stop Store

A modern e-commerce shopping cart application built with React + Vite, containerized with Docker, and automated with GitHub Actions CI/CD pipeline.

## 📋 Project Overview

This project demonstrates a complete DevOps workflow:

- ✅ **Frontend:** React with Vite
- ✅ **Testing:** Vitest for unit tests
- ✅ **Code Quality:** ESLint
- ✅ **Containerization:** Docker with Nginx
- ✅ **CI/CD:** GitHub Actions

## 🚀 Features

- View products with images, descriptions, and prices
- Add products to shopping cart
- Update quantities (increase/decrease)
- Remove items from cart
- View cart total
- Clear entire cart

## 🛠️ Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/) (v10 or higher)
- [Docker](https://www.docker.com/products/docker-desktop/) (for containerization)
- [Git](https://git-scm.com/)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mirrooma/capstone.git
   cd capstone

2. Install dependencies:
npm install

🏃 Running the Application

Development Mode:
npm run dev
Open http://localhost:5173 in your browser.

Production Build:
npm run build
npm run preview

🧪 Running Tests:
npm test
To run tests once (without watch mode):
npm test -- --run

🔍 Linting:
npm run lint

🐳 Docker:
Build Docker Image
docker build -t devops-ecommerce .

Run Docker Container:
docker run -d -p 3000:80 --name ecommerce-container devops-ecommerce
Open http://localhost:3000 in your browser.

Stop and Remove Container:
docker stop ecommerce-container
docker rm ecommerce-container
Using Docker Compose

# Start
docker-compose up -d

# Stop
docker-compose down
📁 Project Structure

capstone/
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions CI/CD pipeline
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductList.jsx
│   ├── context/
│   │   └── CartContext.jsx  # State management
│   ├── data/
│   │   └── products.json    # Product data
│   ├── App.jsx              # Main component
│   ├── App.css              # Styles
│   ├── App.test.jsx         # Unit tests
│   └── main.jsx             # Entry point
├── .dockerignore
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── eslint.config.js
├── index.html
├── nginx.conf
├── package.json
├── README.md
└── vite.config.js

## 🔄 CI/CD Pipeline (Free GitHub Actions)

The pipeline automatically runs on every push and includes:

### 1. **Test & Quality Checks**
- ✅ Checkout code
- ✅ Install dependencies (npm ci)
- ✅ Run ESLint (Static Analysis)
- ✅ Run unit tests with coverage
- ✅ Upload coverage reports

### 2. **Build Application**
- ✅ Build production bundle
- ✅ Upload build artifacts
- ✅ Artifact retention (30 days)

### 3. **Deploy to Staging**
- ✅ Deploy to GitHub Pages (free hosting)
- ✅ Automatic deployment on main branch
- ✅ Live staging environment

### 4. **Release Management**
- ✅ Automated versioning with Git tags
- ✅ Generate release notes
- ✅ Create GitHub releases
- ✅ Upload release assets

## 🚀 Creating Releases

```bash
# Create a patch release (1.0.0 → 1.0.1)
./release.sh patch

# Create a minor release (1.0.0 → 1.1.0)
./release.sh minor

# Create a major release (1.0.0 → 2.0.0)
./release.sh major
```

## 📊 Artifact Management

- **Build Artifacts**: Stored in GitHub Actions (30 days retention)
- **Coverage Reports**: Generated and uploaded automatically
- **Release Assets**: Attached to GitHub releases
- **Deployment**: GitHub Pages (free static hosting)
🧰 Technologies Used
Technology	Purpose
React 19	Frontend framework
Vite	Build tool
Vitest	Testing framework
ESLint	Code linting
Docker	Containerization
Nginx	Production server
GitHub Actions	CI/CD automation

👤 Owner
Rooman Mir

📄 License
This project is for Evaluation as part of a DevOps learning within the SEED Academy Course.