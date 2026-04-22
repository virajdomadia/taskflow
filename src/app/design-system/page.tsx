import React from "react";
import { Section, Container } from "@/components/ui/Layout";
import { HeroTitle, SectionTitle, BodyText, SmallText } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Check, Star, Zap } from "lucide-react";

export default function DesignSystemPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Section className="bg-white border-b border-gray-200">
        <HeroTitle>Design System</HeroTitle>
        <BodyText className="mt-4">
          A comprehensive guide to the TaskFlow design tokens and components.
        </BodyText>
      </Section>

      <Section>
        <SectionTitle>Colors</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
          <ColorSwatch name="Primary" hex="#8B5CF6" className="bg-brand-primary" />
          <ColorSwatch name="Hover" hex="#7C3AED" className="bg-brand-hover" />
          <ColorSwatch name="Active" hex="#6D28D9" className="bg-brand-active" />
          <ColorSwatch name="Gray 900" hex="#111827" className="bg-gray-900 text-white" />
          <ColorSwatch name="Gray 500" hex="#6B7280" className="bg-gray-500 text-white" />
          <ColorSwatch name="Gray 100" hex="#F3F4F6" className="bg-gray-100" />
        </div>
      </Section>

      <Section className="bg-gray-100/50">
        <SectionTitle>Typography</SectionTitle>
        <div className="space-y-8 mt-8">
          <div>
            <SmallText className="block mb-2 uppercase tracking-wider">Hero Title</SmallText>
            <HeroTitle>The quick brown fox jumps over the lazy dog</HeroTitle>
          </div>
          <div>
            <SmallText className="block mb-2 uppercase tracking-wider">Section Title</SmallText>
            <SectionTitle>Modern tools for modern teams</SectionTitle>
          </div>
          <div>
            <SmallText className="block mb-2 uppercase tracking-wider">Body Text</SmallText>
            <BodyText>
              TaskFlow helps teams stay organized and focused on what matters most. With a sleek 
              interface and powerful integrations, you can manage your projects with ease and 
              clarity.
            </BodyText>
          </div>
          <div>
            <SmallText className="block mb-2 uppercase tracking-wider">Small Text</SmallText>
            <SmallText>Last updated: April 22, 2026</SmallText>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>Buttons</SectionTitle>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button variant="primary">Primary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="primary" size="lg">Large Button</Button>
          <Button variant="primary" size="sm">Small Button</Button>
        </div>
      </Section>

      <Section className="bg-gray-100/50">
        <SectionTitle>Cards</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <Card variant="feature">
            <Zap className="text-brand-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
            <BodyText>Optimized for speed and efficiency in every interaction.</BodyText>
          </Card>
          
          <Card variant="testimonial">
            <p className="mb-4 text-lg">"TaskFlow has completely changed how our team works together. The interface is stunning."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">JD</div>
              <div>
                <p className="font-bold">Jane Doe</p>
                <p className="text-sm text-gray-500">CEO at FutureLabs</p>
              </div>
            </div>
          </Card>

          <Card variant="pricing" className="relative overflow-hidden">
            <div className="bg-brand-primary text-white text-xs font-bold px-3 py-1 absolute top-4 right-[-30px] rotate-45 w-[120px] text-center">
              POPULAR
            </div>
            <h3 className="text-xl font-bold mb-2">Pro Plan</h3>
            <div className="text-4xl font-bold mb-4">$29<span className="text-lg font-normal text-gray-500">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2"><Check size={18} className="text-success" /> Unlimited projects</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-success" /> Advanced analytics</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-success" /> Priority support</li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </Card>
        </div>
      </Section>
    </main>
  );
}

function ColorSwatch({ name, hex, className }: { name: string; hex: string; className: string }) {
  return (
    <div className="space-y-2">
      <div className={`h-24 w-full rounded-md shadow-inner border border-gray-200 ${className}`} />
      <div>
        <p className="font-bold text-sm">{name}</p>
        <p className="text-xs text-gray-500 uppercase">{hex}</p>
      </div>
    </div>
  );
}
