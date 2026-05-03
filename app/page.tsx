const MEMBERS_ARCHIVE_URL = "#contact";

const navItems = [
  ["首页", "#top"],
  ["我们是谁", "#about"],
  ["学习主线", "#tracks"],
  ["成果导向", "#outcomes"],
  ["项目路线", "#roadmap"],
  ["新人路径", "#onboarding"],
  ["资源与 GitHub", "#resources"],
  ["成员档案", MEMBERS_ARCHIVE_URL],
  ["联系与反馈", "#contact"],
] as const;

const tracks = [
  {
    title: "AI Learning",
    description:
      "从 Python、机器学习、深度学习到博弈算法，依托主流开源教程进行共学与实践，最终设计一个可对战、可展示、可持续优化的中国象棋 AI。",
  },
  {
    title: "Embedded & Robotics",
    description:
      "从 Arduino/ESP32 入门，逐步学习传感器、舵机、电机控制、PID、STM32 和视觉识别，并以 RoboMaster 所需能力为导向开展机器人实践。",
  },
  {
    title: "Open Workflow",
    description:
      "学习 Git、GitHub、Markdown、README、项目文档和开源协作流程，把学习内容沉淀为代码仓库、文档、网站和可复用资源。",
  },
] as const;

const roadmap = [
  "Chinese Chess AI",
  "RoboMaster-oriented Robot",
  "Open Learning Archive",
  "Future: Chess AI Robotic Arm",
] as const;

export default function HomePage() {
  return (
    <main
      id="top"
      className="relative mx-auto max-w-6xl px-5 pb-24 pt-8 text-slate-100 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle_at_top,black_45%,transparent_95%)]" />

      <header className="sticky top-0 z-30 -mx-2 mb-10 rounded-2xl border border-slate-800/80 bg-slate-950/70 px-4 py-3 backdrop-blur">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">AutoLife Lab</p>
          <nav>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-300 sm:text-sm">
              {navItems.map(([label, href]) => (
                <li key={label}>
                  <a className="transition hover:text-white" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-7 shadow-[0_0_0_1px_rgba(56,189,248,0.06),0_20px_40px_rgba(2,6,23,0.5)] sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">AutoLife Lab</h1>
          <p className="mt-6 whitespace-pre-line text-lg leading-8 text-slate-200">
            {`以 AI 学习与嵌入式机器人实践为双主线，
以开源协作和成果产出为核心，
帮助学生把学习变成项目，把项目变成作品。

让学习走向成果，让代码走出屏幕。`}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a href="#onboarding" className="rounded-xl border border-sky-400/60 bg-sky-500/10 px-5 py-2.5 text-sky-200 transition hover:bg-sky-500/20">
              加入我们
            </a>
            <a href="#roadmap" className="rounded-xl border border-slate-700 px-5 py-2.5 text-slate-200 transition hover:border-slate-500 hover:text-white">
              查看学习路线
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-sky-300">Engineering Mindset</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <li>学习过程系统化</li>
            <li>项目实践成果化</li>
            <li>个人成长可视化</li>
          </ul>
        </div>
      </section>

      <section id="about" className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-7 sm:p-8">
        <h2 className="text-2xl font-semibold">我们是谁</h2>
        <p className="mt-4 leading-8 text-slate-300">
          AutoLife Lab 不是传统意义上只研究自动化专业的社团。我们取“自动化”之深意，想通过 AI、嵌入式、机器人、Git/GitHub、开源平台和工程化协作方法，让学生的学习过程系统化、项目实践成果化、个人成长可视化。
        </p>
      </section>

      <section id="tracks" className="mt-12">
        <h2 className="text-2xl font-semibold">学习主线</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {tracks.map((track) => (
            <article key={track.title} className="rounded-2xl border border-slate-800 bg-slate-900/55 p-5">
              <h3 className="font-medium text-sky-200">{track.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{track.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="outcomes" className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-7 sm:p-8">
        <h2 className="text-2xl font-semibold">成果导向</h2>
        <div className="mt-4 space-y-2 text-slate-300">
          <p>学一次，留一份笔记。</p>
          <p>写一次代码，传一个仓库。</p>
          <p>做一次项目，形成一个展示。</p>
          <p>办一次活动，沉淀一套资料。</p>
        </div>
      </section>

      <section id="roadmap" className="mt-12">
        <h2 className="text-2xl font-semibold">项目路线</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {roadmap.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-800 bg-slate-900/55 p-5 text-slate-200">
              {item}
            </article>
          ))}
        </div>
      </section>

      <section id="onboarding" className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-7 sm:p-8">
        <h2 className="text-2xl font-semibold">新人路径</h2>
        <p className="mt-4 leading-8 text-slate-300">
          从基础任务起步：先完成 Git/GitHub 与文档协作练习，再参与 AI 或嵌入式入门小项目，逐步进入主线项目开发与展示。
        </p>
      </section>

      <section id="resources" className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-7 sm:p-8">
        <h2 className="text-2xl font-semibold">资源库与 GitHub</h2>
        <p className="mt-4 leading-8 text-slate-300">所有学习资料、项目代码、README 与活动沉淀将持续归档在 GitHub 仓库与公开资源库中。</p>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-7 sm:p-8">
        <h2 className="text-2xl font-semibold">成员档案</h2>
        <p className="mt-4 leading-8 text-slate-300">历代成员、项目经历与贡献记录将整理在独立档案中，后续通过外部链接开放查看。</p>
        <a
          href={MEMBERS_ARCHIVE_URL}
          className="mt-5 inline-flex rounded-xl border border-slate-700 px-5 py-2.5 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white"
        >
          查看成员档案
        </a>
      </section>

      <section id="contact" className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-7 sm:p-8">
        <h2 className="text-2xl font-semibold">联系方式 / 反馈</h2>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>报名入口将在招新阶段开放</li>
          <li>交流群将在招新通知中公布</li>
          <li>反馈表单将在公开测试后上线</li>
        </ul>
      </section>
    </main>
  );
}
