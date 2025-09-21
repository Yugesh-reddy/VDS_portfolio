#!/bin/bash

# Build and Deploy Script for Local Development
echo "🏗️  Building site..."
npm run build

echo "📂 Updating docs folder..."
rm -rf docs
cp -r _site docs

echo "✅ Build complete! Ready to commit and push."
echo ""
echo "To deploy your changes:"
echo "  git add ."
echo "  git commit -m \"Update site\""
echo "  git push origin main"