import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import {
  activeProducts,
  portfolio,
  services,
  teamRoles,
} from "@/data/site";

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-navy pb-18 pt-16 text-white sm:pb-24 sm:pt-24"
      id="home"
    >
      <div aria-hidden="true" className="hero-glow" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-accent-soft">
            <span className="size-2 rounded-full bg-brand-accent" />
            Tim developer lokal Makassar
          </div>
          <h1 className="max-w-3xl text-balance text-4xl font-black leading-[1.02] tracking-[-0.05em] min-[380px]:text-5xl sm:text-6xl sm:leading-[0.98] lg:text-7xl">
            Solusi digital yang bikin bisnis lebih{" "}
            <span className="text-brand-accent">mudah bertumbuh.</span>
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-white/70">
            Kita Lab membantu UMKM membangun website, aplikasi, dan tools siap
            pakai—dari ide sampai benar-benar dipakai timmu, dengan komunikasi
            yang dekat dan bahasa yang mudah dipahami.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#kontak">Ceritakan Kebutuhanmu →</Button>
            <Button
              className="border-white/15 bg-white/8 text-white hover:bg-white/12"
              href="#product"
              variant="secondary"
            >
              Lihat Product
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/55">
            <span>✓ Konsultasi awal gratis</span>
            <span>✓ Solusi sesuai kebutuhan</span>
            <span>✓ Tim lokal Makassar</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg px-1 sm:px-0">
          <div className="rounded-[2rem] border border-white/12 bg-white/8 p-4 shadow-2xl backdrop-blur-sm">
            <div className="rounded-[1.4rem] bg-white p-5 text-brand-ink">
              <div className="mb-5 flex items-center justify-between border-b border-brand-line pb-4">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
                  <span className="size-2.5 rounded-full bg-brand-accent" />
                  <span className="size-2.5 rounded-full bg-[#57c785]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">
                  Ruang kerja Kita Lab
                </span>
              </div>
              <div className="grid grid-cols-[.72fr_1.28fr] gap-4">
                <div className="space-y-3 rounded-2xl bg-brand-canvas p-4">
                  <div className="h-2 w-12 rounded-full bg-brand-navy/80" />
                  <div className="h-2 w-full rounded-full bg-brand-line" />
                  <div className="h-2 w-4/5 rounded-full bg-brand-line" />
                  <div className="mt-8 h-24 rounded-xl bg-brand-navy" />
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-xl bg-brand-accent-soft" />
                    <div className="h-20 rounded-xl bg-brand-canvas" />
                  </div>
                  <div className="h-32 rounded-xl bg-brand-blue/10 p-4">
                    <div className="flex h-full items-end gap-2">
                      {[40, 72, 52, 88, 68].map((height) => (
                        <div
                          className="flex-1 rounded-t bg-brand-blue"
                          key={height}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 left-2 rounded-2xl bg-brand-accent px-5 py-4 text-brand-navy shadow-xl sm:-left-5">
            <strong className="block text-xl">Dekat.</strong>
            <span className="text-xs font-bold">Cepat komunikasi.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section className="section-space bg-white" id="tentang">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative min-h-96 overflow-hidden rounded-[2rem] bg-brand-canvas p-8">
          <div className="absolute inset-x-8 bottom-8 top-8 rounded-[1.5rem] bg-brand-navy p-7 text-white">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">
              Makassar, Indonesia
            </span>
            <div className="mt-20 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-5">
                <strong className="text-3xl">100%</strong>
                <p className="mt-2 text-xs leading-5 text-white/60">Kolaboratif</p>
              </div>
              <div className="rounded-2xl bg-brand-accent p-5 text-brand-navy">
                <strong className="text-3xl">Lokal</strong>
                <p className="mt-2 text-xs font-semibold leading-5">Paham konteksmu</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading
            description="Kami percaya teknologi terbaik bukan yang paling rumit, tapi yang paling terasa manfaatnya. Karena itu, kita mulai dari masalah bisnis dan membangun solusi bersama."
            eyebrow="Tentang Kita Lab"
            title="Bukan sekadar bikin aplikasi. Kita bantu selesaikan masalah bisnis."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="border-l-2 border-brand-accent pl-4">
              <strong className="text-brand-navy">Komunikasi dekat</strong>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                Diskusi jelas tanpa istilah teknis yang membingungkan.
              </p>
            </div>
            <div className="border-l-2 border-brand-accent pl-4">
              <strong className="text-brand-navy">Solusi realistis</strong>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                Sesuai kebutuhan, kesiapan, dan skala bisnis.
              </p>
            </div>
          </div>
          <div className="mt-9 rounded-2xl border border-brand-line bg-brand-canvas p-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-accent-strong">
              Cara kami bekerja
            </p>
            <div className="mt-4 grid gap-3 text-sm font-bold text-brand-navy sm:grid-cols-3">
              <span>01 · Dengarkan</span>
              <span>02 · Rancang</span>
              <span>03 · Dampingi</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className="section-space bg-brand-canvas" id="layanan">
      <Container>
        <SectionHeading
          align="center"
          description="Mulai dari kebutuhan custom sampai tools yang siap dipakai, pilih jalur digitalisasi yang paling masuk akal untuk bisnismu."
          eyebrow="Layanan"
          title="Dibuat untuk kebutuhan bisnis yang nyata."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Card className="group min-h-72 transition hover:-translate-y-1" key={service.number}>
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-navy text-sm font-black text-white">
                  {service.number}
                </span>
                <span className="text-2xl text-brand-line transition group-hover:text-brand-accent">
                  ↗
                </span>
              </div>
              <h3 className="mt-12 text-2xl font-extrabold tracking-[-0.03em] text-brand-navy">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-brand-muted">{service.description}</p>
              <ul className="mt-6 space-y-2 border-t border-brand-line pt-5">
                {service.deliverables.map((deliverable) => (
                  <li
                    className="flex items-center gap-2 text-sm font-semibold text-brand-navy"
                    key={deliverable}
                  >
                    <span className="size-1.5 rounded-full bg-brand-accent" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl bg-brand-navy px-7 py-6 text-white sm:flex-row sm:items-center">
          <div>
            <p className="font-extrabold">Belum yakin layanan mana yang cocok?</p>
            <p className="mt-1 text-sm text-white/60">
              Ceritakan tantangan bisnismu, kami bantu petakan langkah pertamanya.
            </p>
          </div>
          <Button className="shrink-0" href="#kontak">
            Diskusi Kebutuhan →
          </Button>
        </div>
      </Container>
    </section>
  );
}

function Products() {
  return (
    <section className="section-space bg-white" id="product">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            description="Dua produk digital aktif untuk membantu transaksi penjualan dan perhitungan Harga Pokok Produksi bisnis."
            eyebrow="Digital Product"
            title="Mulai praktis, bertumbuh tanpa ribet."
          />
          <p className="rounded-2xl border border-brand-accent/30 bg-brand-accent-soft px-5 py-3 text-sm font-semibold text-brand-accent-strong">
            Produk resmi Kita Lab · Siap digunakan
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {activeProducts.map((product, index) => (
            <Card
              className={`flex flex-col ${
                index === 0
                  ? "border-brand-blue/30 bg-brand-navy text-white"
                  : ""
              }`}
              key={product.name}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${
                    index === 0
                      ? "bg-white/10 text-brand-accent-soft"
                      : "bg-brand-accent-soft text-brand-accent-strong"
                  }`}
                >
                  {product.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`grid h-11 min-w-11 shrink-0 place-items-center rounded-2xl px-2 text-xs font-black ${
                    index === 0
                      ? "bg-white/10 text-brand-accent"
                      : "bg-brand-navy text-brand-accent"
                  }`}
                >
                  {product.monogram}
                </span>
              </div>
              <h3
                className={`mt-12 text-3xl font-extrabold tracking-[-0.04em] ${
                  index === 0 ? "text-white" : "text-brand-navy"
                }`}
              >
                {product.name}
              </h3>
              <p
                className={`mt-3 ${
                  index === 0 ? "text-white/65" : "text-brand-muted"
                }`}
              >
                {product.description}
              </p>
              <ul
                className={`mt-6 space-y-2 text-sm ${
                  index === 0 ? "text-white/70" : "text-brand-muted"
                }`}
              >
                {product.features.map((feature) => (
                  <li className="flex gap-2" key={feature}>
                    <span className="text-brand-accent">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full sm:w-auto"
                href={product.href}
                rel="noreferrer"
                target="_blank"
                variant={index === 0 ? "primary" : "secondary"}
              >
                {product.cta} ↗
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="section-space bg-brand-canvas" id="portofolio">
      <Container>
        <SectionHeading
          eyebrow="Portofolio"
          title="Gambaran solusi yang kami bangun."
          description="Materi klien resmi belum tersedia. Tiga tampilan berikut adalah konsep kapabilitas, bukan klaim project atau hasil klien."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {portfolio.map((item, index) => (
            <article className="group" key={item.title}>
              <div
                className={`aspect-[4/3] rounded-[1.5rem] p-4 sm:rounded-[1.75rem] sm:p-5 ${
                  item.accent === "orange" ? "bg-brand-accent" : "bg-brand-navy"
                }`}
              >
                <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-white/8 p-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/55">
                    Konsep 0{index + 1} · {item.category}
                  </span>
                  <div className="grid grid-cols-[.8fr_1.2fr] gap-2 transition duration-300 group-hover:-translate-y-1 sm:gap-3">
                    <div className="space-y-2 rounded-xl bg-white/10 p-3">
                      <div className="h-2 w-2/3 rounded bg-white/70" />
                      <div className="h-2 w-full rounded bg-white/20" />
                      <div className="h-16 rounded-lg bg-white/10" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-white/15" />
                      <div className="rounded-xl bg-white/25" />
                      <div className="col-span-2 rounded-xl bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-xs font-black uppercase tracking-wider text-brand-accent-strong">
                {item.outcome}
              </p>
              <h3 className="mt-2 text-xl font-extrabold text-brand-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TrustAndTeam() {
  return (
    <section className="section-space bg-white" id="tim">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <Card className="bg-brand-accent-soft p-8 sm:p-10">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-brand-accent-strong">
              Testimoni
            </span>
            <h3 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-brand-navy">
              Cerita klien harus nyata.
            </h3>
            <p className="mt-4 leading-7 text-brand-muted">
              Kami belum mempublikasikan kutipan sebelum mendapat persetujuan klien.
              Ruang ini disiapkan untuk hasil terukur, nama usaha, dan konteks project
              yang dapat diverifikasi.
            </p>
            <div className="mt-8 rounded-2xl border border-brand-accent/25 bg-white/70 p-5">
              <p className="text-sm font-bold text-brand-navy">
                Pernah bekerja bersama Kita Lab?
              </p>
              <a
                className="mt-2 inline-flex min-h-11 items-center text-sm font-bold text-brand-accent-strong"
                href="mailto:halo@kitalab.online?subject=Testimoni%20untuk%20Kita%20Lab"
              >
                Bagikan pengalamanmu →
              </a>
            </div>
          </Card>
          <div className="rounded-[2rem] bg-brand-navy p-8 text-white sm:p-10">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-brand-accent">
              Tim Kita Lab
            </span>
            <h3 className="mt-5 max-w-xl text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
              Tim kecil, kolaborasi dekat, tanggung jawab jelas.
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {teamRoles.map((member) => (
                <article className="rounded-2xl border border-white/10 bg-white/8 p-5" key={member.role}>
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-accent text-xs font-black text-brand-navy">
                    {member.initials}
                  </span>
                  <h4 className="mt-5 font-extrabold">{member.role}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/55">{member.description}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs text-white/40">
              Nama dan foto personal akan ditambahkan setelah persetujuan tim.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-brand-navy py-20 text-white sm:py-24" id="kontak">
      <Container className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div>
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-accent-soft">
            Konsultasi awal gratis
          </span>
          <h2 className="mt-6 text-balance text-4xl font-black tracking-[-0.05em] sm:text-5xl">
            Mari sederhanakan satu masalah bisnis dulu.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
            Ceritakan proses yang terasa lambat, berulang, atau sulit dipantau.
            Kami bantu petakan langkah digital yang paling masuk akal.
          </p>
          <div className="mt-8 space-y-3 text-sm text-white/60">
            <p>✓ Balasan awal maksimal 1 hari kerja</p>
            <p>✓ Diskusi tanpa jargon teknis</p>
            <p>✓ Rekomendasi sesuai tahap bisnis</p>
          </div>
          <a className="mt-8 inline-flex min-h-11 items-center font-bold text-brand-accent" href="mailto:halo@kitalab.online">
            halo@kitalab.online
          </a>
          <p className="mt-2 text-sm text-white/45">Makassar, Sulawesi Selatan</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export function LandingWireframe() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Portfolio />
      <TrustAndTeam />
      <Contact />
    </>
  );
}
