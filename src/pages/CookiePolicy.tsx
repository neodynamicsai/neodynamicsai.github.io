const CookiePolicy = () => {
  return (
    <main className="py-24 px-6">
      <div className="container mx-auto max-w-4xl space-y-12">
        <section className="space-y-4">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">Last updated: October 27, 2025</p>
          <h1 className="text-4xl font-bold">NeoDynamics Cookie Policy</h1>
          <p className="text-lg text-muted-foreground">
            This Cookie Policy explains how NeoDynamics uses cookies and similar tracking technologies on our websites,
            applications, and communications. It also describes the choices you have for managing consent in compliance with
            the GDPR ePrivacy Directive, the UK Privacy and Electronic Communications Regulations, the CCPA/CPRA, and other
            applicable frameworks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">What Are Cookies?</h2>
          <p className="text-muted-foreground">
            Cookies are small text files stored on your device that help websites remember preferences, authenticate sessions,
            and analyze usage. We also use comparable technologies like pixels, local storage, and software development kits
            (SDKs) for mobile experiences.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">How We Classify Cookies</h2>
          <p className="text-muted-foreground">
            We group the technologies we use into the categories below so you can make informed choices:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li><strong>Strictly necessary:</strong> Enable core site features such as login, security, session routing, and
              form submission. These cannot be switched off in our systems.</li>
            <li><strong>Functional:</strong> Remember preferences like locale, accessibility settings, and past interactions to
              personalize your experience.</li>
            <li><strong>Performance & analytics:</strong> Help us understand how visitors use our site, measure campaign
              effectiveness, and improve content.</li>
            <li><strong>Marketing:</strong> Support optional programs like retargeting, partner attribution, and product updates.
              We use these only with your consent and never for cross-context behavioral advertising without opt-in.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Consent Management</h2>
          <p className="text-muted-foreground">
            When you first visit our site (and at least every 12 months thereafter), we present a consent banner that describes
            each non-essential cookie category, offers Accept and Reject options, and links to granular controls. Pre-checked
            boxes are never used, and we capture a timestamped consent record for auditing. If you dismiss or reject optional
            cookies, we will not deploy them. You can revisit your choices at any time by selecting “Cookie Preferences” in the
            site footer.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Global Privacy Control & Do Not Track</h2>
          <p className="text-muted-foreground">
            We honor Global Privacy Control (GPC) signals and other recognized browser-based opt-out mechanisms. When we detect
            a valid GPC signal, we automatically treat it as a request to opt out of sale or sharing under CPRA and disable
            marketing cookies. We also respect Do Not Track settings by limiting analytics to aggregated, minimally intrusive
            modes whenever feasible.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Managing Cookies in Your Browser</h2>
          <p className="text-muted-foreground">
            Most browsers allow you to block or delete cookies through settings that control privacy or security. You can also
            clear existing cookies, block third-party cookies, or opt for private browsing. Because changes vary by browser, see
            the help documentation for Chrome, Firefox, Safari, Edge, or Opera for step-by-step guidance. If you disable
            strictly necessary cookies, our site may not function correctly.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Retention & Renewal</h2>
          <p className="text-muted-foreground">
            We set cookie expiration periods based on their purpose. Strictly necessary cookies generally last no longer than
            13 months. Analytics and marketing cookies expire within 12 months unless renewed with your consent. Consent records
            are stored for at least 24 months to demonstrate compliance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Third-Party Cookies</h2>
          <p className="text-muted-foreground">
            Some cookies are placed by third-party providers (for example, analytics platforms or customer success tools). We
            ensure each provider offers equivalent privacy safeguards, processes data only on our instructions, and supplies
            contractual assurances that cookies are not repurposed for unrelated advertising.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Updates to This Policy</h2>
          <p className="text-muted-foreground">
            We review this Cookie Policy at least annually. If we make material changes—such as introducing a new category of
            cookies or revising our consent mechanism—we will notify you via the banner, update the effective date, and seek new
            consent where required.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-muted-foreground">
            For questions about this Cookie Policy or our privacy practices, email privacy@neodynamics.ai.
          </p>
        </section>
      </div>
    </main>
  );
};

export default CookiePolicy;
