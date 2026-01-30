import { Server, ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";

const ArchitectureSection = () => {
  return (
    <section className="border-t border-border/50 bg-black/20">
      <div className="container mx-auto px-6 py-20 lg:py-28">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Designed for enterprise environments
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Foretyx integrates into your existing infrastructure without introducing new data risk.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Column 1: Deployment Model */}
          <div className="space-y-6">
            <div>
              {/* UPDATED: Changed text-white -> text-[#AADDEC] */}
              <h3 className="text-xl font-semibold text-[#AADDEC] mb-2">Deployment Model</h3>
              <p className="text-sm font-bold tracking-wider text-[#AADDEC] uppercase opacity-80">
                RUNS INSIDE YOUR ENVIRONMENT
              </p>
            </div>
            <ul className="space-y-4">
              <FeatureItem text="Deployed in your VPC or on-prem" />
              <FeatureItem text="No prompt data sent to Foretyx cloud" />
              <FeatureItem text="No model training on your data" />
            </ul>
          </div>

          {/* Column 2: Policy & Governance */}
          <div className="space-y-6">
            <div>
              {/* UPDATED: Changed text-white -> text-[#AADDEC] */}
              <h3 className="text-xl font-semibold text-[#AADDEC] mb-2">Policy & Governance</h3>
              <p className="text-sm font-bold tracking-wider text-[#AADDEC] uppercase opacity-80">
                POLICIES ENFORCED BY DEFAULT
              </p>
            </div>
            <ul className="space-y-4">
              <FeatureItem text="Centralized AI usage policies" />
              <FeatureItem text="Automatic enforcement across teams" />
              <FeatureItem text="Clear allow / scrub / block actions" />
            </ul>
          </div>

          {/* Column 3: Audit & Compliance */}
          <div className="space-y-6">
            <div>
              {/* UPDATED: Changed text-white -> text-[#AADDEC] */}
              <h3 className="text-xl font-semibold text-[#AADDEC] mb-2">Audit & Compliance</h3>
              <p className="text-sm font-bold tracking-wider text-[#AADDEC] uppercase opacity-80">
                AUDIT-READY BY DESIGN
              </p>
            </div>
            <ul className="space-y-4">
              <FeatureItem text="Metadata-only logs" />
              <FeatureItem text="Clear policy trails" />
              <FeatureItem text="Designed for regulated industries" />
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

// Helper Component for Bullet Points
const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    {/* UPDATED: Bullet Point Dot is explicitly Sky Blue (#AADDEC) */}
    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#AADDEC] flex-shrink-0" />
    <span className="text-muted-foreground leading-relaxed">
      {text}
    </span>
  </li>
);

export default ArchitectureSection;