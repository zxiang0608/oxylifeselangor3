import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "马来西亚儿童近视控制方案全比较 | Oxylife",
  description:
    "系统比较马来西亚三种主要近视控制方案：阿托品、OK 镜、物理视力训练。原理、效果、副作用与长期费用一次看清。",
  alternates: { canonical: "/blog/myopia-control-malaysia" },
  openGraph: {
    title: "马来西亚儿童近视控制方案全比较：阿托品、OK 镜、视力训练哪个更适合？",
    description:
      "帮助马来西亚家长系统比较三种主要近视控制方案的原理、效果、副作用与长期费用。",
    url: "/blog/myopia-control-malaysia",
    locale: "zh_MY",
  },
};

export default function Post1() {
  const siteUrl = getSiteUrl();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "马来西亚儿童近视控制方案全比较：阿托品、OK 镜、视力训练哪个更适合？",
    description:
      "帮助马来西亚家长系统比较三种主要近视控制方案的原理、效果、副作用与长期费用，做出最适合孩子的选择。",
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
    author: { "@type": "Organization", name: "Oxylife Selangor" },
    publisher: {
      "@type": "Organization",
      name: "Oxylife Selangor",
      url: siteUrl,
    },
    url: `${siteUrl}/blog/myopia-control-malaysia`,
    inLanguage: "zh-Hans",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "视力知识中心", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: "近视控制方案比较", item: `${siteUrl}/blog/myopia-control-malaysia` },
    ],
  };

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
            <li className="text-slate-400">近视控制方案比较</li>
          </ol>
        </nav>

        <header className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-5 text-[12px] text-slate-500 font-medium">
            <span>2026-06-01</span>
            <span className="text-slate-700">·</span>
            <span>8 分钟阅读</span>
            <span className="text-slate-700">·</span>
            <span className="text-emerald-500">Oxylife Selangor</span>
          </div>
          <h1 className="text-[1.85rem] md:text-[2.6rem] font-[900] tracking-tighter text-white leading-[1.15] mb-5">
            马来西亚儿童近视控制方案全比较：阿托品、OK 镜、视力训练哪个更适合？
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed border-l-2 border-emerald-500/40 pl-4">
            马来西亚是全球近视发生率最高的国家之一。越来越多家长在孩子七八岁就开始面对"度数每年往上飙"的问题。本文系统比较三种最主流的近视控制方案，帮你理清选择。
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-300">

          <section>
            <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-4">为什么近视控制这么重要？</h2>
            <p>近视（Myopia）本身不是病，但<strong className="text-white">高度近视（超过 600 度）</strong>会大幅提高视网膜脱落、青光眼、黄斑变性等严重眼疾的风险。马来西亚研究显示，城市儿童近视率在 12 岁时已超过 50%，且有年龄提前的趋势。</p>
            <p>近视控制的目标不是"治愈"近视，而是<strong className="text-white">减缓度数加深的速度</strong>，让孩子在 18 岁视力稳定时，度数尽可能低一点。</p>
          </section>

          <section>
            <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-4">方案一：低浓度阿托品（Atropine）</h2>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">原理</h3>
            <p>低浓度阿托品（0.01%–0.05%）通过放松睫状肌、调节眼轴增长来减缓近视加深。多项亚洲研究（ATOM 系列研究）显示效果显著。</p>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">优点</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>有大量临床研究支持</li>
              <li>使用方便（每晚一滴）</li>
              <li>马来西亚眼科诊所广泛提供</li>
            </ul>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">缺点与注意事项</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-white">停药反弹</strong>：部分儿童停药后度数加速增长</li>
              <li>畏光、近距离视力短暂模糊（浓度越高越明显）</li>
              <li>长期用药的安全性仍在持续研究中</li>
              <li>需要持续购买，长期费用积累可观</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-4">方案二：OK 镜（Ortho-K）</h2>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">原理</h3>
            <p>夜间配戴特殊硬性隐形眼镜，通过重塑角膜曲率，白天无需戴眼镜，同时减缓眼轴增长。</p>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">优点</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>白天无需配戴眼镜</li>
              <li>近视控制效果经过多项研究验证</li>
              <li>适合度数在 600 度以下的儿童</li>
            </ul>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">缺点与注意事项</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-white">直接接触眼球</strong>，存在角膜感染风险（需严格护理）</li>
              <li>初期适应期长，部分孩子无法适应</li>
              <li>马来西亚价格：镜片 RM1,800–RM3,500，每 1–2 年需更换</li>
              <li>停戴后效果消失，不能长期减缓眼轴增长</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-4">方案三：物理视力训练（IZON）</h2>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">原理</h3>
            <p>IZON Personal Scope-EX 通过针对性训练眼外肌协调、睫状肌调节、视网膜光刺激与瞳孔反应，从根源上改善用眼负担。MDA 认证（GA1448221-77276），韩国、马来西亚、新加坡均有分布。</p>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">优点</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-white">非接触式</strong>，无感染风险</li>
              <li>无药物、无副作用</li>
              <li>一台设备全家共用</li>
              <li>部分用户在 2–3 个月内看到度数改善（见真实案例）</li>
              <li>RM49 先体验，看到效果再决定</li>
            </ul>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">适合谁？</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>5 岁以上、能配合简单指令的儿童</li>
              <li>希望减少药物依赖的家庭</li>
              <li>成人（老花改善案例亦有记录）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-6">三方案快速对比</h2>
            <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-white/[0.03]">
                    <th className="text-left px-4 py-3 text-slate-400 font-semibold">维度</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-semibold">阿托品</th>
                    <th className="text-left px-4 py-3 text-slate-400 font-semibold">OK 镜</th>
                    <th className="text-left px-4 py-3 text-emerald-400 font-semibold">IZON 训练</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {[
                    ["接触眼球", "否（点眼液）", "是（隐形眼镜）", "否"],
                    ["感染风险", "低", "中（需严格护理）", "无"],
                    ["副作用", "畏光、视力暂时模糊", "角膜磨损风险", "无已知副作用"],
                    ["停用后", "可能反弹", "效果消失", "效果逐步累积"],
                    ["全家共用", "否（各人处方）", "否", "是"],
                    ["马来西亚费用", "RM50–200/月", "RM1,800–3,500 起", "RM49 体验起"],
                  ].map(([dim, ato, ok, izon], i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 text-slate-400 font-medium">{dim}</td>
                      <td className="px-4 py-3 text-slate-300">{ato}</td>
                      <td className="px-4 py-3 text-slate-300">{ok}</td>
                      <td className="px-4 py-3 text-emerald-300 font-medium">{izon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-4">结论：没有"最好"的方案，只有"最适合"的方案</h2>
            <p>每个孩子的近视情况、年龄、生活习惯不同，最适合的方案也不同。如果你希望在不依赖药物和隐形眼镜的前提下，先了解孩子目前的用眼状况，IZON 的 RM49 体验是一个低风险的起点——先看效果，再做决定。</p>
          </section>
        </div>

        <div className="mt-12 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.05] px-6 py-8 text-center">
          <p className="text-white font-[700] text-[1.1rem] mb-2">想了解 IZON 是否适合你的孩子？</p>
          <p className="text-slate-400 text-sm mb-6">RM49 先体验，现场看效果，再决定要不要继续。</p>
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
