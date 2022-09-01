# Electron-Lark

electron 版的飞书 Feishu (原 Lark)，对网页版本进行封装


基于此版本：https://github.com/Ericwyn/electron-lark，使用TypeScript进行重构。


相比起普通网页版，功能如下

- 独立的运行窗口，不容易误关闭
- 关闭程序时后台运行，隐藏到通知栏小图标，双击可重新打开界面
- 新消息提醒，状态栏小图标闪烁
- 解除浏览器限制，避免因浏览器版本不对而提示无法使用

已知问题
 - 部分功能无法使用(工作台/会议等)
    - 飞书网页版缺陷，请向官方反馈


运行方法

- `pnpm install`安装依赖
- `pnpm build`执行 TypeScript 编译
- 复制`./src/window`目录到`./dist/src/window`
- 复制`./icon`目录到`./dist/icon`
- `pnpm start`执行
