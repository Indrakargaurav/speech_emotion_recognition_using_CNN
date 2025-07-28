# 🚀 Deployment Guide: Vercel + Render

This guide will help you deploy your Speech Emotion Recognition system to Vercel (frontend) and Render (backend).

## 📋 Prerequisites

- GitHub repository with your code
- Vercel account (free)
- Render account (free)
- MongoDB Atlas account (free tier)

## 🎯 Deployment Strategy

- **Frontend (React)**: Vercel
- **Backend (Node.js)**: Render
- **ML API (Flask)**: Render
- **Database (MongoDB)**: MongoDB Atlas (or Render's MongoDB)

## 🗄️ Step 1: Set up MongoDB Atlas

1. **Create MongoDB Atlas account:**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free account
   - Create a new cluster (free tier)

2. **Get connection string:**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password

## 🔧 Step 2: Deploy Backend to Render

### Node.js Backend

1. **Connect to GitHub:**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository

2. **Configure the service:**
   ```
   Name: ser-node-backend
   Environment: Node
   Build Command: cd server && npm install
   Start Command: cd server && npm start
   ```

3. **Set Environment Variables:**
   ```
   NODE_ENV=production
   NODE_PORT=10000
   SESSION_SECRET=your-super-secret-key-here
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/userAuth
   CORS_ORIGIN=https://your-app.vercel.app
   COOKIE_SECURE=true
   COOKIE_HTTPONLY=true
   COOKIE_SAMESITE=none
   ```

4. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Copy the service URL

### Flask ML API

1. **Create another web service:**
   - Click "New" → "Web Service"
   - Connect the same GitHub repository

2. **Configure the service:**
   ```
   Name: ser-flask-api
   Environment: Python
   Build Command: pip install -r requirements.txt
   Start Command: python app.py
   ```

3. **Set Environment Variables:**
   ```
   FLASK_APP=app.py
   FLASK_ENV=production
   FLASK_DEBUG=false
   FLASK_PORT=10000
   CORS_ORIGIN=https://your-app.vercel.app
   MODEL_PATH=./cnn_telugu.pth
   UPLOAD_FOLDER=uploads
   ```

4. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Copy the service URL

## ⚡ Step 3: Deploy Frontend to Vercel

1. **Connect to GitHub:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure the project:**
   ```
   Framework Preset: Create React App
   Root Directory: frontend
   Build Command: npm run build
   Output Directory: build
   ```

3. **Set Environment Variables:**
   ```
   REACT_APP_API_URL=https://your-flask-api.onrender.com
   REACT_APP_SERVER_URL=https://your-node-backend.onrender.com
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete
   - Copy your app URL

## 🔄 Step 4: Update CORS Settings

After getting all your URLs, update the CORS settings:

1. **In Render Dashboard:**
   - Go to your Node.js service
   - Update `CORS_ORIGIN` to your Vercel domain
   - Go to your Flask service
   - Update `CORS_ORIGIN` to your Vercel domain

2. **Redeploy services:**
   - Both services will automatically redeploy

## 🧪 Step 5: Test Your Deployment

1. **Test Frontend:**
   - Visit your Vercel URL
   - Try to sign up/sign in

2. **Test Backend:**
   - Test API endpoints using Postman or curl

3. **Test ML API:**
   - Upload an audio file and test emotion analysis

## 🔧 Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Ensure CORS_ORIGIN matches your Vercel domain exactly
   - Check that both backend services have the correct CORS settings

2. **MongoDB Connection:**
   - Verify your MongoDB Atlas connection string
   - Ensure your IP is whitelisted in Atlas

3. **Model Loading:**
   - Ensure `cnn_telugu.pth` is in your repository
   - Check file permissions

4. **Environment Variables:**
   - Double-check all environment variables are set correctly
   - Ensure no typos in variable names

### Debug Commands:

```bash
# Check Render logs
# Go to your service dashboard → Logs

# Check Vercel logs
# Go to your project dashboard → Functions → View Function Logs
```

## 📊 Monitoring

### Render:
- **Logs**: Available in service dashboard
- **Metrics**: CPU, memory usage
- **Uptime**: Automatic monitoring

### Vercel:
- **Analytics**: Built-in analytics
- **Performance**: Core Web Vitals
- **Functions**: Serverless function logs

## 🔒 Security Checklist

- [ ] SESSION_SECRET is set and secure
- [ ] MongoDB connection uses authentication
- [ ] CORS is properly configured
- [ ] Environment variables are set
- [ ] HTTPS is enabled (automatic on Vercel/Render)

## 🚀 Next Steps

1. **Set up custom domain** (optional)
2. **Configure monitoring alerts**
3. **Set up CI/CD pipeline**
4. **Add SSL certificates** (automatic on Vercel/Render)

## 📞 Support

- **Vercel**: [Vercel Documentation](https://vercel.com/docs)
- **Render**: [Render Documentation](https://render.com/docs)
- **MongoDB Atlas**: [Atlas Documentation](https://docs.atlas.mongodb.com)

Your SER system is now deployed and ready to use! 🎉 