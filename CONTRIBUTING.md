# 贡献指南

欢迎参与 AutoLife Lab 官网建设。

AutoLife Lab 是深圳理工大学先行书院的学生实践社团。这个网站用于展示社团定位、成员档案、项目路线、学习资源和招新信息。我们欢迎社团成员一起维护它。

## 你可以贡献什么

你可以帮助我们：

- 修改网站文案
- 补充成员信息
- 添加项目介绍
- 整理学习资源
- 优化页面样式
- 修复错别字或排版问题
- 提出新的页面或功能建议

## 本地运行

先克隆仓库：

    git clone https://github.com/Gzx-070829/autolife-lab.git
    cd autolife-lab

安装依赖：

    npm install

启动开发服务器：

    npm run dev

然后在浏览器打开：

    http://localhost:3000

## 构建检查

提交前建议运行：

    npm run build

如果构建失败，请先修复错误再提交。

## 提交修改

推荐流程：

1. Fork 本仓库
2. 创建新分支
3. 完成修改
4. 运行 `npm run build`
5. 提交 Pull Request

分支名可以参考：

    fix-typo
    update-members
    add-project-card
    improve-mobile-layout

提交信息可以参考：

    Fix homepage typo
    Update members archive
    Add learning resources
    Improve mobile layout

## 内容修改建议

### 修改成员信息

成员信息应尽量准确。公开展示前，应获得相关成员同意。

不要提交以下隐私信息：

- 手机号
- 微信号
- 私人邮箱
- 学号
- 宿舍信息
- 其他未经本人同意公开的信息

### 添加项目介绍

项目介绍建议包含：

- 项目名称
- 项目目标
- 使用技术
- 参与成员
- 当前状态
- 一句话总结

### 添加学习资源

学习资源建议面向新生，保持清晰、简洁、可执行。

推荐方向包括：

- Git / GitHub
- VS Code
- 基础命令行
- Arduino
- 传感器与执行器
- AI 工具工作流
- 项目展示与 README 写作

## 文案风格

网站文案应尽量：

- 清晰
- 友善
- 适合新生阅读
- 避免过度商业化表达
- 避免夸大社团能力
- 保持真实、可维护、可持续

## Pull Request 说明

提交 Pull Request 时，请简单说明：

- 你修改了什么
- 为什么修改
- 是否测试过
- 是否涉及成员信息或隐私内容

示例：

    本次修改：
    - 更新首页学习资源文案
    - 修复一个错别字
    - 已运行 npm run build

## 维护原则

AutoLife Lab 官网应服务于社团长期建设，而不是只追求短期视觉效果。

我们希望这个网站能够持续记录：

- 社团成员
- 项目路线
- 活动经验
- 学习资源
- 校园生活中的真实问题和解决方案

感谢你的贡献。