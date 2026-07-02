import type { Metadata } from "next";
import SewaPage from "@/components/SewaPage";

export const metadata: Metadata = {
  title: "IZON 眼部理疗仪器租用 — RM399/月 | Oxylife Selangor",
  description:
    "在雪兰莪租用 IZON Personal Scope-EX 眼部理疗仪器。每月 RM399，RM500 可退还押金，送货上门，全程顾问支持。最少租用 3 个月，满 3 个月后降至 RM299/月。",
  alternates: {
    canonical: "/sewa",
    languages: {
      "zh-Hans": "/sewa",
      en: "/rent",
      "x-default": "/rent",
    },
  },
  openGraph: {
    title: "IZON 眼部理疗仪器租用 — RM399/月 | Oxylife Selangor",
    description:
      "先租用再决定。Oxylife Selangor 顾问提供 IZON 设备租用，每月 RM399，送货上门，全程陪伴。名额有限。",
    url: "/sewa",
    locale: "zh_MY",
  },
};

export default function SewaRoute() {
  return <SewaPage />;
}
