import { execa } from 'execa';
import { promises as fs } from 'fs';

(async () => {
  try {
    await execa('git', ['checkout', '--orphan', 'gh-pages']);
    console.log('Building...');
    await execa('npm', ['run', 'build']);
    const folderName = 'dist';
    
    // GitHub Pages: prevent Jekyll and add SPA fallback
    await fs.writeFile(`${folderName}/.nojekyll`, "");
    try {
      await fs.copyFile(`${folderName}/index.html`, `${folderName}/404.html`);
    } catch (err) {
      console.warn('Warning: could not create 404.html fallback:', err?.message || err);
    }
    await execa('git', ['--work-tree', folderName, 'add', '--all']);
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages']);
    console.log('Pushing to gh-pages...');
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force']);
    await execa('rm', ['-r', folderName]);
    await execa('git', ['checkout', '-f', 'main']);
    await execa('git', ['branch', '-D', 'gh-pages']);
    console.log('Successfully deployed');
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
