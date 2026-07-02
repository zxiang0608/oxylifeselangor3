import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "视力知识中心 | Oxylife 博客",
  description:
    "关于儿童近视控制、视力训练、阿托品对比、OK 镜对比的深度文章。帮助马来西亚家长做出更明智的视力管理决定。",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "视力知识中心 | Oxylife 博客",
    description:
      "关于儿童近视控制、视力训练、阿托品对比、OK 镜对比的深度文章。",
    url: "/blog",
    locale: "zh_MY",
  },
};

const posts = [
  {
    slug: "myopia-control-malaysia",
    title: "马来西亚儿童近视控制方案全比较：阿托品、OK 镜、视力训练哪个更适合？",
    description:
      "帮助马来西亚家长系统比较三种主要近视控制方案的原理、效果、副作用与长期费用，做出最适合孩子的选择。",
    date: "2026-06-01",
    readTime: "8 分钟",
  },
  {
    slug: "atropine-side-effects-alternatives",
    title: "阿托品点眼液的副作用与替代方案：家长必须知道的事",
    description:
      "低浓度阿托品被广泛用于控制近视，但它有哪些已知副作用？停药后度数会反弹吗？有没有不依赖药物的替代方案？",
    date: "2026-06-10",
    readTime: "6 分钟",
  },
  {
    slug: "children-vision-training-results",
    title: "儿童视力训练真的有效吗？3 个真实案例分析",
    description:
      "通过三位 Oxylife 用户的真实反馈——从 13 岁学生到 52 岁退休人士——分析物理视力训练在不同年龄段的实际效果。",
    date: "2026-06-20",
    readTime: "5 分钟",
  },
];

export default function BlogIndex() {
  return (
    <main className="relative bg-[#121416] min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <nav className="mb-10 text-sm text-slate-500">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="hover:text-emerald-400 transition-colors">首页</a></li>
            <li className="text-slate-700">/</li>
            <li className="text-slate-400">视力知识中心</li>
          </ol>
        </nav>

        <header className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span className="text-[11px] font-semibold tracking-[0.14em] text-emerald-400 uppercase">视力知识中心</span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3rem] font-[900] tracking-tighter text-white leading-[1.1] mb-4">
            帮助你做出<br />
            <span className="text-emerald-400">更明智的视力决定</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-[580px]">
            深度文章，覆盖儿童近视控制、视力训练原理、方案对比与真实用户案例。
          </p>
        </header>

        <section aria-label="博客文章列表">
          <div className="space-y-5">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] px-6 py-6 md:px-8 md:py-7 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] text-slate-500 font-medium">{post.date}</span>
                  <span className="text-slate-700">·</span>
                  <span className="text-[11px] text-slate-500 font-medium">{post.readTime}阅读</span>
                </div>
                <h2 className="text-white font-[700] text-[1.05rem] md:text-[1.18rem] leading-[1.45] mb-2 group-hover:text-emerald-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm md:text-[0.97rem] leading-[1.65]">
                  {post.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-emerald-500 tracking-wide group-hover:gap-2.5 transition-all">
                  阅读全文 →
                </span>
              </a>
            ))}
          </div>
        </section>

        <div className="mt-10 text-center">
          <a href="/" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">
            ← 返回首页
          </a>
        </div>
      </div>
    </main>
  );
}
