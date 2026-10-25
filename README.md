# 小玩同学的Java学习站 · 18 关

一份给零基础学习者的分级 Java 教程：从第一个 Java 程序，到能运行、能保存数据的命令行待办与记账项目；每关顺手学一个 CSS 知识点。

课程采用**顶部课程目录二级菜单 + 18 个独立关卡页面**的结构。首页只保留学习进度和继续入口，完整的关卡目录收在右上角的抽屉菜单里；每个关卡都有自己的 URL，学完可以直接进入下一关。

每关还包含 **2 道输入题** 和 **1 个代码工作台**（共 18 个代码任务）：输入题需要自己敲出答案，系统即时判定；代码工作台提供 3 步任务拆解、逐级提示、行号/光标定位、结构检查、参考实现和 `.java` 下载。答对/通过状态会单独保存。

> 浏览器不能直接编译 Java。代码工作台做的是结构与关键代码检查，最终请下载或复制到 IDEA / JDK 中运行。

## 怎么打开

直接双击 `index.html`，用 Chrome、Edge 或 Firefox 打开即可。

- 不需要安装、构建或联网。
- 点右上角「课程目录」，会从右侧展开二级菜单，里面按六个阶段列出 18 个关卡。
- 首页只保留学习进度和「继续第 N 关」入口，不再铺开关卡列表。
- 学习进度保存在浏览器本地（localStorage）。
- 首页底部的 CSS 实验室实时可编辑，不会影响页面本身。

> 如果直接双击本地 HTML 测试，部分浏览器会限制 `file://` 页面之间的 localStorage 共享；上传到虚拟主机或通过本地 HTTP 服务访问时，进度会正常跨页面保存。

## 文件说明

| 文件 | 作用 |
| --- | --- |
| `index.html` | 首页：首屏、安装清单、学习进度、CSS 实验室、结课页 |
| `lesson.html` | 通用关卡页，通过 `?level=01`—`?level=18` 显示对应章节 |
| `styles.css` | 全站样式：CSS 变量、Flex/Grid、响应式、课程抽屉菜单、深色主题 |
| `chapters.js` | 18 关课程内容：讲解、Java 示例、CSS 小课堂、输入题、代码任务、测验 |
| `script.js` | 关卡渲染、课程目录二级菜单、输入题判定、代码检查器、学习进度、CSS 实验室 |
| `README.md` | 本文件 |

## 页面地址

- 首页：`index.html`
- 第 1 关：`lesson.html?level=01`
- 第 5 关：`lesson.html?level=05`
- 第 18 关：`lesson.html?level=18`

右上角「课程目录」在任何页面都能打开；上一关、下一关和左侧关卡导航也会直接跳转到对应页面。标记完成后，首页和菜单里的「继续学习」会自动指向第一关未完成的内容。

## 课程结构

| 关卡 | Java | CSS |
| --- | --- | --- |
| 01 | Hello World、类与 main | 规则三段式、注释 |
| 02 | 变量与数据类型 | CSS 变量、单位 |
| 03 | Scanner 输入、运算符 | 盒模型 |
| 04 | if / else、比较与逻辑 | 文字排版 |
| 05 | for / while 循环 | :hover + transition |
| 06 | 数组、增强 for | Flexbox |
| 07 | 方法、参数与返回值 | Grid |
| 08 | 类、对象、构造方法 | class 选择器 |
| 09 | 封装、继承、多态入门 | 层叠与优先级 |
| 10 | ArrayList、HashMap | @media 响应式 |
| 11 | 异常处理与调试 | @keyframes 动画 |
| 12 | 综合项目：待办清单 | CSS 变量主题 |
| 13 | String、trim、equals | text-overflow 省略号 |
| 14 | interface、implements、多态 | ::before / ::after |
| 15 | enum、switch 表达式 | position: sticky |
| 16 | 泛型、HashSet 去重 | clamp() 响应式字号 |
| 17 | Path、Files、IOException | :focus-within |
| 18 | 综合项目：记账本与文件持久化 | Grid auto-fit |

## 学习方式

每一关建议按这个顺序：

1. 把示例代码敲进编辑器，运行成功。
2. 读「拆开」部分，把代码和解释对应起来。
3. 完成「别只选，自己写出来」里的两道输入题。
4. 按「任务拆解」在「代码工作台」里补全代码；卡住时点「给我一点提示」。
5. 点「检查代码」，按逐项结果修正，再复制或下载 `.java` 到 IDEA / JDK 中运行。
6. 完成底部的「轮到你」。
7. 看右侧 CSS 小课堂，再去首页的 CSS 实验室改一改。
8. 点「标记完成」，再用底部「下一关」继续。

课程建议使用 JDK 21 或更新的 LTS。代码示例按 Java 17+ 编写，第 12、15 关使用了箭头 `switch`（Java 14+）。

## 上传到虚拟主机

把根目录下的以下文件放在同一个网站目录即可：

```text
index.html
lesson.html
styles.css
chapters.js
script.js
```

`README.md` 可选。上传后访问域名即可，不需要数据库，也不需要 PHP/Node/Java 运行环境。

## 常见排查

如果关卡页显示「课程内容没有加载成功」：

1. 确认 `lesson.html` 与 `chapters.js` 在同一个目录。
2. 确认 `chapters.js` 已完整上传，没有被编辑器或上传工具改坏。
3. 按 `Ctrl + F5` 强制刷新，避免浏览器继续使用旧缓存。
4. 打开浏览器开发者工具 → Console / Network，查看 `chapters.js` 是否 404 或有语法错误。

当前页面资源带有 `?v=12` 版本号，更新文件后可以避免旧的 CSS/JS 缓存。

## 想改内容

- 改课程文字或示例：编辑 `chapters.js` 的 `COURSE_CHAPTERS` 数组。
- 改配色：编辑 `styles.css` 顶部的 `:root` 和 `html[data-theme="night"]` 变量。
- 调整课程菜单里的关卡：编辑 `chapters.js`；菜单会按 `PHASES` 自动分组，不需要改 HTML。
- 重置学习进度：在浏览器开发者工具执行 `localStorage.removeItem("java-start-progress")`，刷新页面。
- 重置输入题成绩：执行 `localStorage.removeItem("java-start-input-solved")`，刷新页面。
- 重置代码任务成绩：执行 `localStorage.removeItem("java-start-code-solved")`，刷新页面。
- 清空当前关代码草稿：执行 `Object.keys(localStorage).filter(k => k.startsWith("java-start-code-draft-")).forEach(k => localStorage.removeItem(k))`。

## 一点建议

不要一次刷完 18 关。每天 30 分钟、推进一到两关，把代码亲手敲完，比“看懂了”更有用。

## 试用网页

[小玩同学的Java学习站](http://study.xiawan233.top)
