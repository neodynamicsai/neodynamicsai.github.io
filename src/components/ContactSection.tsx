import { FormEvent, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const FORM_ENDPOINT = "https://formsubmit.co/60ec9bd9fb0268d167b5386306793f42";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current || isSubmitting) {
      return;
    }

    const formData = new FormData(formRef.current);
    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      formRef.current.reset();
      toast({
        title: "Message sent",
        description: "We received your note and will respond shortly.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please retry or email us at hello@neodynamics.ai.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">Talk With Us</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight">
              Ready to see how NeoDynamics secures your enterprise identities?
            </h2>
            <p className="text-lg text-muted-foreground">
              Share a few details and our team will connect you with a tailored walkthrough. We can dive into your
              hybrid identities, automation accounts, and AI-driven workflows in the first session.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" required autoComplete="email" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Alex Morgan" required autoComplete="name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Acme Corp" required autoComplete="organization" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Topic</Label>
                <Input id="subject" name="subject" placeholder="Enterprise identity assessment" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea id="message" name="message" rows={5} placeholder="Describe your environment and goals." required />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

