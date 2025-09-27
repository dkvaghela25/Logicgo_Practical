# Logicgo Practical - Full Stack Application

A full-stack web application built with React (Frontend) and Node.js/Express (Backend) with MongoDB database integration. This application provides a product management system with CRUD operations.

## 🚀 Tech Stack

### Frontend
- **React** - UI Library
- **Vite** - Build Tool
- **Axios** - HTTP Client
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM Library
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment Variables

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local installation) or MongoDB Atlas account
- [Git](https://git-scm.com/)
- npm (comes with Node.js)

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/dkvaghela25/Logicgo_Practical.git
cd Logicgo_Practical
```

### 2. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the backend directory and add the following environment variables:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/logicgo_practical
# Or use MongoDB Atlas connection string:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/logicgo_practical
```

### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

## 🚀 Running the Application

### Development Mode

**Start Backend Server:**
```bash
cd backend
npm run dev
```
The backend server will run on `http://localhost:5000`

**Start Frontend Development Server:**
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

### Production Mode

**Build Frontend:**
```bash
cd frontend
npm run build
```

**Start Backend:**
```bash
cd backend
npm start
```

## 📁 Project Structure

```
Logicgo_Practical/
├── backend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── index.js
│   │   │   ├── controller/
│   │   │   │   └── product.js
│   │   │   └── router/
│   │   │       └── product.js
│   │   ├── database/
│   │   │   ├── index.js
│   │   │   └── models/
│   │   │       └── product.js
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🔌 API Endpoints

### Products API

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `GET /api/products/:id` - Get product by ID
- `PUT /api/products/:id` - Update product by ID
- `DELETE /api/products/:id` - Delete product by ID

### Health Check
- `GET /health` - Check server status

## 📊 Data Model

### Product Schema
```javascript
{
  name: String (required),
  price: Number (required),
  category: String (required)
}
```

## 🛠️ Available Scripts

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (placeholder)

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

## 🧪 Testing

Currently, no tests are implemented. To add tests:

### Backend Testing
```bash
cd backend
npm install --save-dev jest supertest
```

### Frontend Testing
```bash
cd frontend
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Ensure MongoDB connection is configured
3. Deploy using platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Dhruv Vaghela**
- GitHub: [@dkvaghela25](https://github.com/dkvaghela25)

## 📞 Support

If you have any questions or issues, please open an issue in the GitHub repository.

---

**Happy Coding! 🚀**
