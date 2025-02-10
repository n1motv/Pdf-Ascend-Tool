#!/bin/bash
echo "🔧 Installing Tesseract and Poppler for Render..."

# Créer un dossier pour les binaires
mkdir -p /opt/tesseract
mkdir -p /opt/poppler

# Télécharger et installer Tesseract (binaire portable)
curl -L -o /opt/tesseract/tesseract https://github.com/tesseract-ocr/tesseract/releases/download/5.3.3/tesseract-5.3.3-linux-x86_64
chmod +x /opt/tesseract/tesseract

# Télécharger et installer Poppler (binaire portable)
curl -L -o /opt/poppler/pdftoppm https://poppler.freedesktop.org/poppler-24.02.0.tar.xz
chmod +x /opt/poppler/pdftoppm

# Définir le PATH pour que Render trouve les binaires
echo 'export PATH="/opt/tesseract:/opt/poppler:$PATH"' >> ~/.bashrc
export PATH="/opt/tesseract:/opt/poppler:$PATH"

echo "✅ Tesseract et Poppler installés avec succès !"
