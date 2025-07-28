# 🚀 Quick Setup Guide

## Immediate Setup (Windows)

1. **Run the deployment script:**
   ```bash
   deploy.bat
   ```

2. **Edit the .env file** (if prompted) with your configuration

3. **Start the application:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and go to `http://localhost:3000`

## Manual Setup

### 1. Environment Setup
```bash
# Copy environment template
copy env.example .env

# Edit .env with your settings
notepad .env
```

### 2. Install Dependencies
```bash
# Root dependencies
npm install

# Frontend dependencies
cd frontend && npm install && cd ..

# Backend dependencies
cd server && npm install && cd ..

# Python dependencies
pip install -r requirements.txt
```

### 3. Start Services
```bash
# Terminal 1: Flask ML API
python app.py

# Terminal 2: Node.js Backend
cd server && npm start

# Terminal 3: React Frontend
cd frontend && npm start
```

## Environment Variables

Key variables in `.env`:
- `SESSION_SECRET`: Change this for production
- `MONGODB_URI`: MongoDB connection string
- `REACT_APP_API_URL`: Flask API URL
- `REACT_APP_SERVER_URL`: Node.js server URL

## Git Ready

Your project is now ready for Git:
- ✅ Environment variables configured
- ✅ .gitignore set up
- ✅ Dependencies documented
- ✅ Docker support added
- ✅ Deployment scripts created

## Next Steps

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SER system with environment configuration"
   ```

2. **Push to remote repository:**
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **For production deployment:**
   - Follow the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
   - Deploy frontend to Vercel
   - Deploy backend to Render
   - Set up MongoDB Atlas

## Troubleshooting

- **Port conflicts**: Change ports in `.env`
- **MongoDB issues**: Ensure MongoDB is running
- **Model loading**: Check if `cnn_telugu.pth` exists
- **CORS errors**: Verify URLs in `.env`

## Support

See `README.md` for detailed documentation. 