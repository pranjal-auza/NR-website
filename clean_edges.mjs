import sharp from 'sharp';

async function main() {
  const input = 'public/problem-illustration-clean.png';
  
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  const { width, height } = info;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      
      // Check if pixel is part of the white/light-gray background (outside the woman/laptop/mug/doodle/blob)
      // The woman's hair is dark (r < 80), sweater is purple (r: 150-190, g: 130-170, b: 210-250), laptop is gray (r: 160-210, g: 160-210, b: 160-210)
      // Lavender blob is rgb(235-245, 235-245, 250-255)
      // Background white is rgb > 248, g > 248, b > 248
      
      // Top right outside woman's hair (x > 230 && y < 130)
      if (x > 225 && y < 130) {
        data[idx + 3] = 0; // transparent
      }
      // Top left outside swirl doodle (x < 110 && y < 80)
      if (x < 110 && y < 80) {
        data[idx + 3] = 0;
      }
      // Far left edge (x < 30)
      if (x < 30) {
        data[idx + 3] = 0;
      }
    }
  }
  
  await sharp(data, { raw: { width, height, channels: 4 } })
    .png()
    .toFile('public/problem-person-transparent.png');
    
  console.log('Saved transparent version');
}

main().catch(console.error);
