# batchSvgTransverter

#### 介绍
一个转换svg图片格式的nodejs小工具

#### 软件架构
软件架构说明


#### 安装教程

1.  命令行运行 npm install 
2.  window 环境双击run.bat 其他环境运行命令 node ./main.js 

#### 使用说明

1. 在根目录中的config.json中配置信息
2. 检测目录中是否存在 svg和 outPut 文件夹，没有则新建一个，其中svg目录存放需要转换的文件。outPut为转换后的输出目录

```
{
    "svgPath": "svg",
    "outPath": "outPut",
    "outType": "png"
}
```

svgPath 指需要放进的svg文件目录 ，这里指定svg 这里是脚本需要读取svg文件地方 若需要改，请先新建一个对应的文件夹，否则会报错找不到输出文件目录

outPath 指输出文件的目录 ，这里指定outPut ,若需要改，请先新建一个对应的文件夹，否则会报错找不到输出文件目录

outType 指输出文件的格式 这里指定png格式 

