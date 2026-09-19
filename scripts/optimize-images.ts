#!/usr/bin/env bun

const ASSETS_DIR = "src/assets";
const OUTPUT_DIR = "src/assets-optimized";
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 85;

async function optimizeImages() {
  console.log("🔍 Scanning for images...");
  
  const files = [];
  for await (const file of new Bun.Glob(`${ASSETS_DIR}/**/*.{jpg,jpeg,png,webp}`).scan(".")) {
    files.push(file);
  }

  if (files.length === 0) {
    console.log("No images found to optimize.");
    return;
  }

  console.log(`Found ${files.length} images to optimize.`);

  for (const file of files) {
    try {
      const relativePath = file.replace(`${ASSETS_DIR}/`, "");
      const outputPath = `${OUTPUT_DIR}/${relativePath}`.replace(/\.(jpg|jpeg|png)$/i, ".webp");
      
      await Bun.write(
        outputPath,
        await Bun.file(file)
          .image()
          .resize(MAX_WIDTH, MAX_HEIGHT, { fit: "inside" })
          .webp({ quality: QUALITY })
          .bytes()
      );
      
      const originalSize = (await Bun.file(file).stat()).size;
      const optimizedSize = (await Bun.file(outputPath).stat()).size;
      const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
      
      console.log(`✅ ${relativePath} → ${outputPath} (${savings}% smaller)`);
    } catch (error) {
      console.error(`❌ Failed to optimize ${file}:`, error);
    }
  }
  
  console.log("🎉 Image optimization complete!");
}

optimizeImages();