# 📜 PDF Ascend Tool

PDF Ascend Tool is a **Flask-based** web application that provides **various PDF manipulation features** including:
- 📑 **Merge multiple PDFs**
- ✂️ **Split PDFs**
- 📉 **Compress PDFs (including images)**
- 📸 **Convert PDFs to Images**
- 📝 **Convert PDFs to Word**
- 🔄 **Rotate PDFs**
- 🔢 **Add Page Numbers**
- 🔧 **Repair PDFs**
- 🔓 **Unlock password-protected PDFs**
- 🔐 **Protect PDFs with passwords**
- 🖼️ **Convert Images to PDF**
- 📄 **Convert Word documents to PDF**

---

## 🚀 Features

✅ **Fast & lightweight** – Uses optimized PDF libraries like `PyMuPDF`, `PyPDF2`, and `Ghostscript`.  
✅ **Works with PDFs containing images** – Compresses images in PDFs for better size reduction.  
✅ **Runs locally or on a server** – Supports hosting on **Render** and other cloud providers.  
✅ **Fully open-source** – Modify and extend as needed!  

---

## 📦 Installation

### 🔹 **1. Clone the repository**
```sh
git clone https://github.com/yourusername/pdf-ascend-tool.git
cd pdf-ascend-tool
```
### 🔹 **2. Create a virtual environment**
```sh
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```
### 🔹 **3. Install dependencies**
```sh
pip install -r requirements.txt
```
### 🔹 **4. Install Ghostscript (for PDF compression)**
#### 📌 Windows
Download and install Ghostscript.
Then, add it to your PATH manually or run:
```sh
setx PATH "%PATH%;C:\Program Files\gs\gs10.04.0\bin"
```
#### 📌 Linux/macOS
Install Ghostscript with:
```sh
sudo apt install ghostscript  # Debian/Ubuntu
brew install ghostscript  # macOS
```

## 🚀 Running the Application
After installing dependencies, start the Flask server:
```sh
python app.py
```
The app will be available at:
```sh
http://127.0.0.1:5000
```
## 🛠️ Usage
### 📑 Merge PDFs

Upload multiple PDFs.

Click "Merge".

Download the merged file.

### ✂️ Split PDF

Upload a PDF.

Choose to split by pages or page range.

Click "Split".

Download the split files.

### 📉 Compress PDF

Upload a PDF.

Select compression level: Screen / eBook / Printer / Prepress.

Click "Compress".

Download the optimized file.

### 📸 Convert PDF to Images

Upload a PDF.

Click "Convert to Images".

Download all extracted images in a ZIP.

### 📝 Convert PDF to Word

Upload a PDF.

Click "Convert to Word".

Download the .docx file.

### 🔄 Rotate PDF

Upload a PDF.

Enter rotation angle (90, 180, 270).

Click "Rotate".

Download the rotated file.

### 🔢 Add Page Numbers

Upload a PDF.

Click "Add Page Numbers".

Download the numbered PDF.

### 🔓 Unlock PDF

Upload a password-protected PDF.

Enter the password.

Click "Unlock".

Download the unprotected PDF.

### 🔐 Protect PDF

Upload a PDF.

Enter a new password.

Click "Protect".

Download the encrypted PDF.

### 🖼️ Convert Images to PDF

Upload multiple images.

Click "Convert to PDF".

Download the PDF file.

### 📄 Convert Word to PDF

Upload a .docx file.

Click "Convert to PDF".

Download the generated PDF.

## 🎯 Technologies Used

Flask – Web framework

PyMuPDF (fitz) – PDF image processing

PyPDF2 – PDF splitting & merging

Ghostscript – Advanced PDF compression

ReportLab – PDF generation

Pillow (PIL) – Image processing

pdf2image – PDF to image conversion

pdf2docx – PDF to Word conversion

## 📜 License
This project is licensed under the MIT License.
## 🤝 Contributing
Want to improve PDF Ascend Tool?
Fork the repo, create a branch, and submit a Pull Request.

## 🌟 Support
If you find this project useful, give it a star ⭐ on GitHub!
