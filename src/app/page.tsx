import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PathSection from "@/components/Path";
import MechanismSection from "@/components/Mechanism";
import ProofSection from "@/components/Proof";
import ExpectedResults from "@/components/ExpectedResults";
import DoctorEndorsement from "@/components/DoctorEndorsement";
import HrdfCertification from "@/components/HrdfCertification";
import EnrollmentSection from "@/components/Enrollment";
import ProofFaq from "@/components/ProofFaq";
import Footer from "@/components/Footer";
import FinancialComparison from "@/components/FinancialComparison";

export default function Home() {
  return (
    <main className="relative bg-[#080C14] min-h-screen">
      <Navbar />
      <Hero />
      <MechanismSection />     {/* 1. 原理板块 */}
      <DoctorEndorsement />    {/* 2. 医生背书 */}
      <ExpectedResults />      {/* 3. 预期效果 */}
      <ProofSection />         {/* 4. 真实见证 (Testimony) */}
      <HrdfCertification />    {/* 5. 安全认证 */}
      <PathSection />          {/* 6. 适用检测 (Protocol) */}
      <FinancialComparison />
      <EnrollmentSection />    {/* 7. CTA */}
      <ProofFaq />             {/* 8. FAQ */}
      <Footer />
    </main>
  );
}
