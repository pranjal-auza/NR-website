import sharp from 'sharp';

async function main() {
  const input = 'C:/Users/Pranjal/.gemini/antigravity-ide/brain/0a489ca9-3d5b-46fa-b2ea-6e8225b87f97/.user_uploaded/media_1788933864078.png';
  
  // Extract center region
  const { data, info } = await sharp(input)
    .extract({ left: 260, top: 215, width: 395, height: 335 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  const { width, height } = info;
  
  // Replace all background pixels with smooth #EEF0FE
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      
      // Keep woman, laptop, mug, books, and doodle:
      // Doodle swirl: dark ink (r < 130, g < 130, b < 130) at top center
      const isDoodle = (x >= 165 && x <= 220 && y >= 65 && y <= 115 && r < 140 && g < 140 && b < 140);
      // Woman's hair & skin & clothes:
      const isWoman = (x >= 120 && x <= 340 && y >= 70 && y <= 335 && !(r > 235 && g > 235 && b > 245));
      // Laptop:
      const isLaptop = (x >= 65 && x <= 275 && y >= 220 && y <= 335 && !(r > 245 && g > 245 && b > 250));
      // Books:
      const isBooks = (x <= 65 && y >= 250 && y <= 335);
      // Mug:
      const isMug = (x >= 310 && y >= 245 && y <= 335);
      
      if (!isDoodle && !isWoman && !isLaptop && !isBooks && !isMug) {
        data[idx] = 238;     // #EE
        data[idx + 1] = 240; // #F0
        data[idx + 2] = 254; // #FE
        data[idx + 3] = 255;
      }
    }
  }
  
  await sharp(data, { raw: { width, height, channels: 4 } })
    .png()
    .toFile('public/problem-person-perfect.png');
    
  console.log('Saved problem-person-perfect.png with 100% unified background!');
}

main().catch(console.error);
