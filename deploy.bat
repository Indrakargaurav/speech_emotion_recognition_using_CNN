@echo off
echo 🚀 Starting SER System Deployment...

REM Check if .env file exists
if not exist .env (
    echo 📝 Creating .env file from template...
    copy env.example .env
    echo ⚠️  Please edit .env file with your configuration before continuing
    pause
)

echo 🔍 Checking prerequisites...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js v16 or higher.
    pause
    exit /b 1
)

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed. Please install Python 3.8 or higher.
    pause
    exit /b 1
)

echo ✅ Prerequisites check completed

echo 📦 Installing dependencies...

REM Install root dependencies
npm install

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
cd frontend
npm install
cd ..

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd server
npm install
cd ..

REM Install Python dependencies
echo 📦 Installing Python dependencies...
pip install -r requirements.txt

echo ✅ Dependencies installed successfully

REM Create necessary directories
echo 📁 Creating necessary directories...
if not exist uploads mkdir uploads

echo.
echo 🎉 Deployment completed successfully!
echo.
echo 📋 Next steps:
echo 1. Make sure MongoDB is running
echo 2. Start the application with: npm run dev
echo 3. Open http://localhost:3000 in your browser
echo.
echo 🔧 Available commands:
echo   npm run dev          - Start all services in development mode
echo   npm run start        - Start all services in production mode
echo   npm run build        - Build the frontend for production
echo   docker-compose up    - Start with Docker (if Docker is installed)
echo.
echo 📚 For more information, see README.md
pause 