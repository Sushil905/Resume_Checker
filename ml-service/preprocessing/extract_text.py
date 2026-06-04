from io import BytesIO
from pathlib import Path

from docx import Document
from pypdf import PdfReader


def extract_text(uploaded_file):
    extension = Path(uploaded_file.filename).suffix.lower()
    raw = uploaded_file.read()

    if extension == ".txt":
        return raw.decode("utf-8", errors="ignore")

    if extension == ".pdf":
        reader = PdfReader(BytesIO(raw))
        pages = [page.extract_text() or "" for page in reader.pages]
        return "\n".join(pages)

    if extension == ".docx":
        document = Document(BytesIO(raw))
        return "\n".join(paragraph.text for paragraph in document.paragraphs)

    return ""
