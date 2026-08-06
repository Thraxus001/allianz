const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const { URL } = require('url');

const logos = {
  uon_logo: {
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/c/c5/University_of_Nairobi.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/University_of_Nairobi.png/800px-University_of_Nairobi.png'
    ],
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" fill="#f8fafc" rx="20"/>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#0f172a" stroke-width="4"/>
      <text x="100" y="95" font-family="'Times New Roman', serif" font-size="40" font-weight="bold" fill="#0f172a" text-anchor="middle">UoN</text>
      <text x="100" y="130" font-family="sans-serif" font-size="10" font-weight="bold" fill="#64748b" text-anchor="middle" letter-spacing="2">EST. 1956</text>
    </svg>`
  },
  tworivers_logo: {
    urls: [
      'https://tworivers.co.ke/wp-content/uploads/2021/04/TRM_LOGO.png',
      'https://www.tworivers.co.ke/wp-content/uploads/2021/04/TRM_LOGO.png',
      'https://tworiversmall.com/wp-content/uploads/2021/04/TRM_LOGO.png'
    ],
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" fill="#f8fafc" rx="20"/>
      <path d="M60,60 L140,60 L100,100 Z" fill="#0ea5e9" opacity="0.8"/>
      <path d="M60,140 L140,140 L100,100 Z" fill="#0284c7" opacity="0.9"/>
      <text x="100" y="112" font-family="sans-serif" font-size="32" font-weight="900" fill="#ffffff" text-anchor="middle">TR</text>
    </svg>`
  },
  sabis_logo: {
    urls: [
      'https://sabis.net/images/logo.png',
      'https://www.sabis.net/images/logo.png'
    ],
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" fill="#f8fafc" rx="20"/>
      <path d="M100,45 C80,75 55,85 55,105 C55,130 75,150 100,150 C125,150 145,130 145,105 C145,85 120,75 100,45 Z" fill="#1e3a8a"/>
      <text x="100" y="112" font-family="sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">SABIS</text>
    </svg>`
  },
  ciata_logo: {
    urls: [
      'https://ciatacity.co.ke/favicon.svg',
      'https://ciatacity.co.ke/logo.png',
      'https://ciatacity.co.ke/assets/logo.png'
    ],
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" fill="#f8fafc" rx="20"/>
      <circle cx="100" cy="100" r="60" fill="none" stroke="#ea580c" stroke-width="8"/>
      <text x="100" y="115" font-family="'Outfit', sans-serif" font-size="52" font-weight="800" fill="#ea580c" text-anchor="middle">C</text>
      <text x="100" y="150" font-family="sans-serif" font-size="10" font-weight="bold" fill="#9a3412" text-anchor="middle" letter-spacing="1.5">CIATA CITY</text>
    </svg>`
  },
  rosslyn_logo: {
    urls: [
      'https://rosslynacademy.org/wp-content/uploads/2024/02/RA-logo-color.png',
      'https://rosslynacademy.org/wp-content/uploads/2021/08/rosslyn-logo.png'
    ],
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" fill="#f8fafc" rx="20"/>
      <rect x="50" y="50" width="100" height="100" rx="15" fill="#15803d"/>
      <text x="100" y="112" font-family="sans-serif" font-size="36" font-weight="bold" fill="#ffffff" text-anchor="middle">RA</text>
    </svg>`
  },
  biovax_logo: {
    urls: [
      'https://biovax.go.ke/wp-content/uploads/2026/05/BIOVAX-LOGO-brand-Logo.webp',
      'https://biovax.go.ke/wp-content/uploads/2022/02/cropped-BioVax-Logo-1.png'
    ],
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" fill="#f8fafc" rx="20"/>
      <path d="M70,60 Q100,40 130,60 Q150,100 130,140 Q100,160 70,140 Q50,100 70,60 Z" fill="#2563eb" opacity="0.15"/>
      <path d="M100,50 L100,150 M75,75 L125,75 M70,100 L130,100 M75,125 L125,125" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/>
      <circle cx="75" cy="75" r="5" fill="#1d4ed8"/>
      <circle cx="125" cy="75" r="5" fill="#1d4ed8"/>
      <circle cx="70" cy="100" r="5" fill="#1d4ed8"/>
      <circle cx="130" cy="100" r="5" fill="#1d4ed8"/>
      <circle cx="75" cy="125" r="5" fill="#1d4ed8"/>
      <circle cx="125" cy="125" r="5" fill="#1d4ed8"/>
      <text x="100" y="175" font-family="sans-serif" font-size="14" font-weight="900" fill="#1e3a8a" text-anchor="middle" letter-spacing="1">BIOVAX</text>
    </svg>`
  },
  weetabix_logo: {
    urls: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Weetabix_logo.svg/800px-Weetabix_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Weetabix_logo.svg/1024px-Weetabix_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/en/f/f6/Weetabix_logo.svg'
    ],
    fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" fill="#fef08a" rx="20"/>
      <ellipse cx="100" cy="100" rx="80" ry="45" fill="#1d4ed8"/>
      <text x="100" y="107" font-family="sans-serif" font-size="22" font-weight="900" font-style="italic" fill="#ffffff" text-anchor="middle">Weetabix</text>
    </svg>`
  }
};

const assetsDir = path.join(__dirname, 'src', 'assets');

async function download(urlStr, dest, redirectCount = 0) {
  if (redirectCount > 5) {
    throw new Error('Too many redirects');
  }

  const url = new URL(urlStr);
  const clientLib = url.protocol === 'https:' ? https : http;

  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    };

    clientLib.get(urlStr, options, (res) => {
      // Handle redirects (301, 302, 307, 308)
      if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url.origin).toString();
        }
        console.log(`Redirecting to ${redirectUrl}`);
        resolve(download(redirectUrl, dest, redirectCount + 1));
        return;
      }

      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} ${res.statusMessage}`));
        return;
      }

      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
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
  for (const [name, logoData] of Object.entries(logos)) {
    let success = false;
    let downloadedExt = '.png';

    // Try all candidate URLs in sequence
    for (const url of logoData.urls) {
      const cleanUrl = url.split('?')[0];
      const ext = path.extname(cleanUrl) || '.png';
      const dest = path.join(assetsDir, `${name}${ext}`);

      try {
        console.log(`Attempting download for ${name} from ${url}...`);
        await download(url, dest);
        console.log(`✓ Successfully downloaded ${name}${ext}`);
        success = true;
        downloadedExt = ext;
        break;
      } catch (e) {
        console.warn(`✗ Failed to download from ${url}: ${e.message}`);
        // clean up failed file if it exists
        if (fs.existsSync(dest)) {
          fs.unlinkSync(dest);
        }
      }
    }

    // Write fallback SVG if all downloads failed
    if (!success) {
      const destSvg = path.join(assetsDir, `${name}.svg`);
      fs.writeFileSync(destSvg, logoData.fallbackSvg);
      console.log(`★ Generated fallback SVG for ${name}`);
    }
  }
}

run();
