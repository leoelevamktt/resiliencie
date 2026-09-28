"""One-time extraction of the source and brand bundles and optimization of client photos.
Run this once on the owner's authorized Windows machine where the original photos live.
"""
from pathlib import Path
from PIL import Image, ImageOps
import shutil
import tarfile

ROOT = Path(__file__).resolve().parent.parent
DOWNLOADS = Path.home() / "Downloads"
for bundle in ("resilience-source.tar.bz2", "resilience-brand.tar.bz2"):
    path = ROOT / "_deployment" / bundle
    if not path.is_file():
        raise FileNotFoundError(f"Missing site bundle: {path}")
    with tarfile.open(path, "r:bz2") as archive:
        archive.extractall(ROOT, filter="data")

photos = {
    "WhatsApp Image 2026-09-08 at 10.24.04.jpeg": "consultorio-01.webp",
    "WhatsApp Image 2026-09-08 at 10.24.03 (1).jpeg": "consultorio-02.webp",
    "WhatsApp Image 2026-09-08 at 10.24.03.jpeg": "recepcao-01.webp",
    "WhatsApp Image 2026-09-08 at 10.24.02 (1).jpeg": "recepcao-02.webp",
    "WhatsApp Image 2026-09-08 at 10.24.02.jpeg": "recepcao-03.webp",
    "WhatsApp Image 2026-09-08 at 10.26.24.jpeg": "retrato-equipe-01.webp",
    "WhatsApp Image 2026-09-08 at 10.25.15.jpeg": "retrato-equipe-02.webp",
}
image_dir = ROOT / "public" / "images"
image_dir.mkdir(parents=True, exist_ok=True)
for original, output in photos.items():
    source = DOWNLOADS / original
    if not source.exists():
        raise FileNotFoundError(f"Missing photo: {source}")
    with Image.open(source) as photo:
        image = ImageOps.exif_transpose(photo).convert("RGB")
        image.thumbnail((1440, 1700), Image.Resampling.LANCZOS)
        image.save(image_dir / output, "WEBP", quality=82, method=6)
        print(f"CREATED {output}")
original_pdf = DOWNLOADS / "vetor resilience.pdf"
if not original_pdf.is_file():
    raise FileNotFoundError(f"Missing original vector logo: {original_pdf}")
branding = ROOT / "branding"
branding.mkdir(exist_ok=True)
shutil.copy2(original_pdf, branding / "vetor-resilience-original.pdf")
print("ASSEMBLY_SUCCESS: source, vector brand, 7 real photos and original PDF")
