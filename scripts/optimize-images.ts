#!/usr/bin/env bun

const ASSETS_DIR = "src/assets";
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 80;

async function optimizeImages() {
  console.log("Scanning for images...");
  
  const files = [];
  for await (const file of new Bun.Glob(`${ASSETS_DIR}/**/*.{jpg,jpeg,png}`).scan(".")) {
    files.push(file);
  }

  if (files.length === 0) {
    console.log("No images found to optimize.");
    return;
  }

  console.log(`Found ${files.length} images to optimize.`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of files) {
    try {
      const webpPath = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
      
      const webpBytes = await Bun.file(file)
        .image()
        .resize(MAX_WIDTH, MAX_HEIGHT, { fit: "inside" })
        .webp({ quality: QUALITY })
        .bytes();
      
      await Bun.write(webpPath, webpBytes);
      
      const originalSize = (await Bun.file(file).stat()).size;
      const optimizedSize = webpBytes.byteLength;
      const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
      
      totalOriginal += originalSize;
      totalOptimized += optimizedSize;
      
      const relativePath = file.replace(`${ASSETS_DIR}/`, "");
      console.log(`  ${relativePath} -> .webp (${savings}% smaller)`);
    } catch (error) {
      console.error(`Failed to optimize ${file}:`, error);
    }
  }
  
  const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);
  console.log(`\nDone! Total: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB -> ${(totalOptimized / 1024 / 1024).toFixed(1)}MB (${totalSavings}% smaller)`);
}

optimizeImages();
