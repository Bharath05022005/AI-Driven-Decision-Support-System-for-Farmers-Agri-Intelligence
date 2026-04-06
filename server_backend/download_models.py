import os
import sys

print("=== Starting model download ===")
print(f"Python version: {sys.version}")

# Check torch version first
try:
    import torch
    print(f"Torch version: {torch.__version__}")
except Exception as e:
    print(f"❌ Torch import failed: {e}")
    sys.exit(1)

# Check token
token = os.environ.get('HF_TOKEN', '')
print(f"HF_TOKEN present: {bool(token)}")

# Login
try:
    from huggingface_hub import login
    if token:
        login(token)
        print("✅ HuggingFace login successful")
    else:
        print("⚠️ No token, proceeding without login")
except Exception as e:
    print(f"❌ Login failed: {e}")
    sys.exit(1)

# Download processor
try:
    from transformers import AutoImageProcessor
    print("Downloading processor...")
    AutoImageProcessor.from_pretrained(
        'google/mobilenet_v2_1.0_224',
        use_fast=True
    )
    print("✅ Processor downloaded")
except Exception as e:
    print(f"❌ Processor download failed: {e}")
    sys.exit(1)

# Download model - force safetensors to bypass CVE-2025-32434
try:
    from transformers import AutoModelForImageClassification
    print("Downloading model (safetensors format)...")
    AutoModelForImageClassification.from_pretrained(
        'linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification',
        use_safetensors=True
    )
    print("✅ Model downloaded successfully")
except Exception as e:
    print(f"⚠️ Safetensors failed, trying default format: {e}")
    # Fallback - try without safetensors flag
    try:
        from transformers import AutoModelForImageClassification
        AutoModelForImageClassification.from_pretrained(
            'linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification'
        )
        print("✅ Model downloaded successfully (fallback)")
    except Exception as e2:
        print(f"❌ Model download failed: {e2}")
        sys.exit(1)

print("=== All done! ===")