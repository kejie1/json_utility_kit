# JSON Utility Kit AI 代码生成规格

这份文档用于交给 AI 编程工具生成网站代码。不要把这里当作人工执行清单；人工执行事项见 `JSON_Utility_Kit_执行清单.md`。

## 1. 生成目标

生成一个英文静态工具站：

```text
JSON Utility Kit
```

定位：

```text
A fast, private, browser-based JSON toolkit for formatting, validating, viewing, editing, minifying, and converting JSON data.
```

技术栈建议：

```text
Astro
TypeScript
Tailwind CSS
Markdown / MDX content
Client-side JavaScript for JSON tools
Static deployment
```

要求：

- 所有核心 JSON 处理默认在浏览器本地完成。
- 不需要后端。
- 不需要数据库。
- 不需要用户登录。
- 不上传用户 JSON。
- 页面必须适配移动端和桌面端。
- 每个工具页必须有 SEO TDK、说明、示例、FAQ、相关工具链接。

## 2. 页面路由

必须生成：

```text
/
/tools/json-formatter
/tools/json-validator
/tools/json-beautifier
/tools/json-viewer
/tools/json-minifier
/tools/json-editor
/tools/json-to-csv
/tools/csv-to-json
/blog/what-is-json
/blog/how-to-format-json
/blog/how-to-validate-json
/blog/how-to-fix-invalid-json
/blog/json-minify-vs-beautify
/blog/json-vs-xml
/about
/contact
/privacy-policy
/terms
/sitemap.xml
/robots.txt
/ads.txt
```

第一版如果时间有限，必须至少完成：

```text
/
/tools/json-formatter
/tools/json-validator
/tools/json-beautifier
/tools/json-viewer
/tools/json-minifier
/tools/json-editor
/about
/contact
/privacy-policy
/terms
```

## 3. 全站布局

### Header

包含：

- Logo 文本：JSON Utility Kit
- Tools
- Blog
- About
- Contact

### Footer

包含：

- Copyright
- Privacy Policy
- Terms
- Contact
- 简短隐私说明：JSON is processed locally in your browser.

### 样式方向

- 工具站风格，清爽、可信、偏开发者。
- 不要做营销型大横幅。
- 不要做夸张渐变和装饰。
- 页面重点是工具本体。
- 工具输入区、输出区、操作按钮要清晰。
- 支持暗色模式可选，但不是强制。

## 4. 首页规格

URL：

```text
/
```

SEO：

```text
Title: JSON Utility Kit - Free Online JSON Tools
Description: Format, validate, view, edit, minify, and convert JSON online. Fast browser-based JSON tools for developers and data users.
H1: JSON Utility Kit
```

首页模块：

1. 首屏
   - H1：JSON Utility Kit
   - 文案：Format, validate, view, edit, minify, and convert JSON directly in your browser.
   - 主按钮：Open JSON Formatter
   - 次按钮：Browse All Tools

2. 工具列表
   - JSON Formatter
   - JSON Validator
   - JSON Beautifier
   - JSON Viewer
   - JSON Minifier
   - JSON Editor
   - JSON to CSV
   - CSV to JSON

3. 隐私说明
   - Your JSON is processed locally in your browser.
   - Core tools do not require uploading your data.

4. 教程列表
   - What Is JSON?
   - How to Format JSON
   - How to Validate JSON
   - How to Fix Invalid JSON

5. FAQ

## 5. 工具通用组件

建议生成组件：

```text
ToolLayout
ToolTextarea
ToolActions
ToolResultPanel
ToolErrorPanel
ToolOptions
RelatedTools
ToolFAQ
ArticleCard
```

工具页通用结构：

```text
H1
Short description
Tool input/output interface
Actions
Options
Example JSON button
How to use section
FAQ
Related tools
Related articles
```

通用按钮：

- Format
- Validate
- Beautify
- Minify
- Copy
- Download
- Clear
- Load Example

## 6. JSON 工具逻辑

### 6.1 JSON Formatter

URL：

```text
/tools/json-formatter
```

SEO：

```text
Title: JSON Formatter Online - Format and Validate JSON
Description: Format, beautify, and validate JSON online in your browser. Free JSON formatter with error messages, indentation options, copy, and download.
H1: JSON Formatter Online
```

功能：

- 输入 JSON。
- 点击 Format 后调用 `JSON.parse`。
- 成功后用 `JSON.stringify(parsed, null, indent)` 输出。
- 支持缩进选项：2 spaces、4 spaces、tab。
- 自动显示 Valid JSON。
- 错误时显示错误信息。
- 支持 Copy、Download、Clear、Load Example。

### 6.2 JSON Validator

URL：

```text
/tools/json-validator
```

SEO：

```text
Title: JSON Validator Online - Check JSON Syntax
Description: Validate JSON online and find syntax errors with line and column details. Check JSON format safely in your browser.
H1: JSON Validator Online
```

功能：

- 输入 JSON。
- 点击 Validate。
- 成功：显示 Valid JSON。
- 失败：显示错误消息。
- 如果可行，计算错误位置附近内容。
- 支持格式化合法 JSON。

### 6.3 JSON Beautifier

URL：

```text
/tools/json-beautifier
```

SEO：

```text
Title: JSON Beautifier Online - Pretty Print JSON
Description: Beautify and pretty print JSON online. Turn compact JSON into readable formatted JSON with indentation options.
H1: JSON Beautifier Online
```

功能：

- 与 formatter 类似，重点文案为 pretty print / beautify。
- 支持缩进配置。

### 6.4 JSON Viewer

URL：

```text
/tools/json-viewer
```

SEO：

```text
Title: JSON Viewer Online - View JSON as a Tree
Description: View JSON online as an expandable tree. Search, expand, collapse, and inspect JSON data directly in your browser.
H1: JSON Viewer Online
```

功能：

- 输入 JSON。
- 成功解析后显示树形结构。
- 支持展开/折叠。
- 支持搜索 key/value。
- 显示基本 JSON path。

第一版可简化：

- 用递归组件显示 object / array。
- 每个节点默认可折叠。
- 不必做复杂虚拟滚动。

### 6.5 JSON Minifier

URL：

```text
/tools/json-minifier
```

SEO：

```text
Title: JSON Minifier Online - Minify and Compress JSON
Description: Minify JSON online by removing whitespace and line breaks. Compress JSON safely in your browser and copy the result instantly.
H1: JSON Minifier Online
```

功能：

- 输入 JSON。
- 成功解析后输出 `JSON.stringify(parsed)`。
- 显示原始字符数、压缩后字符数、节省比例。
- 支持 Copy、Download、Clear、Load Example。

### 6.6 JSON Editor

URL：

```text
/tools/json-editor
```

SEO：

```text
Title: JSON Editor Online - Edit and Validate JSON
Description: Edit, format, and validate JSON online with instant feedback. A fast browser-based JSON editor for developers and data users.
H1: JSON Editor Online
```

功能：

- 左侧输入/编辑。
- 右侧格式化输出或错误提示。
- 可手动点击 Format / Validate。
- 第一版不要求实时每键解析，避免大文本卡顿。

## 7. JSON to CSV

URL：

```text
/tools/json-to-csv
```

第一版可选，但建议保留路由。

功能：

- 支持 JSON array of objects。
- 自动提取表头。
- 输出 CSV 文本。
- 提供下载 `.csv`。
- 对嵌套对象给出限制说明。

## 8. CSV to JSON

URL：

```text
/tools/csv-to-json
```

第一版可选，但建议保留路由。

功能：

- 输入 CSV。
- 第一行作为 header。
- 输出 JSON array。
- 简单处理引号和逗号。
- 如果不想手写 CSV parser，可以使用轻量库。

## 9. 基础页面

### About

说明：

- JSON Utility Kit 是什么。
- 面向谁。
- 强调本地处理。

### Contact

包含：

- 联系邮箱占位。
- 反馈说明。

### Privacy Policy

必须包含：

- Core JSON tools process data locally in the browser.
- The site may use analytics.
- The site may use Google AdSense after approval.
- Cookies and advertising disclosure.

### Terms

必须包含：

- Tools are provided as-is.
- Users should not paste sensitive production secrets if they do not trust the environment.
- No warranty for data loss or business decisions.

## 10. 内容文件

生成首批 Markdown：

```text
what-is-json.md
how-to-format-json.md
how-to-validate-json.md
how-to-fix-invalid-json.md
json-minify-vs-beautify.md
json-vs-xml.md
```

每篇文章必须包含：

- title
- description
- date
- slug
- H1
- short answer
- step-by-step section
- example
- related tool link
- FAQ

## 11. SEO 和技术要求

必须生成：

- 每页唯一 title。
- 每页唯一 meta description。
- 每页一个 H1。
- canonical URL 支持。
- sitemap.xml。
- robots.txt。
- ads.txt 占位。
- Open Graph 基础标签。
- 移动端可用。
- 无空链接。
- 404 页面。

## 12. 验收标准

代码生成完成后必须满足：

- 本地能启动。
- 首页可访问。
- 6 个核心工具页可访问。
- JSON Formatter 可正常格式化合法 JSON。
- JSON Validator 可识别非法 JSON。
- JSON Minifier 可输出压缩 JSON。
- JSON Viewer 可显示树形结构。
- Copy / Clear / Load Example 可用。
- sitemap.xml 可访问。
- robots.txt 可访问。
- 基础页面完整。
- 页面无明显布局错乱。
- 移动端宽度下工具区不溢出。

## 13. 明确不要生成

第一版不要生成：

- 登录注册。
- 付费系统。
- 数据库存储。
- 云端保存用户 JSON。
- 复杂后台。
- 需要服务器处理 JSON 的 API。
- 广告密集布局。
- 大量无意义 SEO 页面。
