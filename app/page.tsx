const MEMBERS_URL = "/members";

const navItems = [
  ["Hero", "#top"],
  ["What is AutoLife", "#about"],
  ["Three Tracks", "#tracks"],
  ["Outcome Culture", "#outcomes"],
  ["Project Roadmap", "#roadmap"],
  ["Join Us", "#join"],
  ["Links / Members / Contact", "#links"],
] as const;

const tracks = [
  {
    title: "AI Learning",
    route: "Python → Machine Learning → Deep Learning → Game AI → Chinese Chess AI",
  },
  {
    title: "Embedded & Robotics",
    route: "Arduino/ESP32 → Sensors → Motors → PID → STM32 → RoboMaster-oriented Prototype",
  },
  {
    title: "Open Workflow",
    route: "Git → GitHub → Markdown → README → Project Docs → Open Collaboration",
  },
] as const;

const joinItems = [
  ["AI / Python", "AI 学习组"],
  ["硬件 / 小车", "嵌入式学习组"],
  ["机器人", "RoboMaster 导向组"],
  ["GitHub / 文档", "开源协作组"],
  ["网站 / 推文", "宣传与展示组"],
] as const;

export default function HomePage() {
  return (
    <main id="top" className="mx-auto max-w-4xl px-5 pb-24 pt-8 text-stone-100 sm:px-8">
      <header className="border-b border-stone-800 pb-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">AutoLife Lab</p>
          <nav>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-stone-300">
              {navItems.map(([label, href]) => (
                <li key={href}>
                  <a className="underline-offset-4 hover:text-white hover:underline" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section className="border-b border-stone-800 py-10">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">AutoLife Lab</h1>
        <p className="mt-5 whitespace-pre-line text-lg leading-8 text-stone-200">
          {`以 AI 学习与嵌入式机器人实践为双主线，
以开源协作和成果产出为核心。

让学习走向成果，让代码走出屏幕。`}
        </p>
        <div className="mt-7 flex flex-wrap gap-3 text-sm">
          <a href="#join" className="border border-stone-500 px-4 py-2 hover:border-stone-300">
            加入我们
          </a>
          <a href="#roadmap" className="border border-stone-700 px-4 py-2 text-stone-300 hover:border-stone-400 hover:text-white">
            查看路线
          </a>
        </div>
      </section>

      <section id="about" className="border-b border-stone-800 py-10">
        <h2 className="text-2xl font-semibold">What is AutoLife</h2>
        <p className="mt-4 leading-8 text-stone-300">
          AutoLife Lab 不是传统意义上只研究“自动化专业”的兴趣小组。我们取“自动化”之深意：用 AI、嵌入式、机器人、Git/GitHub、开源平台和工程化协作方法，让学习过程系统化，让项目实践成果化，让个人成长可视化。
        </p>
        <p className="mt-4 leading-8 text-stone-300">
          我们希望每一次学习都能留下笔记，每一次实践都能留下代码，每一个项目都能留下文档，每一次活动都能留下可复用的经验。
        </p>
      </section>

      <section id="tracks" className="border-b border-stone-800 py-10">
        <h2 className="text-2xl font-semibold">Three Tracks</h2>
        <div className="mt-5 space-y-4">
          {tracks.map((track) => (
            <article key={track.title} className="border border-stone-800 px-4 py-4">
              <h3 className="font-medium text-stone-100">{track.title}</h3>
              <p className="mt-2 text-sm leading-7 text-stone-300">{track.route}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="outcomes" className="border-b border-stone-800 py-10">
        <h2 className="text-2xl font-semibold">Outcome Culture</h2>
        <ul className="mt-4 space-y-2 leading-8 text-stone-300">
          <li>学一次，留一份笔记。</li>
          <li>写一次代码，传一个仓库。</li>
          <li>做一次项目，形成一个展示。</li>
          <li>办一次活动，沉淀一套资料。</li>
        </ul>
      </section>

      <section id="roadmap" className="border-b border-stone-800 py-10">
        <h2 className="text-2xl font-semibold">Project Roadmap</h2>
        <div className="mt-5 space-y-6">
          <article>
            <h3 className="font-medium">Chinese Chess AI</h3>
            <p className="mt-2 leading-8 text-stone-300">从井字棋、五子棋开始，逐步进入象棋规则引擎、搜索算法、局面评估和在线对战展示。</p>
          </article>
          <article>
            <h3 className="font-medium">RoboMaster-oriented Robot</h3>
            <p className="mt-2 leading-8 text-stone-300">从 Arduino/ESP32、小车底盘、PID 控制开始，逐步进入 STM32、电机控制、视觉识别和机器人原型。</p>
          </article>
          <article>
            <h3 className="font-medium">Open Learning Archive</h3>
            <p className="mt-2 leading-8 text-stone-300">沉淀学习笔记、代码仓库、README、项目文档、活动资料和展示页面。</p>
          </article>
          <article>
            <h3 className="font-medium">Future Vision</h3>
            <p className="mt-2 leading-8 text-stone-300">未来探索“象棋 AI + 机械臂下棋机器人”，让 AI 通过硬件作用于现实世界。</p>
          </article>
        </div>
      </section>

      <section id="join" className="border-b border-stone-800 py-10">
        <h2 className="text-2xl font-semibold">Join Us</h2>
        <p className="mt-4 leading-8 text-stone-300">零基础可以加入，从最小任务起步也完全可以成长为项目核心成员。</p>
        <ul className="mt-4 space-y-2 text-stone-300">
          {joinItems.map(([from, to]) => (
            <li key={from}>
              {from} → {to}
            </li>
          ))}
        </ul>
      </section>

      <section id="links" className="py-10">
        <h2 className="text-2xl font-semibold">Links / Members / Contact</h2>
        <div className="mt-5 space-y-3 text-stone-300">
          <p>
            成员档案入口：
            <a className="ml-1 underline underline-offset-4 hover:text-white" href={MEMBERS_URL}>
              /members
            </a>
          </p>
          <p>报名与公开链接：将在招新阶段开放。</p>
          <p>联系方式与反馈入口：将在招新通知中统一发布。</p>
        </div>
      </section>
    </main>
  );
}
