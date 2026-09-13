import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { brand } from "@/content";

export function Hero() {
  const { hero } = brand;

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 lg:py-28 overflow-hidden bg-neutral-950 text-white" aria-labelledby="hero-heading">
      {/* Background 4K Hero Photograph with Cinematic Legibility Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_campus.jpg"
          alt="Vortexsoft Vikasdhara Foundation Community Development Campus in Maharashtra"
          className="w-full h-full object-cover object-center lg:object-right opacity-90 scale-[1.01] transition-transform duration-1000 ease-out"
        />
        {/* Left Dark Gradient for Crystal-Clear Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-transparent/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40 z-10" />
      </div>

      <Container className="relative z-20">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-950/80 border border-primary-500/40 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-primary-200 uppercase tracking-wider">
              {hero.eyebrow}
            </span>
          </div>

          <h1 id="hero-heading" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] text-balance font-heading">
            {hero.headline}
          </h1>

          <p className="text-base sm:text-xl text-neutral-200 leading-relaxed font-normal max-w-2xl text-balance">
            {hero.paragraph}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-500 text-white font-semibold shadow-lg shadow-primary-950/50" asChild>
              <a href={hero.primaryCTA.href}>{hero.primaryCTA.text}</a>
            </Button>
            <Button variant="secondary" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm" asChild>
              <a href={hero.secondaryCTA.href}>{hero.secondaryCTA.text}</a>
            </Button>
            <a
              href={hero.tertiaryCTA.href}
              className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors underline-offset-4 hover:underline py-2 text-center sm:text-left"
            >
              {hero.tertiaryCTA.text} →
            </a>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-neutral-300 font-medium">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Public Charitable Trust
            </span>
            <span className="text-neutral-500">•</span>
            <span>People • Opportunity • Dignity • Development</span>
          </div>
        </div>
      </Container>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-neutral-400 animate-bounce" aria-hidden="true">
        <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-semibold">Scroll</span>
        <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}