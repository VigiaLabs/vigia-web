const items = ['OpenVINO', 'ONNX Runtime', 'Raspberry Pi', 'AWS IoT Core', 'Sarvam AI', 'MQTT', 'Jetson', 'Kotlin']

export default function Marquee() {
  return (
    <section className="border-y border-line bg-cream py-9">
      <p className="mb-7 text-center text-xs uppercase tracking-[0.18em] text-muted-2 font-mono">
        Built on a production-grade edge &amp; cloud stack
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max motion-safe:animate-marquee">
          {[...items, ...items].map((name, i) => (
            <span
              key={i}
              className="mx-8 shrink-0 font-display text-xl font-medium text-muted-2/90"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
