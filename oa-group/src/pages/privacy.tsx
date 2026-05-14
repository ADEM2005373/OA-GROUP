import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              Legal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">Last updated: May 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none space-y-10"
          >
            <div className="p-8 rounded-xl border border-primary/20 bg-primary/5 mb-10">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Confidentiality Notice:</strong> OA GROUP is committed to protecting the privacy and confidentiality of all individuals who interact with our platforms and services. This policy describes how we collect, use, and protect your personal information in accordance with responsible data handling principles.
              </p>
            </div>

            {[
              {
                title: "1. Who We Are",
                content: `OA GROUP is a commercial holding company operating through two specialized divisions: OA FOR DEV (technology services) and OA STRATEGIES & CONSULTING (business consulting). This privacy policy applies to all websites, services, and communications operated under the OA GROUP brand.

Contact: oa.for.dev@gmail.com`
              },
              {
                title: "2. Information We Collect",
                content: `We collect information you provide directly to us, including:

- Contact information (name, email address, phone number, company name) submitted through our contact form
- Inquiries, messages, and communications you send to us
- Any additional information you voluntarily provide during the course of a business engagement

We do not collect sensitive personal data, financial information, or special categories of personal data through our website.`
              },
              {
                title: "3. How We Use Your Information",
                content: `We use the information we collect solely to:

- Respond to your inquiries and requests
- Provide and manage our professional services
- Communicate about proposals, projects, and engagements
- Send service-related notifications when relevant to an active engagement
- Comply with legal and regulatory obligations

We do not sell, rent, or share your personal information with third parties for marketing purposes.`
              },
              {
                title: "4. Legal Basis for Processing",
                content: `We process your personal information on the following legal bases:

- Legitimate interest: To respond to inquiries and manage our business relationships
- Contractual necessity: To fulfill our obligations under service agreements
- Legal obligation: Where required by applicable law or regulation
- Consent: Where you have provided explicit consent to a specific processing activity`
              },
              {
                title: "5. Data Retention",
                content: `We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Contact form submissions are retained for a maximum of 12 months unless an ongoing business relationship requires longer retention. Active client data is retained for the duration of the engagement plus a reasonable period thereafter.`
              },
              {
                title: "6. Data Security",
                content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse. Our security practices include encrypted communications (HTTPS), restricted access to personal data on a need-to-know basis, and regular review of our information security practices.`
              },
              {
                title: "7. Your Rights",
                content: `Depending on your jurisdiction, you may have the right to:

- Access the personal information we hold about you
- Request correction of inaccurate information
- Request deletion of your personal information
- Object to or restrict our processing of your data
- Data portability (where technically feasible)

To exercise any of these rights, contact us at oa.for.dev@gmail.com.`
              },
              {
                title: "8. Cookies and Tracking",
                content: `Our website uses minimal technical cookies necessary for basic functionality. We do not use tracking pixels, behavioral advertising cookies, or third-party analytics that share data with external parties beyond basic, privacy-respecting analytics tools.`
              },
              {
                title: "9. Third-Party Services",
                content: `Our contact form may be processed through Formspree, a third-party form processing service. Formspree operates under its own privacy policy. We use this service solely to receive and process contact form submissions.`
              },
              {
                title: "10. Changes to This Policy",
                content: `We may update this privacy policy from time to time. Material changes will be reflected in the updated date at the top of this page. We encourage you to review this policy periodically.`
              },
              {
                title: "11. Contact",
                content: `For privacy-related questions or requests, contact us at: oa.for.dev@gmail.com or by phone at +216 25 679 772.`
              }
            ].map((section) => (
              <div key={section.title} className="border-b border-border/30 pb-10">
                <h2 className="text-xl font-semibold mb-4 text-foreground">{section.title}</h2>
                <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{section.content}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
