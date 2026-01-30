import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="early-access" className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-lg mx-auto text-center"
        >
          <h2 className="text-display-xs lg:text-display-sm font-semibold text-foreground mb-4">
            Ready to secure your AI?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Join enterprises already on the waitlist for early access.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-secondary border border-[#AADDEC]/20 rounded-xl p-8"
            >
              <CheckCircle2 className="w-12 h-12 text-[#AADDEC] mx-auto mb-4" />
              <p className="text-foreground font-medium text-lg">You're on the list.</p>
              <p className="text-muted-foreground text-sm mt-2">
                We'll reach out when it's your turn.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                // UPDATED:
                // 1. Removed 'focus:ring-2' (the fuzzy glow).
                // 2. Added 'focus-visible:ring-0' and 'focus-visible:ring-offset-0' to kill default browser rings.
                // 3. Added 'focus:border-[#AADDEC]' for a sharp, solid blue border line.
                className="h-14 text-base bg-secondary border-white/10 placeholder:text-muted-foreground/50 
                           focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#AADDEC] 
                           transition-colors duration-200"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 bg-white text-black hover:bg-[#AADDEC] font-bold text-base transition-all duration-300 border-none"
              >
                Get early access
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-xs text-muted-foreground pt-2">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCapture;