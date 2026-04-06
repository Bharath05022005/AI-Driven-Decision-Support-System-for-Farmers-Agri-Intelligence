FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .

# Install torch 2.6+ from PyPI (has CVE fix)
RUN pip install --no-cache-dir "torch>=2.6.0" "torchvision>=0.21.0"

# Install remaining packages
RUN pip install --no-cache-dir -r requirements.txt

ARG HF_TOKEN
ENV HF_TOKEN=${HF_TOKEN}

COPY download_models.py .
RUN python download_models.py || (echo "=== DOWNLOAD FAILED ===" && exit 1)

COPY . .

CMD ["gunicorn", "--workers", "1", "--threads", "2", "--timeout", "120", "-b", "0.0.0.0:5000", "app:app"]
# force rebuild
