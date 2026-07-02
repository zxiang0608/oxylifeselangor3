import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "阿托品点眼液的副作用与替代方案 | Oxylife",
  description:
    "低浓度阿托品控制近视有哪些已知副作用？停药后度数会反弹吗？有没有不依赖药物的替代方案？马来西亚家长必读。",
  alternates: { canonical: "/blog/atropine-side-effects-alternatives" },
  openGraph: {
    title: "阿托品点眼液的副作用与替代方案：家长必须知道的事",
    description:
      "低浓度阿托品被广泛用于控制近视，但它有哪些已知副作用？停药后度数会反弹吗？有没有不依赖药物的替代方案？",
    url: "/blog/atropine-side-effects-alternatives",
    locale: "zh_MY",
  },
};

export default function Post2() {
  const siteUrl = getSiteUrl();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "阿托品点眼液的副作用与替代方案：家长必须知道的事",
    description:
      "低浓度阿托品被广泛用于控制近视，但它有哪些已知副作用？停药后度数会反弹吗？有没有不依赖药物的替代方案？",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    author: { "@type": "Organization", name: "Oxylife Selangor" },
    publisher: { "@type": "Organization", name: "Oxylife Selangor", url: siteUrl },
    url: `${siteUrl}/blog/atropine-side-effects-alternatives`,
    inLanguage: "zh-Hans",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "视力知识中心", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: "阿托品副作用与替代方案", item: `${siteUrl}/blog/atropine-side-effects-alternatives` },
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
            <li className="text-slate-400">阿托品副作用与替代方案</li>
          </ol>
        </nav>

        <header className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-5 text-[12px] text-slate-500 font-medium">
            <span>2026-06-10</span>
            <span className="text-slate-700">·</span>
            <span>6 分钟阅读</span>
          </div>
          <h1 className="text-[1.85rem] md:text-[2.6rem] font-[900] tracking-tighter text-white leading-[1.15] mb-5">
            阿托品点眼液的副作用与替代方案：家长必须知道的事
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed border-l-2 border-emerald-500/40 pl-4">
            阿托品是目前马来西亚眼科最常开的近视控制药物之一。它有效——但它不是没有代价的。本文帮你了解副作用、停药风险，以及目前有没有不依赖药物的替代选项。
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-slate-300">

          <section>
            <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-4">阿托品是什么？它怎么控制近视？</h2>
            <p>阿托品（Atropine）是一种抗胆碱药物，原本用于瞳孔散大（手术或眼底检查）。低浓度版本（0.01%–0.05%）被发现能有效减缓儿童近视加深速度。</p>
            <p>它的作用机制目前仍不完全清晰，主流理论认为它通过<strong className="text-white">抑制眼轴增长</strong>发挥作用，而不仅仅是放松睫状肌。</p>
          </section>

          <section>
            <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-4">已知副作用</h2>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">1. 畏光（对光线敏感）</h3>
            <p>阿托品会使瞳孔放大，导致儿童在强光下感到不适。浓度越高（如 0.5%、1%），畏光越明显。低浓度（0.01%）副作用相对轻微，但部分儿童仍有反应。</p>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">2. 近距离视力短暂模糊</h3>
            <p>阿托品会影响调节能力，用药初期部分儿童会觉得看近处（如书本、手机）模糊。低浓度版本此副作用较轻。</p>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">3. 停药反弹（Rebound Effect）</h3>
            <p>这是家长最需要注意的风险。多项研究（包括 ATOM2 研究）发现，<strong className="text-white">停用阿托品后，部分儿童的近视加深速度会超过未用药组</strong>，即出现"反弹"。浓度越高，反弹风险越高。</p>
            <p>这意味着一旦开始，可能需要长期用药，或配合其他方案逐步减量。</p>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">4. 长期安全性仍有待研究</h3>
            <p>低浓度阿托品（0.01%）的研究时间相对较短，目前最长追踪约 5 年。超过这个年限的长期影响数据仍然有限。</p>
          </section>

          <section>
            <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-4">不依赖药物的替代方案有哪些？</h2>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">户外活动</h3>
            <p>研究显示每天 80–120 分钟的户外活动能有效减缓近视发展，推测与自然光刺激视网膜多巴胺分泌有关。这是目前最安全、最有科学支持的预防手段。</p>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">OK 镜（Ortho-K）</h3>
            <p>如前文所述，OK 镜效果明显但存在接触性感染风险，且需长期配戴维持效果。</p>
            <h3 className="text-slate-200 font-[700] text-[1.1rem] mb-2">物理视力训练（IZON）</h3>
            <p>IZON Personal Scope-EX 是一种非药物、非接触式的视觉训练方案。它针对眼外肌协调、睫状肌调节和瞳孔控光进行训练，帮助减轻用眼负担。</p>
            <p>对于<strong className="text-white">不希望长期依赖药物</strong>，或希望配合其他方案使用的家庭，IZON 是一个值得了解的选项。马来西亚 MDA 认证（GA1448221-77276），RM49 即可先体验。</p>
          </section>

          <section>
            <h2 className="text-white font-[800] text-[1.4rem] md:text-[1.7rem] tracking-tight mb-4">总结</h2>
            <p>阿托品是有效的近视控制工具，但它不是没有代价的。如果你的孩子正在使用阿托品，或正在考虑开始，建议：</p>
            <ul className="list-disc list-inside space-y-2">
              <li>选择低浓度（0.01%），副作用风险最低</li>
              <li>不要自行停药，需要逐步减量，避免反弹</li>
              <li>配合户外活动，增强效果</li>
              <li>了解其他非药物方案，做好长期规划</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.05] px-6 py-8 text-center">
          <p className="text-white font-[700] text-[1.1rem] mb-2">想了解非药物的视力训练方案？</p>
          <p className="text-slate-400 text-sm mb-6">RM49 体验 IZON，看看孩子的眼睛有没有反应，再决定要不要继续。</p>
          <a
            href="https://api.whatsapp.com/send?phone=601155594933"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-[700] text-white tracking-wide hover:bg-emerald-400 transition-colors"
          >
            WhatsApp 预约
          </a>
          <p className="text-slate-500 text-[13px] mt-5">
            不想长期依赖药物，又还没决定要不要买？<a href="/sewa" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">先租用 IZON 试试</a>，RM399/月起。
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
