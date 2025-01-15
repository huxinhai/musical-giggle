const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src'); // 源代码目录
const indexFilePath = path.join(srcDir, 'index.ts'); // 生成的 index.ts 文件路径

// 递归读取目录中的所有 .ts 文件
function readDirRecursive(dir, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error('无法读取目录', err);
            return;
        }

        let pending = files.length;
        if (!pending) return callback(null, []);

        const results = [];

        files.forEach(file => {
            const filePath = path.join(dir, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error('无法获取文件状态', err);
                    return callback(err);
                }

                if (stats.isDirectory()) {
                    readDirRecursive(filePath, (err, subResults) => {
                        if (err) return callback(err);
                        results.push(...subResults);
                        if (!--pending) callback(null, results);
                    });
                } else if (file.endsWith('.ts') && file !== 'index.ts') {
                    results.push(filePath);
                    if (!--pending) callback(null, results);
                } else if (!--pending) callback(null, results);
            });
        });
    });
}

// 生成 index.ts 文件
readDirRecursive(srcDir, (err, tsFiles) => {
    if (err) {
        console.error('无法读取目录', err);
        return;
    }

    // 构造每个文件的 export 语句
    const exports = tsFiles.map(file => {
        const relativePath = path.relative(srcDir, file).replace(/\.ts$/, '');
        // 使用正斜杠替换反斜杠
        const normalizedPath = relativePath.replace(/\\/g, '/');
        return `export * from './${normalizedPath}';`;
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
