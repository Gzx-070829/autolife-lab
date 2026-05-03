const JOIN_FORM_URL = "#join";
const TRACKS_URL = "#tracks";
const MEMBERS_ARCHIVE_URL = "#contact";

const navItems = [
  { label: "首页", href: "#top" },
  { label: "学习主线", href: "#tracks" },
  { label: "项目路线", href: "#projects" },
  { label: "新人路径", href: "#join" },
  { label: "资源库", href: "#resources" },
  { label: "加入我们", href: JOIN_FORM_URL },
];

const tracks = [
  {
    title: "AI Learning",
    description:
      "从编程基础到博弈应用，逐步完成可对战、可展示的象棋 AI 项目。",
    route: "Python → ML → Deep Learning → Game AI → Chinese Chess AI",
  },
  {
    title: "Embedded & Robotics",
    description:
      "从硬件控制到系统集成，面向 RoboMaster 场景推进机器人实践。",
    route:
      "Arduino/ESP32 → Sensors → Motors → PID → STM32 → RoboMaster Prototype",
  },
  {
    title: "Open Workflow",
    description:
      "以 GitHub 为协作中心，将学习过程沉淀为可复用的开源资料。",
    route: "Git → GitHub → Markdown → README → Project Docs → Open Collaboration",
  },
];

const outcomes = [
  "学一次，留一份笔记。",
  "写一次代码，传一个仓库。",
  "做一次项目，形成一个展示。",
  "办一次活动，沉淀一套资料。",
];

const projects = [
  {
    title: "Chinese Chess AI",
    description:
      "从基础博弈到搜索与评估，持续打磨可展示、可迭代的中国象棋 AI。",
    stages: "Rules → Search → Evaluation → Playable Demo",
  },
  {
    title: "RoboMaster-oriented Robot",
    description:
      "面向 RoboMaster 导向能力，完成从控制到联调的机器人原型实践。",
    stages:
      "Control Basics → Chassis & PID → STM32 Integration → Prototype",
  },
  {
    title: "Open Learning Archive",
    description: "沉淀笔记、代码、文档与活动资料，形成长期可复用的开放资源。",
    stages: "Notes → Repos → Docs → Showcase",
  },
  {
    title: "Future: Chess AI Robotic Arm",
    description:
      "探索“象棋 AI + 机械臂”融合方向，让算法能力走向实体系统。",
    stages: "Long-term Vision → Capability Validation",
  },
];

const joinPaths = [
  ["AI / Python", "AI 学习组"],
  ["博弈算法", "象棋 AI 项目组"],
  ["硬件 / 小车", "嵌入式学习组"],
  ["机器人", "RoboMaster 导向组"],
  ["GitHub / 文档", "开源协作组"],
  ["网站 / 推文", "宣传与展示组"],
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
                    <a className="block min-h-11 rounded-lg px-3 py-2 text-ink/90 transition hover:bg-base/80 hover:text-electric" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </nav>
        </header>

        <section className="mt-8 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-10 sm:p-10">
          <p className="text-sm text-electric/90">深圳理工大学先行书院学生工程实践社群</p>
          <h1 className="text-[1.75rem] font-semibold leading-tight sm:text-5xl">AutoLife Lab</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-ink/90 sm:text-xl">
            以 AI 学习与嵌入式机器人实践为双主线，<br className="hidden sm:block" />以开源协作和成果产出为核心，帮助学生把学习变成项目，把项目变成作品。
          </p>
          <p className="mt-3 text-base text-ink/90 sm:text-lg">让学习走向成果，让代码走出屏幕。</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a className={`${actionLinkClass} border-electric bg-electric font-medium text-base`} href={JOIN_FORM_URL}>加入我们</a>
            <a className={`${actionLinkClass} border-line bg-base/55 text-ink/95 hover:border-electric hover:text-electric`} href={TRACKS_URL}>查看学习路线</a>
          </div>
        </section>

        <section id="about" className="mt-6 rounded-3xl border border-line bg-panel p-6 shadow-card sm:mt-8">
          <h2 className="text-xl font-semibold">我们是谁</h2>
          <p className="mt-3 text-sm leading-7 text-ink/90">
            AutoLife Lab 聚焦 AI 学习线与嵌入式机器人线，通过开源协作与工程化实践，帮助成员持续产出可展示成果。
          </p>
        </section>

        <section id="tracks" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">学习主线 Tracks</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {tracks.map((track) => (
              <article key={track.title} className="rounded-2xl border border-line/90 bg-base/65 p-4">
                <h3 className="font-medium text-electric">{track.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/90">{track.description}</p>
                <p className="mt-3 text-xs leading-6 text-ink/80">路线：{track.route}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="outcomes" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">成果导向</h2>
          <ul className="mt-4 grid gap-3 text-sm">
            {outcomes.map((item) => (
              <li key={item} className="border-l-2 border-electric/70 pl-3 text-ink/90">{item}</li>
            ))}
          </ul>
        </section>

        <section id="projects" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">长期项目路线</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-line/90 bg-base/65 p-4">
                <h3 className="font-medium text-electric">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/90">{project.description}</p>
                <p className="mt-3 text-xs leading-6 text-ink/80">阶段：{project.stages}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="join" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">新人如何加入</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-line/80">
            {joinPaths.map(([from, to]) => (
              <div key={from} className="grid grid-cols-2 border-b border-line/70 bg-base/65 px-4 py-3 text-sm last:border-b-0">
                <span className="text-ink/90">{from}</span>
                <span className="text-electric">{to}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="members" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">成员档案入口</h2>
          <p className="mt-3 text-sm leading-7 text-ink/90">历代成员、项目经历与贡献记录将整理在独立档案中。后续会通过专门页面或外部链接开放查看。</p>
          <a className={`mt-4 inline-flex ${actionLinkClass} border-electric bg-electric/15 text-electric hover:bg-electric/25`} href={MEMBERS_ARCHIVE_URL}>成员档案建设中</a>
        </section>

        <section id="resources" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">资源库与 GitHub</h2>
          <p className="mt-3 text-sm leading-7 text-ink/90">GitHub 是工作台，网站是展示窗。</p>
          <p className="mt-2 text-sm leading-7 text-ink/90">GitHub 承担项目代码、学习资料、README、活动文档和路线图；网站承担对外展示、招新宣传、项目介绍、成果展示和成长记录。</p>
          <a
            className={`mt-4 inline-flex ${actionLinkClass} border-electric bg-electric/15 text-electric hover:bg-electric/25`}
            href="https://github.com/Gzx-070829/autolife-lab"
          >
            查看 GitHub 仓库
          </a>
        </section>

        <section id="contact" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">联系方式 / 反馈</h2>
          <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
            <p className="rounded-xl border border-line/80 bg-base/65 px-4 py-3">报名入口：招新阶段开放并在本页更新。</p>
            <p className="rounded-xl border border-line/80 bg-base/65 px-4 py-3">交流渠道：将在招新通知中发布。</p>
            <p className="rounded-xl border border-line/80 bg-base/65 px-4 py-3">项目反馈：欢迎提交学习需求与项目建议。</p>
            <p className="rounded-xl border border-line/80 bg-base/65 px-4 py-3">合作联系：可通过学院活动渠道联系社群负责人。</p>
          </div>
        </section>
      </div>
    </main>
  );
}
