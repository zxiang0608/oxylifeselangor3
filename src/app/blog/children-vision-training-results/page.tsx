import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "儿童视力训练真的有效吗？3 个真实案例分析 | Oxylife",
  description:
    "通过三位 Oxylife 用户的真实反馈分析物理视力训练的实际效果：13 岁学生近视减少 125 度，44 岁妈妈老花改善，52 岁退休人士逆转近视。",
  alternates: { canonical: "/blog/children-vision-training-results" },
  openGraph: {
    title: "儿童视力训练真的有效吗？3 个真实案例分析",
    description:
      "通过三位用户的真实案例分析物理视力训练效果，从 13 岁学生到 52 岁退休人士。",
    url: "/blog/children-vision-training-results",
    locale: "zh_MY",
  },
};

export default function Post3() {
  const siteUrl = getSiteUrl();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "儿童视力训练真的有效吗？3 个真实案例分析",
    description:
      "通过三位 Oxylife 用户的真实反馈——从 13 岁学生到 52 岁退休人士——分析物理视力训练在不同年龄段的实际效果。",
    datePublished: "2026-06-20",
    dateModified: "2026-06-20",
    author: { "@type": "Organization", name: "Oxylife Selangor" },
    publisher: { "@type": "Organization", name: "Oxylife Selangor", url: siteUrl },
    url: `${siteUrl}/blog/children-vision-training-results`,
    inLanguage: "zh-Hans",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "视力知识中心", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: "视力训练真实案例", item: `${siteUrl}/blog/children-vision-training-results` },
    ],
  };

  const cases = [
    {
      name: "Suenn",
      age: "13 岁（学生）",
      duration: "使用 3 个月",
      improvement: [
        { label: "近视改善", value: "-125 度" },
        { label: "散光改善", value: "-75 度" },
      ],
      quote:
        "当初是为了女儿的散光买的，没想到近视降了这么多。之前验光师说只能戴眼镜，现在每次去验光，验光师都觉得不可思议。",
      insight:
        "儿童的眼部调节能力较强，对视觉训练反应通常也更快。Suenn 在 3 个月内近视和散光均有明显改善，这与 IZON 训练中眼外肌平衡和睫状肌调节的核心机制一致。",
    },
    {
      name: "Ms Tan",
      age: "44 岁（妈妈 / 职员）",
      duration: "全家使用 2 个月",
      improvement: [
        { label: "近视改善", value: "-100 度" },
        { label: "老花改善", value: "+75 度" },
      ],
      quote:
        "都说成年人视力没救了。我跟着孩子一起练，才 2 个月，看手机真的不用拿那么远了。一台机器全家受惠，这笔钱花得太值了。",
      insight:
        "成人的眼部调节能力虽然比儿童弱，但并非完全没有改善空间。Ms Tan 的老花改善（+75 度）尤其值得注意——传统观念认为老花无法逆转，但视觉训练通过提升睫状肌灵活性，可以在一定程度上改善调节能力。",
    },
    {
      name: "Ms Joon",
      age: "52 岁（退休）",
      duration: "使用 2 个月",
      improvement: [
        { label: "近视改善", value: "-100 度" },
      ],
      quote:
        "到了 50 岁以为就这样了，没想到还能逆转，坚持几分钟也不累，去验光时验光师都吓了一跳。物理训练真的很神奇。",
      insight:
        "52 岁仍能在 2 个月内改善 100 度近视，这在传统眼科认知中是比较罕见的案例。这表明 IZON 的物理训练机制与年龄相关性较低，而更多依赖于眼部肌肉的可训练性。",
    },
  ];

  return (
    <main className="relative bg-[#121416] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-[780px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <nav className="mb-10 text-sm text-slate-500">
          <ol className="flex items-center gap-2 flex-wrap">
            <li><a href="/" className="hover:text-emerald-400 transition-colors">首页</a></li>
            <li className="text-slate-700">/</li>
            <li><a href="/blog" className="hover:text-emerald-400 transition-colors">视力知识中心</a></li>
            <li className="text-slate-700">/</li>
            <li className="text-slate-400">视力训练真实案例</li>
          </ol>
        </nav>

        <header className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-5 text-[12px] text-slate-500 font-medium">
            <span>2026-06-20</span>
            <span className="text-slate-700">·</span>
            <span>5 分钟阅读</span>
          </div>
          <h1 className="text-[1.85rem] md:text-[2.6rem] font-[900] tracking-tighter text-white leading-[1.15] mb-5">
            儿童视力训练真的有效吗？3 个真实案例分析
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed border-l-2 border-emerald-500/40 pl-4">
            网上谈近视控制的文章很多，但真实用户的反馈最直接。本文整理了三位 Oxylife 用户——年龄跨度从 13 岁到 52 岁——在使用 IZON 物理视力训练 2–3 个月后的真实结果，并附上背后的原理分析。
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-300">

          <section>
            <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-4">什么是物理视力训练？</h2>
            <p>IZON Personal Scope-EX 是一台 MDA 认证的视觉训练设备（GA1448221-77276），通过四个核心步骤进行训练：</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-white">眼外肌平衡训练</strong>：改善双眼协调，减少用眼紧张感</li>
              <li><strong className="text-white">远近调节训练</strong>：恢复睫状肌对焦灵活性</li>
              <li><strong className="text-white">视网膜光刺激</strong>：激活视觉信号处理</li>
              <li><strong className="text-white">瞳孔反应训练</strong>：改善不同光线环境下的视觉稳定性</li>
            </ul>
            <p>每次约 5–15 分钟，不接触眼球，无药物，一台设备全家可用。</p>
          </section>

          {cases.map((c, i) => (
            <section key={i}>
              <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-4">
                案例 {i + 1}：{c.name}，{c.age}
              </h2>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 mb-5">
                <div className="flex flex-wrap gap-4 mb-4">
                  {c.improvement.map((imp, j) => (
                    <div key={j} className="text-center">
                      <div className="text-[1.6rem] font-[900] text-emerald-400 leading-none">{imp.value}</div>
                      <div className="text-[11px] text-slate-500 mt-1 font-medium tracking-wide">{imp.label}</div>
                    </div>
                  ))}
                  <div className="text-center">
                    <div className="text-[1rem] font-[700] text-slate-300 leading-none mt-2">{c.duration}</div>
                    <div className="text-[11px] text-slate-500 mt-1 font-medium tracking-wide">使用时长</div>
                  </div>
                </div>
                <blockquote className="border-l-2 border-emerald-500/40 pl-4 text-slate-400 text-[0.97rem] leading-[1.65] italic">
                  "{c.quote}"
                </blockquote>
              </div>
              <p><strong className="text-emerald-400">分析：</strong>{c.insight}</p>
            </section>
          ))}

          <section>
            <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-4">视力训练适合所有人吗？</h2>
            <p>不一定。以下情况建议先咨询再决定：</p>
            <ul className="list-disc list-inside space-y-1">
              <li>5 岁以下儿童（指令理解能力尚未成熟）</li>
              <li>刚完成眼部手术或疗程（需等待恢复期）</li>
              <li>有视网膜疾病或其他严重眼疾</li>
            </ul>
            <p>对于大多数 5 岁以上、没有眼部手术史的儿童和成人，IZON 训练是一个低风险的选项，值得先体验再决定。</p>
          </section>

          <section>
            <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-4">重要提示</h2>
            <p className="text-slate-400 text-sm bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
              以上案例为真实用户反馈，个人效果因年龄、近视程度、用眼习惯及坚持情况而异。视力训练不能保证所有人都获得相同改善。如有疑问，建议在体验前后进行正式验光对比。
            </p>
          </section>
        </div>

        <div className="mt-12 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.05] px-6 py-8 text-center">
          <p className="text-white font-[700] text-[1.1rem] mb-2">想知道你的孩子适不适合？</p>
          <p className="text-slate-400 text-sm mb-6">RM49 先体验，现场看初步反应，再决定要不要继续。</p>
          <a
            href="https://api.whatsapp.com/send?phone=601155594933"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-[700] text-white tracking-wide hover:bg-emerald-400 transition-colors"
          >
            WhatsApp 预约体验
          </a>
          <p className="text-slate-500 text-[13px] mt-5">
            还没决定要不要购买？<a href="/sewa" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">先租用 IZON 试试</a>，RM399/月起。
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between text-sm text-slate-500">
          <a href="/blog" className="hover:text-emerald-400 transition-colors">← 返回知识中心</a>
          <a href="/" className="hover:text-emerald-400 transition-colors">返回首页</a>
        </div>
      </article>
    </main>
  );
}
