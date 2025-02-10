#!/bin/bash
echo "🔧 Installing Poppler for Render..."

# Créer un dossier pour les binaires
mkdir -p /opt/poppler
# Télécharger et installer Poppler (binaire portable)
curl -L -o /opt/poppler/pdftoppm https://poppler.freedesktop.org/poppler-24.02.0.tar.xz
chmod +x /opt/poppler/pdftoppm

# Définir le PATH pour que Render trouve les binaires
echo 'export PATH="/opt/tesseract:/opt/poppler:$PATH"' >> ~/.bashrc
export PATH="/opt/tesseract:/opt/poppler:$PATH"

echo "✅ Tesseract et Poppler installés avec succès !"
