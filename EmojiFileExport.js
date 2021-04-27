const fs = require('fs');
const path = require('path');

let code = '';
fs.readdir(path.join(__dirname, './src/assets/js/emoticons'), async (_, files) => {
    files.forEach((v) => {
        const importText = `import ${v.split('.')[0].replace(/[,_-]/g, '')} from './emoticons/${v}';\n`;
        code += importText;
    });
    code += '\nexport default [\n';
    files.forEach((v) => {
        const importText = `    [...${v.split('.')[0].replace(/[,_-]/g, '')}.path],\n`;
        code += importText;
    });
    code += '];\n';
    await fs.writeFileSync(path.join(__dirname, 'src/assets/js/emoji.js'), code);
});
