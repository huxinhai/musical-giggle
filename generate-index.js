const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src'); // 源代码目录
const indexFilePath = path.join(srcDir, 'index.ts'); // 生成的 index.ts 文件路径

// 读取 src 目录下的所有文件
fs.readdir(srcDir, (err, files) => {
    if (err) {
        console.error('无法读取目录', err);
        return;
    }

    // 过滤出所有的 .ts 文件，排除 index.ts 本身
    const tsFiles = files.filter(file => file.endsWith('.ts') && file !== 'index.ts');

    // 构造每个文件的 export 语句
    const exports = tsFiles.map(file => {
        const moduleName = path.basename(file, '.ts');
        return `export * from './${moduleName}';`;
    });

    // 将生成的 export 语句写入 index.ts 文件
    fs.writeFile(indexFilePath, exports.join('\n'), (err) => {
        if (err) {
            console.error('无法写入 index.ts 文件', err);
        } else {
            console.log('index.ts 文件已生成');
        }
    });
});
