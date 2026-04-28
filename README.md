# 自动化社官网（Next.js + Tailwind）

这是一个 **静态单页** 的 Next.js 项目（App Router），用于自动化社官网第一版。

## 页面结构

页面文件：`app/page.tsx`

包含 6 个区块：
1. 简介 About
2. 加入我们 Join
3. 项目与培养方案 Projects & Roadmap
4. 学习资源 Resources
5. 联系方式 Contact
6. 反馈 Feedback

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 构建生产版本

```bash
npm run build
npm run start
```

## 如何修改关键信息

### 1) 修改报名链接
在 `app/page.tsx` 中搜索：
- `https://example.com/join`

替换为你的真实报名链接。

### 2) 修改联系方式
在 `app/page.tsx` 中搜索并修改：
- `automation.club@example.com`
- `AutomationClub（占位）`

### 3) 修改反馈链接
在 `app/page.tsx` 中搜索：
- `https://example.com/feedback`

替换为你的真实反馈表单链接。

## 图片替换说明

当前版本未引用外部图片，已预留本地图片目录：

- `public/images/`

你可以后续放入真实图片（例如 `about-cover.jpg`），并在 `app/page.tsx` 中将占位块替换为 `<img>` 或 `next/image` 的本地资源引用。

## 扩展建议（后续）

当前保持单页实现，后续扩展为多页面时建议：
- 新增 `app/about/page.tsx`、`app/projects/page.tsx` 等独立页面；
- 抽离导航、卡片、分区组件到 `components/`；
- 将链接与文案迁移到单独配置文件，方便接入动态内容。
