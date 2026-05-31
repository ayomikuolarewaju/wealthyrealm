import type { Metadata } from "next";
import InvestForm from "./InvestForm";

export const metadata: Metadata = {
  title: "Invest — WealthRealm International",
  description: "Apply to invest in WealthRealm International across food delivery, fabric supply, and real estate in Africa.",
};

export default function InvestPage() {
  return <InvestForm />;
}
