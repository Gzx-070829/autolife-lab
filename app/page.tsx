const JOIN_FORM_URL = "#contact";
const FEEDBACK_FORM_URL = "#feedback";
const CONTACT_TARGET = "#contact";
const MEMBERS_URL = "/members";

const navItems = [
  { label: "首页", href: "#top" },
  { label: "加入我们", href: JOIN_FORM_URL },
  { label: "成员档案", href: MEMBERS_URL },
  { label: "项目路线", href: "#projects" },
  { label: "学习资源", href: "#resources" },
  { label: "联系方式", href: CONTACT_TARGET },
  { label: "反馈与建议", href: FEEDBACK_FORM_URL },
];

const buildDirections = [
  {
    title: "Life Automation",
    desc: "让日常重复动作自动发生",
  },
  {
    title: "Smart Devices",
    desc: "用传感器和执行器做智能小装置",
  },
  {
    title: "Campus Tools",
    desc: "为校园生活和学习做实用工具",
  },
  {
    title: "AI Workflow",
    desc: "学习使用 AI 工具提高学习、创作和项目效率",
  },
  {
    title: "Git Collaboration",
    desc: "学习 Git/GitHub，形成基本项目协作能力",
  },
  {
    title: "Web Control",
    desc: "用网页连接硬件、服务和自动化流程",
  },
];

const projects = [
  {
    title: "宿舍自动关灯装置",
    desc: "让关灯这种小事可以被远程触发或自动完成",
  },
  {
    title: "智能环境监测站",
    desc: "记录宿舍、教室或活动空间的温湿度和光照",
  },
  {
    title: "桌面提醒装置",
    desc: "用灯光、声音或小屏幕提醒日程和任务",
  },
  {
    title: "AI 学习助手工作流",
    desc: "用 AI、文档和自动化流程辅助学习计划与资料整理",
  },
  {
    title: "GitHub 项目协作入门",
    desc: "从提交代码、记录版本到共同维护一个小项目",
  },
];

const resources = [
  "生活自动化项目清单（宿舍、学习、校园协作场景）",
  "智能装置与网页控制入门模板（后续替换真实仓库）",
  "Git 协作实践指南（Issue、PR、Review 基础流程）",
  "AI 工具工作流示例（学习计划、资料整理、项目创作）",
];

const navLinkClass =
  "rounded-lg px-1.5 py-1 transition hover:text-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/70";

const actionLinkClass =
  "min-h-11 rounded-xl border px-4 py-2.5 text-center text-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/70";

export default function HomePage() {
  return (
    <main id="top" className="relative overflow-x-hidden bg-base">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-25" />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-3 z-40 rounded-2xl border border-line/90 bg-panel/90 px-4 py-3 backdrop-blur">
          <nav className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold tracking-[0.2em] text-electric">AUTOLIFE LAB</span>
            <ul className="hidden items-center gap-5 text-sm text-ink sm:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className={navLinkClass} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <details className="relative sm:hidden">
              <summary className="cursor-pointer list-none rounded-xl border border-line bg-base/70 px-3 py-2 text-sm text-ink/95 transition hover:border-electric hover:text-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/70">
                菜单
              </summary>
              <ul className="absolute right-0 mt-2 w-52 space-y-1 rounded-xl border border-line bg-panel p-2 text-sm shadow-card">
                {navItems.map((item) => (
                  <li key={`mobile-${item.href}`}>
                    <a
                      className="block min-h-11 rounded-lg px-3 py-2 text-ink/90 transition hover:bg-base/80 hover:text-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/70"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </nav>
        </header>

        <section className="mt-8 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-10 sm:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-electric sm:text-sm">Build Useful Auto Systems.</p>
          <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight [overflow-wrap:anywhere] sm:text-5xl">深圳理工大学先行书院 AutoLife Lab</h1>
          <p className="mt-3 text-lg text-ink/90 sm:text-xl">一个用技术改善日常生活的学生实践社团</p>
          <p className="mt-3 text-base text-ink/90 sm:text-lg">让想法接上电源，让生活自动一点。</p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-ink/90 sm:text-lg">
            AutoLife Lab 是深圳理工大学先行书院的学生实践社团。我们关注的不是传统自动化专业边界，而是如何用技术让学习、生活和校园协作变得更方便。从生活自动化、智能装置、网页控制，到 Git
            协作、AI 工具和校园小项目，我们把想法做成真实可用的作品。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a className={`${actionLinkClass} border-electric bg-electric font-medium text-base`} href={JOIN_FORM_URL}>
              加入我们
            </a>
            <a className={`${actionLinkClass} border-line bg-base/55 text-ink/95 hover:border-electric hover:text-electric`} href="#projects">
              查看项目路线
            </a>
          </div>
        </section>

        <section id="about" className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-3xl border border-line bg-panel p-6 shadow-card">
            <h2 className="text-xl font-semibold">我们是谁</h2>
            <p className="mt-3 text-sm leading-7 text-ink/90">
              我们是面向校园场景的技术实践社团，关注生活自动化、智能装置、网页控制、AI 工具与 Git 协作。社团鼓励从真实问题出发，把自动执行方案做成可展示、可迭代、可复用的项目创作，减少重复劳动，让学习和生活更顺手。
            </p>
          </div>
          <div className="rounded-3xl border border-dashed border-line bg-panel/70 p-5 sm:p-6">
            <h3 className="text-base font-semibold text-ink/90">照片预留位</h3>
            <div className="mt-3 rounded-2xl border border-line/80 bg-base/80 p-4 text-sm leading-6 text-ink/80 sm:p-5 sm:leading-7">
              后续可替换为社团活动、器材、生活自动化项目、AI 工具分享或工作坊照片。
            </div>
          </div>
        </section>

        <section id="join" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">加入我们</h2>
          <p className="mt-3 text-sm leading-7 text-ink/90">
            欢迎对生活自动化、校园工具、AI 工具、Git 协作或网页控制感兴趣的同学加入。无需完整基础，只要愿意动手实践，我们会提供从入门到项目创作的任务路线与同伴支持。
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap">
            <a className={`${actionLinkClass} border-electric bg-electric/15 text-electric hover:bg-electric/25`} href={JOIN_FORM_URL}>
              报名通道
            </a>
            <span className="rounded-xl border border-line bg-base/55 px-4 py-2.5 text-center text-ink/85">招新周期：每学期前 4 周</span>
          </div>
        </section>

        <section id="members" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">历代成员</h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-electric">Members Archive</p>
          <p className="mt-3 text-sm leading-7 text-ink/90">
            记录每一届参与建设 AutoLife Lab 的同学。完整名单、角色分工与项目经历将整理在成员档案页中。
          </p>
          <a className={`mt-5 inline-flex ${actionLinkClass} border-electric bg-electric/15 text-electric hover:bg-electric/25`} href={MEMBERS_URL}>
            查看成员档案
          </a>
        </section>

        <section id="projects" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">项目与成长路线</h2>
          <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-electric">What We Build</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {buildDirections.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line/90 bg-base/65 p-4">
                <h4 className="font-medium text-electric">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-ink/90">{item.desc}</p>
              </article>
            ))}
          </div>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-electric">Project Cards</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {projects.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line/90 bg-base/65 p-4">
                <h4 className="font-medium text-electric">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-ink/90">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="resources" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">学习资源</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink/90">
            {resources.map((item) => (
              <li key={item} className="rounded-xl border border-line/80 bg-base/65 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">联系方式</h2>
          <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
            <p className="rounded-xl border border-line/80 bg-base/65 px-4 py-3">报名入口：将在招新阶段开放，网站会同步更新报名表链接。</p>
            <p className="rounded-xl border border-line/80 bg-base/65 px-4 py-3">交流群：将在招新通知中公布。</p>
            <p className="rounded-xl border border-line/80 bg-base/65 px-4 py-3">负责人联系方式：将在招新海报与报名表中同步。</p>
            <p className="rounded-xl border border-line/80 bg-base/65 px-4 py-3">反馈表单：将在公开测试后上线。</p>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a className={`${actionLinkClass} border-electric bg-electric/15 text-electric hover:bg-electric/25`} href={JOIN_FORM_URL}>
              填写报名表
            </a>
            <a className={`${actionLinkClass} border-line bg-base/55 text-ink/95 hover:border-electric hover:text-electric`} href={CONTACT_TARGET}>
              联系负责人
            </a>
          </div>
        </section>

        <section id="feedback" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">反馈与建议</h2>
          <p className="mt-3 text-sm leading-7 text-ink/90">
            你可以通过反馈表提交学习需求、项目想法、活动建议。第一版网站先跳转到反馈入口，后续可接入正式问卷表单。
          </p>
          <a className={`mt-4 inline-flex ${actionLinkClass} border-electric bg-electric/15 text-electric hover:bg-electric/25`} href={FEEDBACK_FORM_URL}>
            提交反馈
          </a>
        </section>

        <footer className="mt-6 rounded-2xl border border-line/80 bg-panel/80 px-4 py-5 text-sm text-ink/85 sm:mt-8 sm:flex sm:items-center sm:justify-between sm:px-6">
          <p>深圳理工大学先行书院 AutoLife Lab</p>
          <p className="mt-1 text-ink/70 sm:mt-0">Build Useful Auto Systems.</p>
        </footer>
      </div>
    </main>
  );
}
