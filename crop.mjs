import sharp from 'sharp';

async function main() {
  const input = 'C:/Users/Pranjal/.gemini/antigravity-ide/brain/0a489ca9-3d5b-46fa-b2ea-6e8225b87f97/.user_uploaded/media_1788933864078.png';
  
  // Crop precisely to exclude the background card text (left x < 300) and top-right annotation (x > 570, y < 320)
  // Let's extract the clean center subject:
  await sharp(input)
    .extract({ left: 305, top: 220, width: 330, height: 325 })
    .png()
    .toFile('public/problem-illustration-clean.png');
    
  console.log('Saved problem-illustration-clean.png');
}

main().catch(console.error);
