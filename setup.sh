#!/bin/bash

echo "🔥 SHELLA E-Commerce Setup"
echo "========================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Installation complete!"
echo ""
echo "Next steps:"
echo "1. Development mode: npm run dev"
echo "2. Build for production: npm run build"
echo "3. Admin panel: http://localhost:5173/admin (password: 12345)"
echo ""
echo "Happy selling! 🛍️"
