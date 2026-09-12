const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '../extracted_frames');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const videoPath = path.resolve(__dirname, '../segasta.mp4');
console.log('Extracting from:', videoPath);
execSync(`"${ffmpeg}" -i "${videoPath}" -vf fps=1 "${path.join(outDir, 'frame_%03d.jpg')}"`);
console.log('Extracted frames successfully to:', outDir);
