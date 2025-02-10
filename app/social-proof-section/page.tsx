import type { Metadata } from "next";
import Social_Proof_Section from "@/components/Social_Proof_Section/Social_Proof_Section";

export const metadata: Metadata = {
  title: "Social Proof Section",
  description: "Social Proof Section Solution",
};

export default function SocialProofSection() {
  return (
    <section>
      <Social_Proof_Section />
    </section>
  );
}
