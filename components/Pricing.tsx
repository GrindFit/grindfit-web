function Plan({
  name,
  price,
  features,
  highlight = false,
}: {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div className={`card ${highlight ? "ring-1 ring-amber/50" : ""}`}>
      <div className="mb-2 text-slate-300">{name}</div>
      <div className="mb-4 text-3xl font-extrabold text-white">{price}
        <span className="ml-1 text-base font-normal text-slate-400">/month</span>
      </div>
      <ul className="space-y-2 text-sm text-slate-300">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-[3px] inline-block h-2 w-2 rounded-full bg-amber/90" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`btn-amber mt-5 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 font-semibold text-black transition ${highlight ? "bg-amber" : "bg-white/90"}`}
      >
        <span>{highlight ? "Get Premium" : "Start Free Trial"}</span>
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-6">
      <h2 className="text-center text-3xl font-extrabold">
        Choose Your <span className="text-[#FF8B2E]">Transformation</span> Plan
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Plan
          name="Starter"
          price="$19"
          features={[
            "Basic workout plans",
            "Nutrition tracking",
            "Daily metrics logging",
            "Mobile app access",
          ]}
        />
        <Plan
          name="Premium"
          price="$39"
          highlight
          features={[
            "Personalized meal plans",
            "Adaptive smart workouts",
            "Progress analytics",
            "Community support",
          ]}
        />
        <Plan
          name="Elite"
          price="$79"
          features={[
            "1:1 personal coaching",
            "Custom workout design",
            "Advanced biometrics",
            "Priority new features",
          ]}
        />
      </div>
    </section>
  );
}
