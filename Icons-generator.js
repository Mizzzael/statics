const fs = require('fs');
const path = require('path');
const beautifie = require('json-beautify');

const icons = {};

function addIcons(file, dir) {
    const filename = file.replace(/[_-]/g, ' ').split('.')[0];
    let fName = '';
    filename.split(' ').forEach((w) => {
        const newW = w.split('');
        if (newW.length) {
            newW[0] = newW[0].toUpperCase();
        }
        fName += `${newW.join('').replace(/[0-9]/g, '')} `;
    });
    icons[dir.replace('-', '')].push({
        filename: `${dir}/${file}`,
        name: fName.trim(),
    });
}

async function saveInJSON(JSON) {
    const data = beautifie(JSON, null, 4);
    await fs.writeFileSync(path.join(__dirname, 'src/assets/js/icons.json'), data);
    console.log(data);
}

fs.readdir(path.join(__dirname, 'src/assets/icons/'), async (err, paths) => {
    if (err) {
        console.log(err);
        return err;
    }
    paths.forEach(async (dir) => {
        const files = await fs.promises.readdir(path.join(__dirname, `src/assets/icons/${dir}`));
        icons[dir.replace('-', '')] = [];
        files.forEach((file) => {
            addIcons(file, dir);
        });
        saveInJSON({ icons });
    });
});
