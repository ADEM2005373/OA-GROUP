import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              Legal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Terms & Conditions</h1>
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
            className="space-y-10"
          >
            <div className="p-8 rounded-xl border border-primary/20 bg-primary/5 mb-10">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Important Notice:</strong> By accessing or using OA GROUP's website and services, you agree to be bound by these Terms and Conditions. Please read them carefully. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            {[
              {
                title: "1. Acceptance of Terms",
                content: `These Terms and Conditions govern your use of the OA GROUP website and any services we provide. By accessing our website, submitting a contact form, or engaging our services, you accept these terms in full.

OA GROUP reserves the right to update these terms at any time. Continued use of our services following any changes constitutes acceptance of the revised terms.`
              },
              {
                title: "2. Description of Services",
                content: `OA GROUP provides technology and consulting services through two divisions:

OA FOR DEV: Software development, web and mobile applications, SaaS platforms, APIs, cloud deployment, AI integration, cybersecurity, and technical maintenance services.

OA STRATEGIES & CONSULTING: Business consulting, startup analysis, digital transformation planning, market analysis, performance optimization, organizational strategy, and executive advisory services.

Specific terms for individual service engagements are defined in separate service agreements.`
              },
              {
                title: "3. Intellectual Property",
                content: `All content on this website — including text, graphics, logos, and design elements — is the property of OA GROUP and is protected by applicable intellectual property laws.

Work product developed for clients is governed by the terms of the relevant service agreement. Unless otherwise specified in writing, OA GROUP retains ownership of all tools, frameworks, methodologies, and reusable components developed during client engagements. Clients receive a license to use the deliverables as specified in their agreements.`
              },
              {
                title: "4. Client Confidentiality",
                content: `OA GROUP takes client confidentiality seriously. Information shared with us during consultations, proposals, or service engagements is treated as confidential and will not be disclosed to third parties without your consent, except as required by law.

We expect clients to similarly protect confidential information shared by OA GROUP during the course of a business relationship, including pricing, methodologies, and internal processes.`
              },
              {
                title: "5. Limitation of Liability",
                content: `To the maximum extent permitted by applicable law, OA GROUP shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our website or services.

Our total liability for any claim arising from our services shall not exceed the amount paid by the client for the specific service giving rise to the claim.`
              },
              {
                title: "6. Warranties and Representations",
                content: `OA GROUP represents that:

- We will perform services with reasonable skill and care
- Our website information is provided in good faith and believed to be accurate at time of publication
- We do not guarantee specific business outcomes from our consulting or technology services

We do not warrant that our website will be available at all times or free from errors. The information on this website is provided "as is" without warranties of any kind.`
              },
              {
                title: "7. Website Use",
                content: `You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:

- Attempt to gain unauthorized access to any part of our systems
- Transmit any harmful, offensive, or malicious content
- Use automated tools to scrape or systematically download content
- Misrepresent your identity or affiliation when contacting us`
              },
              {
                title: "8. Third-Party Links",
                content: `Our website may contain links to third-party websites. These links are provided for convenience and informational purposes only. OA GROUP does not endorse, control, or assume responsibility for the content or practices of any third-party websites.`
              },
              {
                title: "9. Governing Law",
                content: `These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Tunisia. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the competent courts of Tunisia, unless otherwise agreed in writing.`
              },
              {
                title: "10. Severability",
                content: `If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect. The unenforceable provision shall be modified to the minimum extent necessary to make it enforceable.`
              },
              {
                title: "11. Contact",
                content: `For questions about these Terms and Conditions, contact us at: oa.for.dev@gmail.com or by phone at +216 25 679 772.`
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
