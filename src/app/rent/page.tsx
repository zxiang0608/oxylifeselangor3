import type { Metadata } from "next";
import RentPage from "@/components/RentPage";

export const metadata: Metadata = {
  title: "Rent an IZON Eye Therapy Device in Malaysia — RM399/Month | Oxylife Selangor",
  description:
    "Rent an IZON Personal Scope-EX eye physiotherapy device from an Oxylife Selangor consultant. RM399/month, RM500 refundable deposit, delivered to your door with consultant support. 3-month minimum, drops to RM299/month after.",
  alternates: {
    canonical: "/rent",
    languages: {
      en: "/rent",
      "zh-Hans": "/sewa",
      "x-default": "/rent",
    },
  },
  openGraph: {
    title: "Rent an IZON Eye Therapy Device in Malaysia — RM399/Month",
    description:
      "Try IZON before you buy. Rent from an Oxylife Selangor consultant — RM399/month, delivered, with consultant support. Limited units available.",
    url: "/rent",
    locale: "en_MY",
  },
};

export default function RentRoute() {
  return <RentPage />;
}
