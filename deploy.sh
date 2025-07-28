#!/bin/bash

# Speech Emotion Recognition System Deployment Script

echo "🚀 Starting SER System Deployment..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp env.example .env
    echo "⚠️  Please edit .env file with your configuration before continuing"
    echo "Press Enter when you're ready to continue..."
    read
fi

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "🔍 Checking prerequisites..."

if ! command_exists node; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    exit 1
fi

if ! command_exists python3; then
    echo "❌ Python 3 is not installed. Please install Python 3.8 or higher."
    exit 1
fi

if ! command_exists pip; then
    echo "❌ pip is not installed. Please install pip."
    exit 1
fi

if ! command_exists mongod; then
    echo "⚠️  MongoDB is not installed. Please install MongoDB or use Docker."
    echo "You can install MongoDB from: https://docs.mongodb.com/manual/installation/"
fi

echo "✅ Prerequisites check completed"

# Install dependencies
echo "📦 Installing dependencies..."

# Install root dependencies
npm install

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd server
npm install
cd ..

# Install Python dependencies
echo "📦 Installing Python dependencies..."
pip install -r requirements.txt

echo "✅ Dependencies installed successfully"

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p uploads

# Check if MongoDB is running
echo "🔍 Checking MongoDB connection..."
if command_exists mongod; then
    if pgrep -x "mongod" > /dev/null; then
        echo "✅ MongoDB is running"
    else
        echo "⚠️  MongoDB is not running. Starting MongoDB..."
        if command_exists systemctl; then
            sudo systemctl start mongod
        elif command_exists brew; then
            brew services start mongodb-community
        else
            echo "❌ Please start MongoDB manually"
        fi
    fi
fi

echo ""
echo "🎉 Deployment completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Make sure MongoDB is running"
echo "2. Start the application with: npm run dev"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "🔧 Available commands:"
echo "  npm run dev          - Start all services in development mode"
echo "  npm run start        - Start all services in production mode"
echo "  npm run build        - Build the frontend for production"
echo "  docker-compose up    - Start with Docker (if Docker is installed)"
echo ""
echo "📚 For more information, see README.md" 