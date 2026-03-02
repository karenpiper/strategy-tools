import Link from "next/link";

const TIERS = [
  {
    id: "tier-1",
    title: "Make Strategy Tangible",
    subtitle: "Stakeholder Belief",
    tools: [
      {
        name: "Interactive Scenario Planner",
        description:
          "Let stakeholders explore “what if we position as X vs. Y vs. Z.” Show cascading implications for each (perception, creative direction, audience, channels). Not a deck—a tool they can play with.",
        href: null,
      },
      {
        name: "Strategic Decision Tree",
        description:
          "“If I choose this audience, what does that mean?” Map audience → audience insights → creative implications → success metrics. Makes the intangible tangible. Shows stakeholders why you chose what you chose.",
        href: null,
      },
      {
        name: "Positioning-to-Creative Bridge",
        description:
          "Input: a positioning statement. Output: what does this actually require creatively? What are the creative problems? What should the tone/visual/message be? Closes the gap between “here’s our strategy” and “what does that actually look like?”",
        href: "/positioning-to-creative-bridge",
      },
    ],
  },
  {
    id: "tier-2",
    title: "Make Thinking Clearer",
    subtitle: "Synthesis & Insight",
    tools: [
      {
        name: "Insight Definition Tool",
        description:
          "Input: raw observations, data points, research findings. Output: a structured insight—the non-obvious truth that unlocks strategy. Tests whether it’s a real insight (fresh, actionable, tension-rich) or just a fact. Makes the leap from data to meaning explicit.",
        href: null,
      },
      {
        name: "Problem Reframing Tool",
        description:
          "Input: the problem as it’s currently stated. Output: alternative framings—different ways to see the same challenge. “What if the problem isn’t X but Y?” Surfaces assumptions, widens the solution space, helps stakeholders see the real question before jumping to answers.",
        href: null,
      },
      {
        name: "Research Synthesis Dashboard",
        description:
          "Pull from: social listening, research reports, competitive analysis, performance data, cultural trends. Organize by what matters for this strategy decision. Surface patterns, contradictions, leading indicators. Reduces noise. Makes strategy thinking faster and clearer.",
        href: null,
      },
      {
        name: "Strategic Hypothesis Tracker",
        description:
          "Input: your strategic bets (“affluent millennials will respond to sustainability messaging”). Track leading indicators in real time (sentiment, share of voice, engagement, perception shifts). Shows “my strategy is working” while it’s happening, not after.",
        href: null,
      },
      {
        name: "Scenario Stress-Test Model",
        description:
          "“Here’s my strategy. If I’m right, X happens. If I’m wrong, Y happens.” Model the cascading effects (positioning → perception → behavior → business outcome). Shows stakeholders the thinking. Shows you where the risks are.",
        href: null,
      },
    ],
  },
  {
    id: "tier-3",
    title: "Make Strategy Measurable",
    subtitle: "Real-Time Proof",
    tools: [
      {
        name: "Strategic Metric Dashboard",
        description:
          "Not just performance metrics (sales, engagement)—but strategic metrics: are we building the brand attributes we said we would? Reaching the right audience? Is our positioning landing? Proves strategy is working in real time, not retrospectively.",
        href: null,
      },
      {
        name: "Audience Intelligence Tool",
        description:
          "Input: your target audience definition. Output: who they actually are (not assumptions, data). What they care about, how they behave, what they respond to, where they are. Makes audience selection feel less abstract, more grounded.",
        href: null,
      },
      {
        name: "Creative Brief Generator (Strategic)",
        description:
          "Input: your positioning, audience, insight, strategic idea. Output: what the creative actually needs to do. Not a pretty template—a tool that makes the strategic thinking visible to creatives. Reduces the gap between what you recommend and what gets executed.",
        href: null,
      },
    ],
  },
  {
    id: "tier-4",
    title: "Make Input Processing Faster",
    subtitle: "The Harder Thinking",
    tools: [
      {
        name: "Multi-Source Strategic Synthesis Tool",
        description:
          "Ingest: research reports (PDFs), social listening exports, competitive analysis, internal data. Parse and organize by what’s strategically relevant. Surface insights, patterns, contradictions, opportunities. You spend less time on grunt work. More time on actual thinking.",
        href: null,
      },
      {
        name: "Trend-to-Strategy Mapper",
        description:
          "Input: cultural trends, shifts, emerging behaviors. Translate: what do these mean for our strategy? Show: how do we own a piece of this? Where’s the opportunity? Helps you think clearly about a fragmented, expansive world.",
        href: null,
      },
      {
        name: "Competitive Strategy Analyzer",
        description:
          "Input: what competitors are doing (positioning, creative, audience, channels). Surface: gaps, opportunities, where you can own differentiation. Show strategic options and implications of each.",
        href: null,
      },
    ],
  },
  {
    id: "tier-5",
    title: "Make Iteration Faster",
    subtitle: "Strategy-as-Living-Thing",
    tools: [
      {
        name: "Strategy Evolution Tracker",
        description:
          "Document your strategic thinking over time. Show what you learned, what changed, why. Makes strategy feel like a living hypothesis, not a one-time recommendation. Helps you iterate and improve based on learning.",
        href: null,
      },
      {
        name: "Strategic A/B Testing Framework",
        description:
          "Test different positioning angles, audience choices, messaging approaches against real audience feedback or behavioral data. Learn what actually works before you commit. Strategy that’s validated, not just theorized.",
        href: null,
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200/80 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8 md:py-16">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            Strategy Tool Experiments
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-base font-light leading-relaxed text-stone-600 sm:text-lg">
            Strategy right now lives in your head and in presentations. These
            tools make it visible, testable, and shareable. They collapse the
            gap between thinking and proof—between what you recommend and what
            people believe—between strategy and execution.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 sm:px-8 md:py-16">
        <div className="space-y-16">
          {TIERS.map((tier, tierIndex) => (
            <section
              key={tier.id}
              id={tier.id}
              className="scroll-mt-8"
            >
              <div className="mb-8">
                <span className="font-sans text-xs font-medium uppercase tracking-widest text-stone-400">
                  Tier {tierIndex + 1}
                </span>
                <h2 className="mt-1 font-serif text-2xl font-bold text-stone-900 sm:text-3xl">
                  {tier.title}
                </h2>
                <p className="mt-1 font-sans text-sm font-light italic text-stone-500">
                  {tier.subtitle}
                </p>
              </div>

              <ul className="space-y-10">
                {tier.tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="border-b border-stone-200/60 pb-10 last:border-0 last:pb-0"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 flex-1">
                        {tool.href ? (
                          <Link
                            href={tool.href}
                            className="font-serif text-xl font-bold text-stone-900 hover:text-stone-600 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 sm:text-2xl"
                          >
                            {tool.name}
                          </Link>
                        ) : (
                          <span className="font-serif text-xl font-bold text-stone-900 sm:text-2xl">
                            {tool.name}
                          </span>
                        )}
                        <p className="mt-2 font-sans text-sm font-light leading-relaxed text-stone-600">
                          {tool.description}
                        </p>
                      </div>
                      {tool.href ? (
                        <Link
                          href={tool.href}
                          className="mt-2 shrink-0 font-sans text-xs font-medium uppercase tracking-wider text-stone-500 hover:text-stone-700 sm:mt-0"
                        >
                          Try it →
                        </Link>
                      ) : (
                        <span className="mt-2 shrink-0 font-sans text-xs font-light italic text-stone-400 sm:mt-0">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <footer className="mt-20 border-t border-stone-200/80 pt-12">
          <p className="font-sans text-sm font-light leading-relaxed text-stone-500">
            If you built even 2–3 of these, you’d be the person who “makes
            strategy actually work.” Not just thinks about it—makes it work.
            That’s a different career than “strategist.” Closer to “strategy
            infrastructure” or “strategic product builder.” Stable, scalable,
            and it solves a real problem every org with strategy has.
          </p>
        </footer>
      </main>
    </div>
  );
}
