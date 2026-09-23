import os
import numpy as np
from PIL import Image, ImageDraw
import imageio.v2 as imageio

def create_pan_zoom_video(image_path, output_path, title, subtitle, duration_sec=5, fps=20, width=1280, height=720):
    print(f"Creating video from {image_path} -> {output_path}...")
    img = Image.open(image_path).convert("RGB")
    orig_w, orig_h = img.size

    num_frames = int(duration_sec * fps)
    frames = []

    for i in range(num_frames):
        t = i / num_frames  # 0 to 1
        
        # Smooth ease in out
        ease = 0.5 - 0.5 * np.cos(t * np.pi)
        
        # Zoom from 1.0 to 1.12 and pan slightly
        zoom = 1.0 + 0.10 * ease
        crop_w = int(orig_w / zoom)
        crop_h = int(orig_h / zoom)
        
        # Pan horizontally and vertically
        max_dx = orig_w - crop_w
        max_dy = orig_h - crop_h
        
        dx = int(max_dx * ease)
        dy = int(max_dy * (0.3 + 0.4 * ease))
        
        cropped = img.crop((dx, dy, dx + crop_w, dy + crop_h))
        resized = cropped.resize((width, height), Image.Resampling.LANCZOS)
        
        # Overlay subtle cinematic vignette & bottom gradient
        draw = ImageDraw.Draw(resized, "RGBA")
        
        # Bottom gradient bar for title
        gradient_h = 160
        for y in range(gradient_h):
            alpha = int(220 * (y / gradient_h))
            draw.line([(0, height - gradient_h + y), (width, height - gradient_h + y)], fill=(10, 20, 30, alpha))
            
        # Top gradient bar for brand
        top_h = 70
        for y in range(top_h):
            alpha = int(180 * (1 - y / top_h))
            draw.line([(0, y), (width, y)], fill=(5, 10, 15, alpha))
            
        # Brand text top left
        draw.text((36, 20), "VIKASDHARA FOUNDATION", fill=(255, 255, 255, 240))
        draw.text((width - 240, 20), "• OFFICIAL FIELD FOOTAGE", fill=(52, 211, 153, 240))
        
        # Bottom title & subtitle
        draw.text((36, height - 120), title, fill=(255, 255, 255, 255))
        draw.text((36, height - 75), subtitle, fill=(203, 213, 225, 230))
        
        # Progress indicator line at bottom
        progress_w = int(width * t)
        draw.line([(0, height - 4), (progress_w, height - 4)], fill=(16, 185, 129, 255), width=4)
        
        frames.append(np.array(resized))

    imageio.mimsave(output_path, frames, fps=fps, quality=8, macro_block_size=None)
    print(f"SUCCESS: Video saved -> {output_path} ({len(frames)} frames)")

if __name__ == "__main__":
    os.makedirs("public/videos", exist_ok=True)
    
    videos = [
        {
            "img": "public/images/gaushala_animals.jpg",
            "out": "public/videos/gaushala_animal_care.mp4",
            "title": "Gau Shala Sanctuary & Animal Welfare Care",
            "sub": "Protecting indigenous Gir cows, providing free veterinary care and rural animal sanctuary in Nanded."
        },
        {
            "img": "public/images/village_transformation.jpg",
            "out": "public/videos/village_transformation.mp4",
            "title": "Rural Village Transformation & Water Stewardship",
            "sub": "Solar irrigation, community pond rejuvenation and holistic agricultural development across Maharashtra."
        },
        {
            "img": "public/images/rural_smart_classroom.jpg",
            "out": "public/videos/rural_smart_classroom.mp4",
            "title": "Rural Digital Smart Classrooms & Child Education",
            "sub": "Empowering village schools with interactive digital displays, educational tablets and STEM tools."
        },
        {
            "img": "public/images/women_shg_enterprise.jpg",
            "out": "public/videos/women_shg_enterprise.mp4",
            "title": "Women Self-Help Group (Bachat Gat) Micro-Enterprises",
            "sub": "Supporting rural women entrepreneurs with agro-processing machinery, packaging training and market access."
        }
    ]
    
    for v in videos:
        if os.path.exists(v["img"]):
            try:
                create_pan_zoom_video(v["img"], v["out"], v["title"], v["sub"], duration_sec=5, fps=20)
            except Exception as e:
                print(f"Error creating {v['out']}: {e}")
        else:
            print(f"Image missing: {v['img']}")
