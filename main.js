const svg2img = require('svg2img');
const fs = require('fs');
const path = require('path');
const { svgPath, outPath, outType } = require('./config.json')


function save(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(`./${svgPath}/${fileName}.svg`, 'utf8', function (error, data) {
            if (error) {
                console.error(error);
                return;
            }
            // Convert the SVG data to PNG
            svg2img(data, function (error, buffer) {
                if (error) {
                    console.error(error);
                    return;
                }
                const pathName = `./${outPath}/${fileName}.${outType}`;
                // Write the buffer data to a file
                fs.writeFile(pathName, buffer, function (error) {
                    if (error) {
                        console.error(error);
                        return;
                    }
                    console.log(`Image saved as ${pathName}`);
                    resolve()
                });
            });
        });

    })

}

function readSvgFile() {
    return new Promise((resolve, reject) => {
        fs.readdir(svgPath, function (error, files) {
            if (error) {
                console.error(error);
                return;
            }

            const svgFiles = files.filter(function (file) {
                return path.extname(file).toLowerCase() === '.svg';
            });
            console.log(`SVG files in directory: ${svgFiles}`);
            resolve(svgFiles)
        });
    })

}

readSvgFile().then(svgFiles => {
    const tasks = svgFiles.map((svgFile, index) => {
        return save(svgFile.replace('.svg', ''))
    })
    Promise.all(tasks).then(() =>
        console.log(`\r\n图片转换完成,请进入 ${outPath} 目录查看`)
    )
})

