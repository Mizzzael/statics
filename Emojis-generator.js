const fs = require('fs');
const path = require('path');
const beautifie = require('json-beautify');

const icons = {};

function addIcons(file, dir = '', name) {
    const filename = file.replace(/[_-]/g, ' ').split('.')[0];
    let fName = '';
    filename.split(' ').forEach((w) => {
        const newW = w.split('');
        if (newW.length) {
            newW[0] = newW[0].toUpperCase();
        }
        fName += `${newW.join('').replace(/[0-9]/g, '')} `;
    });
    icons[name.replace('-', '')].push({
        filename: `${name}/${file}`,
        name: fName.trim(),
    });
}

async function saveInJSON(JSON) {
    for (const dir in JSON.icons) {
        const data = beautifie({ path: JSON.icons[dir] }, null, 4);
        await fs.writeFileSync(path.join(__dirname, `src/assets/js/emoticons/${dir}.json`), data);
    }
}

async function readDirAndSaveFiles(p = path.join(__dirname, 'public/assets/emoticons/'), name = 'Emoticons') {
    fs.readdir(p, async (err, paths) => {
        if (err) {
            console.log(err);
            return err;
        }
        paths.forEach(async (dir) => {
            const stats = await fs.lstatSync(path.join(p, `${dir}`));
            if (stats.isDirectory()) {
                await readDirAndSaveFiles(path.join(p, `${dir}/`), dir.replace(/[ ]/g, '_').toLowerCase());
            } else {
                if (!icons[name.replace('-', '')]) { icons[name.replace('-', '')] = []; }
                addIcons(dir, p, name);
            }
        });
        saveInJSON({ icons });
    });
}

readDirAndSaveFiles();
