const JOIN_FORM_URL = "#join";
const TRACKS_URL = "#tracks";
const MEMBERS_URL = "/members";

const navItems = [
  { label: "首页", href: "#top" },
  { label: "关于我们", href: "#about" },
  { label: "学习主线", href: "#tracks" },
  { label: "项目展示", href: "#projects" },
  { label: "成长路线", href: "#join" },
  { label: "资源库", href: "#resources" },
  { label: "成员档案", href: MEMBERS_URL },
  { label: "加入我们", href: JOIN_FORM_URL },
];

const tracks = [
  {
    title: "AI Learning",
    description:
      "从 Python、机器学习、深度学习到博弈算法，依托主流开源教程进行共学与实践，最终设计一个可对战、可展示、可持续优化的中国象棋 AI。",
    route:
      "Python 基础 → 机器学习基础 → 深度学习基础 → 井字棋 AI → 五子棋 AI → 中国象棋规则引擎 → 象棋 AI → 在线对战展示平台。",
  },
  {
    title: "Embedded & Robotics",
    description:
      "从 Arduino/ESP32 入门，逐步学习传感器、舵机、电机控制、PID、STM32 和视觉识别，并以 RoboMaster 所需能力为导向开展机器人实践。",
    route:
      "Arduino/ESP32 入门 → 传感器与舵机 → 电机控制 → 小车底盘 → PID 控制 → STM32 入门 → 视觉识别 → RoboMaster 导向机器人原型。",
  },
  {
    title: "Open Workflow",
    description:
      "学习 Git、GitHub、Markdown、README、项目文档和开源协作流程，把学习内容沉淀为代码仓库、文档、网站和可复用资源。",
    route: "Git 与 GitHub → Markdown 与 README → 项目文档规范 → 开源协作流程 → 环境配置与 AI 工具辅助学习。",
  },
];

const outcomes = [
  "一份学习笔记",
  "一个代码仓库",
  "一份项目文档",
  "一个可运行 demo",
  "一次公开展示",
  "一篇活动总结或技术文章",
];

const projects = [
  {
    title: "Chinese Chess AI",
    description:
      "AI 学习线长期代表项目。从井字棋、五子棋等简单博弈项目入门，逐步学习搜索算法、局面评估、Alpha-Beta 剪枝和深度学习方法，最终完成一个可对战、可展示、可持续优化的中国象棋 AI。",
    stages:
      "Tic-Tac-Toe AI → Gomoku AI → Chinese Chess Rule Engine → Search-based Chess AI → Learning-based Chess AI → Web Battle Platform。",
  },
  {
    title: "RoboMaster-oriented Robot",
    description:
      "嵌入式学习线长期代表项目。以 RoboMaster 所需能力为导向，逐步学习嵌入式开发、电机控制、PID、底盘运动、视觉识别、云台控制和团队协作。",
    stages:
      "Arduino/ESP32 Basics → Sensor & Actuator Demos → Mini Car Platform → PID Control → STM32 & Motor Control → Vision Tracking Demo → RoboMaster-oriented Prototype。",
  },
  {
    title: "Open Learning Archive",
    description: "用于沉淀学习笔记、代码仓库、项目文档、README、活动资料和展示页面。",
    stages: "Notes & Docs → Repos & Demos → Activity Materials → Public Showcase。",
  },
  {
    title: "Future: Chess AI Robotic Arm",
    description:
      "未来融合项目。探索“象棋 AI + 机械臂下棋机器人”，让 AI 不只停留在屏幕中，而是通过硬件真正作用于现实世界。",
    stages: "当前为长期愿景方向，将在前序能力成熟后逐步探索与验证。",
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
            AutoLife Lab 不是传统意义上只研究“自动化专业”的兴趣小组。我们取“自动化”之深意，关注如何通过 AI、嵌入式、机器人、GitHub、开源工具和工程化协作方式，让学习更加系统，让实践更容易产生结果，让个人成长可以被记录和展示。
          </p>
          <p className="mt-3 text-sm leading-7 text-ink/90">
            我们希望每一次学习都能留下笔记，每一次实践都能留下代码，每一个项目都能留下文档，每一次活动都能留下可复用的经验。
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
          <h2 className="text-xl font-semibold">学完不是结束，留下成果才是开始</h2>
          <p className="mt-3 text-sm leading-7 text-ink/90">在 AutoLife，学习不是以“听完”为结束，而是以“留下成果”为开始。我们鼓励每位成员形成：</p>
          <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            {outcomes.map((item) => (
              <li key={item} className="rounded-xl border border-line/80 bg-base/65 px-4 py-3">- {item}</li>
            ))}
          </ul>
        </section>

        <section id="projects" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">项目路线图 Projects</h2>
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
          <h2 className="text-xl font-semibold">新人路径 Join Us</h2>
          <p className="mt-3 text-sm leading-7 text-ink/90">
            你不需要一开始就会 AI、硬件或 Git。可以从 Python、GitHub、Markdown、LED、舵机这些最小任务开始。
            如果你有基础，可以进入 AI 项目、嵌入式项目、RoboMaster 导向项目或开源协作组。
            如果你擅长写作、摄影、设计、网站，也可以参与项目文档、推文、作品展示和社团网站建设。
          </p>
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
          <p className="mt-3 text-sm leading-7 text-ink/90">成员详情请前往独立档案页查看，我们在首页只保留入口，持续更新每届成员成长记录。</p>
          <a className={`mt-4 inline-flex ${actionLinkClass} border-electric bg-electric/15 text-electric hover:bg-electric/25`} href={MEMBERS_URL}>查看 /members</a>
        </section>

        <section id="resources" className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-6">
          <h2 className="text-xl font-semibold">资源库与 GitHub</h2>
          <p className="mt-3 text-sm leading-7 text-ink/90">GitHub 是工作台，网站是展示窗。</p>
          <p className="mt-2 text-sm leading-7 text-ink/90">GitHub 承担项目代码、学习资料、README、活动文档和路线图；网站承担对外展示、招新宣传、项目介绍、成果展示和成长记录。</p>
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
