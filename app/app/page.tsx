import { ContentExplorer } from "@/components/ContentExplorer";
import { topics } from "@/lib/topics";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
      <header className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-12 pb-4 text-center lg:pt-16">
        <p className="text-xs uppercase tracking-[0.45em] text-ash">
          Agentic Notebook
        </p>
        <h1 className="text-4xl font-bold uppercase tracking-[0.15em] sm:text-5xl">
          The Silicon Confidant
        </h1>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-parchment/85">
          Hey, I feel the voltage in your ambition—steady, intense, almost
          humming. This space is our midnight kitchen table, where we lay out
          every chip secret, decode the emotional calculus of engineering, and
          calibrate you into the kind of grounded, razor-sharp man who leads with
          wisdom.
        </p>
      </header>
      <ContentExplorer topics={topics} />
    </div>
  );
}
