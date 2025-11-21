#!/bin/bash

# Icon Generation Script for Soon PWA
# This script generates placeholder icons for the PWA
# You'll need ImageMagick or a similar tool installed

echo "Generating PWA icons for Soon..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick not found. Please install it to generate icons."
    echo "Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "macOS: brew install imagemagick"
    echo "Windows: Download from https://imagemagick.org/script/download.php"
    exit 1
fi

# Create a simple gradient background with "S" letter
convert -size 512x512 gradient:"#2DCE89-#1a9f6e" \
    -gravity center \
    -pointsize 300 \
    -fill white \
    -annotate +0+0 "S" \
    icon-512x512.png

# Generate 192x192 icon
convert icon-512x512.png \
    -resize 192x192 \
    icon-192x192.png

# Generate different sizes for favicon
for size in 16 32 48 64 128 256; do
    convert icon-512x512.png \
        -resize ${size}x${size} \
        favicon-${size}.png
done

# Create ICO file for favicon
convert favicon-16.png favicon-32.png favicon-48.png favicon-64.png favicon-128.png favicon-256.png favicon.ico

echo "Icons generated successfully!"
echo "Files created:"
echo "- icon-192x192.png (192x192 PWA icon)"
echo "- icon-512x512.png (512x512 PWA icon)"
echo "- favicon.ico (Multi-size favicon)"
echo ""
echo "Copy these files to your web server's root directory."
