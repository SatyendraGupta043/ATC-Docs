import fitz  # PyMuPDF
import os

pdf_path = "06. SID STAR Easterly (Complete Labels).pdf"  # write the pdf file name
output_folder = "output_images"
os.makedirs(output_folder, exist_ok=True)

zoom = 8  # 4x zoom = ~300 DPI equivalent
matrix = fitz.Matrix(zoom, zoom)

doc = fitz.open(pdf_path)

base_name = os.path.splitext(os.path.basename(pdf_path))[0]

for i, page in enumerate(doc):
    pix = page.get_pixmap(matrix=matrix)
    output_path = os.path.join(output_folder, f"{base_name}_page_{i+1}.png")
    pix.save(output_path)
    print(f"Saved: {output_path}")

