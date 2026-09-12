import { mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const username = process.env.PROFILE_USERNAME;
const modulePath = process.env.ARCADE_MODULE_PATH;
if (!username || !modulePath) throw new Error('PROFILE_USERNAME and ARCADE_MODULE_PATH are required.');
const { ArcadeRenderer } = await import(pathToFileURL(modulePath).href);
await mkdir('assets/activity', { recursive: true });

for (const [theme, suffix] of [['github', ''], ['github-dark', '-dark']]) {
  const svg = await new Promise((resolve, reject) => {
    let output = '';
    const renderer = new ArcadeRenderer({
      game: 'galaga',
      username,
      platform: 'github',
      gameTheme: theme,
      showMonthLabels: true,
      githubSettings: { accessToken: process.env.GITHUB_TOKEN },
      svgCallback: (value) => { output = value; },
      gameOverCallback: () => resolve(output),
      pointsIncreasedCallback: () => {}
    });
    renderer.start().catch(reject);
  });
  if (!svg.includes('<svg') || svg.length < 1000 || /<script\b/i.test(svg)) {
    throw new Error('The generator did not return a valid contribution SVG.');
  }
  await writeFile('assets/activity/galaga' + suffix + '.svg', svg);
}
