import Nav from "@/components/Nav";
import FeatureCard from "@/components/FeatureCard";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Warm background glows */}
      <div
        className="pointer-events-none absolute -z-10 top-[-220px] right-[-220px] h-[560px] w-[560px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,161,24,0.65) 0%, rgba(255,161,24,0) 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute -z-10 bottom-[-200px] left-[-200px] h-[480px] w-[480px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,120,0,0.5) 0%, rgba(255,120,0,0) 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        {/* Nav */}
        <Nav />

        {/* Hero */}
        <section className="mt-24 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-4xl md:text-5xl font-extrabold leading-tight">
              Transform Your <span className="text-[#FF8B2E]">Body&nbsp;&amp;&nbsp;Mind</span>
            </p>

            <p className="mt-5 max-w-xl text-slate-300">
              Join thousands who’ve unlocked their potential with personalized workouts,
              nutrition plans, and real-time progress tracking.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="btn-amber inline-flex items-center rounded-md bg-amber px-6 py-3 font-semibold text-black transition"
              >
                <span>Start Your Journey</span>
              </a>
              <a
                href="#features"
                className="inline-flex items-center rounded-md border border-slate-700 px-6 py-3 text-slate-200 hover:bg-white/5"
              >
                Watch Preview
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="rounded-lg bg-black/30 p-4">
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="mt-1 text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="rounded-lg bg-black/30 p-4">
              <div className="text-2xl font-bold text-white">1M+</div>
              <div className="mt-1 text-sm text-slate-400">Users Transformed</div>
            </div>
          </div>
        </section>

        {/* Features (hover pop + glow) */}
        <section id="features" className="mt-24">
          <h2 className="text-3xl font-extrabold text-center">
            Everything You Need to <span className="text-[#FF8B2E]">Succeed</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon="🍽️"
              title="Personalized Nutrition"
              text="Custom meal plans by goals, gender, and level. Track macros effortlessly."
            />
            <FeatureCard
              icon="🏋️"
              title="Smart Workouts"
              text="Adaptive training plans that level up with you. Beginner to elite."
            />
            <FeatureCard
              icon="📈"
              title="Real-time Tracking"
              text="Monitor steps, water, calories, and core metrics. Visualized clearly."
            />
            <FeatureCard
              icon="🤝"
              title="Community Support"
              text="Join a motivating community to stay on track and celebrate wins."
            />
          </div>
        </section>

        {/* Dashboard teaser */}
        <section className="mt-24 grid gap-6 md:grid-cols-3">
          <div className="card">
            <div className="font-semibold">Today’s Progress</div>
            <div className="mt-3 space-y-4 text-sm text-slate-300">
              <div>
                <div className="mb-1 flex justify-between"><span>Steps</span><span>8,542 / 10,000</span></div>
                <div className="progress"><i style={{ width: "85%" }} /></div>
              </div>
              <div>
                <div className="mb-1 flex justify-between"><span>Water</span><span>6 / 8 glasses</span></div>
                <div className="progress"><i style={{ width: "75%" }} /></div>
              </div>
              <div>
                <div className="mb-1 flex justify-between"><span>Calories</span><span>1,650 / 2,200</span></div>
                <div className="progress"><i style={{ width: "60%" }} /></div>
              </div>
            </div>
          </div>
          <div className="card md:col-span-2">
            <div className="font-semibold">This Week’s Plan</div>
            <div className="mt-3 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
              {["Mon: Push Day", "Tue: Back & Biceps", "Wed: Quads & Glutes", "Thu: Cardio & Core"].map((d) => (
                <div key={d} className="rounded-md border border-white/10 bg-white/5 px-3 py-2">{d}</div>
              ))}
            </div>
          </div>
          <div className="card md:col-span-3">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Ready for today’s workout?</div>
              <a href="#" className="btn-amber inline-flex rounded-md bg-amber px-4 py-2.5 font-semibold text-black">
                <span>Start Workout</span>
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <div id="pricing">
          <Pricing />
        </div>
      </div>
    </main>
  );
}
