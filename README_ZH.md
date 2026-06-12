# JSON Utility Kit (JSON 工具箱)

一个快速、安全、完全基于浏览器的 JSON 工具箱，用于 JSON 数据的格式化、验证、树状查看、编辑、压缩以及 CSV 转换。

[English](./README.md) | [简体中文](./README_ZH.md)

---

## ✨ 核心特性

- **100% 浏览器本地处理**：你的数据永远不会上传到服务器，无后端、无数据库，保证绝对的数据私密安全。
- **JSON 格式化与美化**：一键整理凌乱的 JSON，支持 2 空格、4 空格和 Tab 缩进。
- **JSON 语法验证**：精准定位 JSON 语法错误，提供异常行号和详细错误说明。
- **JSON 树形查看器**：交互式可折叠的树状结构，支持键值过滤检索以及一键复制 JSON 属性路径。
- **JSON 压缩器**：无损去除空格与换行，并直观统计压缩比例和节省的字节大小。
- **JSON 编辑器**：左右对称式开发编辑面板，支持对象属性按字母表进行 A-Z 自动排序。
- **JSON/CSV 互相转换**：遵循 RFC 4180 规范的 CSV 状态机解析转换，完美支持带双引号和逗号的单元格。
- **SEO 搜索引擎优化**：预置 Sitemap.xml、Robots.txt、唯一 Meta 标题及 TDK 标签。
- **自适应与暗色模式**：完美适配桌面端和移动端，内置一键暗色主题切换。

---

## 🛠️ 技术栈

- **构建框架**：[Astro (v4)](https://astro.build/) - 极速的静态网站生成器 (SSG)。
- **样式方案**：[Tailwind CSS](https://tailwindcss.com/) - 响应式多端自适应布局。
- **业务逻辑**：纯原生 TypeScript / 客户端 JavaScript。

---

## 📂 项目结构

```text
├── public/
│   ├── favicon.svg             # 网站图标
│   ├── sitemap.xml             # 自动生成的静态站点地图
│   ├── robots.txt              # 搜索引擎爬取规范
│   └── ads.txt                 # 广告主验证占位文件
├── src/
│   ├── components/             # 可复用 UI 组件 (页眉、页脚、FAQ、关联工具、教程卡片等)
│   ├── layouts/                # Astro 统一样式模板布局 (Layout, ToolLayout)
│   ├── content/                # 高质量 Markdown 技术博客/常见问题
│   └── pages/                  # 工具路由及静态政策页面
└── tailwind.config.mjs         # Tailwind 主题与配色配置
```

---

## 🚀 快速启动

### 1. 准备工作

确保你的本地开发环境中已安装 [Node.js](https://nodejs.org/) (推荐使用 v18.14.1 或更高版本)。

### 2. 安装依赖

```bash
# 进入项目目录
cd json_utility_kit

# 安装 npm 依赖
npm install
```

### 3. 启动本地开发服务

启动支持热重载的开发服务器：

```bash
npm run dev
```

打开浏览器访问：`http://localhost:4321`。

### 4. 生产环境编译

将整个站点静态编译并导出到 `dist/` 目录：

```bash
npm run build
```

### 5. 本地预览静态包

在部署前在本地模拟运行编译后的包：

```bash
npm run preview
```

---

## 🔒 隐私与安全说明

本应用完全没有后端服务或持久性数据库。所有格式化、校验和转换功能均在浏览器沙箱内利用客户端脚本在你的设备上本地完成。即使是处理高敏感的服务器配置、API 密钥或客户信息，也无需担心数据泄露。你可以在加载完页面后完全断开互联网连接，工具仍可无缝独立运行。

---

## 📄 开源协议

本项目采用 MIT 开源协议。
