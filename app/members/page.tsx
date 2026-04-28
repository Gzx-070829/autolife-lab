const memberArchive = [
  {
    cohort: "2026 Founding Members",
    desc: "AutoLife Lab 的初始建设成员，负责社团方向、网站、项目路线和第一批活动设计。",
    members: [
      {
        role: "负责人",
        direction: "待补充",
        projects: "待补充",
        bio: "待补充",
      },
      {
        role: "项目与技术",
        direction: "待补充",
        projects: "待补充",
        bio: "待补充",
      },
      {
        role: "内容与视觉",
        direction: "待补充",
        projects: "待补充",
        bio: "待补充",
      },
      {
        role: "活动与招新",
        direction: "待补充",
        projects: "待补充",
        bio: "待补充",
      },
    ],
  },
  {
    cohort: "2027 Members",
    desc: "成员名单与分工将在招新后更新。",
    members: [
      {
        role: "成员",
        direction: "待补充",
        projects: "待补充",
        bio: "招新后更新",
      },
    ],
  },
  {
    cohort: "2028 Members",
    desc: "成员名单与分工将在招新后更新。",
    members: [
      {
        role: "成员",
        direction: "待补充",
        projects: "待补充",
        bio: "招新后更新",
      },
    ],
  },
];

export default function MembersPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-base">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-25" />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <header className="sticky top-3 z-40 rounded-2xl border border-line/90 bg-panel/90 px-4 py-3 backdrop-blur">
          <nav className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <a className="font-semibold tracking-[0.2em] text-electric transition hover:opacity-90" href="/">
              AutoLife Lab
            </a>
            <a className="rounded-xl border border-line bg-base/60 px-4 py-2.5 text-ink/95 transition hover:border-electric hover:text-electric" href="/">
              返回首页
            </a>
          </nav>
        </header>

        <section className="mt-6 rounded-3xl border border-line bg-panel p-5 shadow-card sm:mt-8 sm:p-10">
          <h1 className="text-[1.75rem] font-semibold sm:text-4xl">历代成员</h1>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-electric">Members Archive</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink/90">
            记录每一届参与建设 AutoLife Lab 的同学。这里不仅是名单，也是社团项目、活动和经验的传承。
          </p>
        </section>

        <section className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-3">
          {memberArchive.map((group) => (
            <article key={group.cohort} className="rounded-2xl border border-line bg-panel p-5 shadow-card">
              <h2 className="text-base font-semibold text-electric">{group.cohort}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/90">{group.desc}</p>
              <ul className="mt-4 space-y-3">
                {group.members.map((member, index) => (
                  <li key={`${group.cohort}-${member.role}-${index}`} className="rounded-xl border border-line/80 bg-base/65 p-3 text-sm">
                    <p className="font-medium text-ink">角色：{member.role}</p>
                    <p className="mt-1 text-ink/90">方向：{member.direction}</p>
                    <p className="mt-1 text-ink/90">参与项目：{member.projects}</p>
                    <p className="mt-1 text-ink/90">一句话介绍：{member.bio}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <footer className="mt-6 rounded-2xl border border-line/80 bg-panel/80 px-4 py-5 text-sm text-ink/85 sm:mt-8 sm:flex sm:items-center sm:justify-between sm:px-6">
          <p>深圳理工大学先行书院 AutoLife Lab</p>
          <a className="mt-1 inline-flex text-electric transition hover:brightness-110 sm:mt-0" href="/">
            返回首页
          </a>
        </footer>
      </div>
    </main>
  );
}
