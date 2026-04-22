import { Navbar } from "@/components/sections/Navbar";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Test Section for Typography and Spacing */}
      <section className="section-spacing">
        <Container>
          <div className="space-y-12">
            <div className="space-y-4">
              <h1>Main Headline (H1)</h1>
              <p className="max-w-2xl">
                This is a body text paragraph. It should be legible and follow the established 
                typography scale. The container ensures consistent horizontal padding and max-width.
              </p>
            </div>

            <div className="space-y-6">
              <h2>Section Title (H2)</h2>
              <p className="max-w-xl">
                Supporting text for a section. Notice the vertical spacing (section-spacing) 
                which adapts between mobile and desktop.
              </p>
            </div>

            <div className="space-y-4">
              <h3>Feature Heading (H3)</h3>
              <p className="text-small">
                Small text used for secondary information or metadata.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
                  <h3 className="mb-2">Card {i}</h3>
                  <p className="text-small">
                    Example card using grid spacing (gap-8) and internal stack spacing.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
