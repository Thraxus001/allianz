const fs = require('fs');
const https = require('https');
const path = require('path');

const logos = {
  uon_logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/University_of_Nairobi.png/320px-University_of_Nairobi.png',
  tworivers_logo: 'https://tworivers.co.ke/wp-content/uploads/2021/04/TRM_LOGO.png',
  sabis_logo: 'https://sabis.net/images/logo.png',
  ciata_logo: 'https://ciatacitymall.co.ke/wp-content/uploads/2019/08/logo.png',
  rosslyn_logo: 'https://rosslynacademy.org/wp-content/uploads/2020/07/Rosslyn-Logo-High-Res.png',
  biovax_logo: 'https://biovax.go.ke/wp-content/uploads/2022/02/cropped-BioVax-Logo-1.png',
  weetabix_logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Weetabix_logo.svg/320px-Weetabix_logo.svg.png'
};

const assetsDir = path.join(__dirname, 'src', 'assets');

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };
    https.get(url, options, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${res.statusCode} ${res.statusMessage}`));
        return;
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded ${path.basename(dest)}`);
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const [name, url] of Object.entries(logos)) {
    const ext = path.extname(url) || '.png';
    const dest = path.join(assetsDir, `${name}${ext}`);
    try {
      await download(url, dest);
    } catch (e) {
      console.error(`Error downloading ${name}:`, e.message);
    }
  }
}

run();
