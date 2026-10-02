const { execSync } = require('child_process');
const fs = require('fs');

function runLighthouse(device, index) {
  console.log(`Running ${device} run ${index}...`);
  const formFactor = device === 'desktop' ? '--preset=desktop' : '--form-factor=mobile';
  const file = `lh-${device}-${index}.json`;
  try {
      execSync(`npx lighthouse http://localhost:3000 --chrome-flags="--headless" --output json --output-path ./${file} ${formFactor}`, { stdio: 'inherit' });
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      return {
        performance: data.categories.performance.score * 100,
        accessibility: data.categories.accessibility.score * 100,
        best_practices: data.categories['best-practices'].score * 100,
        seo: data.categories.seo.score * 100,
        lcp: data.audits['largest-contentful-paint'].numericValue,
        tbt: data.audits['total-blocking-time'].numericValue,
        cls: data.audits['cumulative-layout-shift'].numericValue,
        fcp: data.audits['first-contentful-paint'].numericValue,
      };
  } catch (err) {
      console.error(`Error on ${device} run ${index}`);
      return null;
  }
}

function median(arr) {
  const valid = arr.filter(x => x !== null && x !== undefined);
  if (!valid.length) return 0;
  const mid = Math.floor(valid.length / 2);
  const nums = [...valid].sort((a, b) => a - b);
  return valid.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

const mobileRuns = [];
const desktopRuns = [];

for(let i=1; i<=3; i++) {
  mobileRuns.push(runLighthouse('mobile', i));
  desktopRuns.push(runLighthouse('desktop', i));
}

console.log("\n\n--- RESULTS ---");
console.log("MOBILE RUNS:", JSON.stringify(mobileRuns, null, 2));
console.log("DESKTOP RUNS:", JSON.stringify(desktopRuns, null, 2));

const metrics = ['performance', 'accessibility', 'best_practices', 'seo', 'lcp', 'tbt', 'cls', 'fcp'];

const mobileMedians = {};
const desktopMedians = {};

metrics.forEach(m => {
  mobileMedians[m] = median(mobileRuns.map(r => r ? r[m] : null));
  desktopMedians[m] = median(desktopRuns.map(r => r ? r[m] : null));
});

console.log("MOBILE MEDIAN:", JSON.stringify(mobileMedians, null, 2));
console.log("DESKTOP MEDIAN:", JSON.stringify(desktopMedians, null, 2));
