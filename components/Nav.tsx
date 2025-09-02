export default function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <span className="font-semibold tracking-wide">GRINDFIT</span>
      <a
        href="#"
        className="btn-amber inline-flex items-center rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-black shadow-lg transition hover:-translate-y-0.5"
      >
        <span>Open App</span>
      </a>
    </nav>
  );
}
