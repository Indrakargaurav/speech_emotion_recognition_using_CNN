# Speech Emotion Recognition (SER) System

A full-stack web application for analyzing emotions in speech using machine learning. The system consists of a React frontend, Node.js backend for authentication, and a Flask API for ML model inference.

## 🏗️ Architecture

- **Frontend**: React.js with Material-UI
- **Backend**: Node.js with Express.js
- **ML API**: Flask with PyTorch
- **Database**: MongoDB
- **Authentication**: Session-based with bcrypt

## 🚀 Features

- User authentication (signup/signin)
- Audio file upload and recording
- Real-time emotion analysis
- Interactive emotion charts
- Responsive design

## 📋 Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- MongoDB
- npm or yarn

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd SER_final
```

### 2. Set up environment variables
```bash
# Copy the example environment file
cp env.example .env

# Edit the .env file with your configuration
nano .env
```

### 3. Install dependencies

#### Frontend
```bash
cd frontend
npm install
```

#### Backend
```bash
cd server
npm install
```

#### Python ML API
```bash
# From the root directory
pip install -r requirements.txt
```

### 4. Set up MongoDB
Make sure MongoDB is running on your system:
```bash
# Start MongoDB (Ubuntu/Debian)
sudo systemctl start mongod

# Or on macOS with Homebrew
brew services start mongodb-community
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Flask ML API Configuration
FLASK_APP=app.py
FLASK_ENV=development
FLASK_DEBUG=True
FLASK_PORT=5000

# Node.js Server Configuration
NODE_ENV=development
NODE_PORT=4000
SESSION_SECRET=your-super-secret-session-key-change-this-in-production

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/userAuth
MONGODB_DB_NAME=userAuth

# Frontend Configuration
REACT_APP_API_URL=http://localhost:5000
REACT_APP_SERVER_URL=http://localhost:4000

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Model Configuration
MODEL_PATH=./cnn_telugu.pth
UPLOAD_FOLDER=uploads

# Security Configuration
COOKIE_SECURE=false
COOKIE_HTTPONLY=true
COOKIE_SAMESITE=lax
```

## 🚀 Running the Application

### Development Mode

1. **Start the Flask ML API** (Terminal 1):
```bash
python app.py
```

2. **Start the Node.js backend** (Terminal 2):
```bash
cd server
npm start
```

3. **Start the React frontend** (Terminal 3):
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- ML API: http://localhost:5000

## 📁 Project Structure

```
SER_final/
├── app.py                 # Flask ML API
├── requirements.txt       # Python dependencies
├── env.example           # Environment variables template
├── .gitignore           # Git ignore file
├── frontend/            # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── App.js       # Main App component
│   └── package.json
├── server/              # Node.js backend
│   ├── routes/          # API routes
│   ├── models/          # Database models
│   ├── config.js        # Database configuration
│   └── package.json
├── uploads/             # Temporary file uploads
└── *.pth               # ML model files
```

## 🔒 Security Considerations

- Change the `SESSION_SECRET` in production
- Set `COOKIE_SECURE=true` when using HTTPS
- Use environment variables for all sensitive data
- Implement rate limiting for production
- Add input validation and sanitization

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm test
```

### Backend Testing
```bash
cd server
npm test
```

## 📦 Deployment

### Vercel + Render Deployment

This project is optimized for deployment on:
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

### Production Environment Variables

For production deployment, you'll need to set these environment variables in your hosting platforms:

#### Vercel (Frontend)
```env
REACT_APP_API_URL=https://your-flask-api.onrender.com
REACT_APP_SERVER_URL=https://your-node-backend.onrender.com
```

#### Render (Node.js Backend)
```env
NODE_ENV=production
NODE_PORT=10000
SESSION_SECRET=your-super-secret-key
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/userAuth
CORS_ORIGIN=https://your-app.vercel.app
COOKIE_SECURE=true
COOKIE_HTTPONLY=true
COOKIE_SAMESITE=none
```

#### Render (Flask ML API)
```env
FLASK_APP=app.py
FLASK_ENV=production
FLASK_DEBUG=false
FLASK_PORT=10000
CORS_ORIGIN=https://your-app.vercel.app
MODEL_PATH=./cnn_telugu.pth
UPLOAD_FOLDER=uploads
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check the connection string in `.env`

2. **Port Already in Use**
   - Change the port numbers in `.env`
   - Kill processes using the ports

3. **Model Loading Error**
   - Ensure the model file exists in the specified path
   - Check file permissions

4. **CORS Errors**
   - Verify the `CORS_ORIGIN` in `.env`
   - Check that all services are running

## 📞 Support

For support and questions, please open an issue in the repository. 