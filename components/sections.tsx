import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { products, services, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-ink text-white">
      <Image src="/images/hero.png" alt="A warm contemporary hospitality interior" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,14,.76)_0%,rgba(16,16,14,.28)_58%,rgba(16,16,14,.12)_100%)]" />
      <div className="blueprint-grid absolute inset-0 opacity-30" />
      <div className="container-page relative flex min-h-[calc(100svh-76px)] flex-col justify-between py-10 sm:py-14">
        <div className="flex items-start justify-between gap-6">
          <p className="max-w-[13rem] text-[0.65rem] font-bold uppercase leading-5 tracking-[0.22em] text-white/70">Interior design / procurement / construction</p>
          <p className="hidden font-mono text-xs text-white/60 sm:block">SANTAQUIN / UTAH</p>
        </div>
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_15rem]">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d7b88a]"><span className="h-px w-10 bg-[#d7b88a]" /> Utah, USA</p>
            <h1 className="max-w-5xl text-[clamp(3.15rem,9vw,8.6rem)] leading-[0.86] text-white">Space, made<span className="block sm:pl-[11vw] italic text-[#e8d7bd]">personal.</span></h1>
          </div>
          <div className="border-l border-white/35 pl-6">
            <p className="text-sm leading-6 text-white/80">One team carrying your project from the first sketch to the final room.</p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-3 border-b border-white pb-2 text-xs font-bold uppercase tracking-[0.16em]">Begin a project <ArrowUpRight size={16} /></Link>
          </div>
        </div>
        <div className="flex items-end justify-between border-t border-white/25 pt-5">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-white/60">REDMONT / EST. UTAH</p>
          <a href="#studio" aria-label="Scroll to studio introduction" className="grid h-11 w-11 place-items-center border border-white/40 transition hover:bg-white hover:text-ink"><ArrowDown size={17} /></a>
        </div>
      </div>
    </section>
  );
}

export function StudioStatement() {
  return (
    <section id="studio" className="overflow-hidden bg-[#ece8e0] py-24 sm:py-32">
      <div className="container-page"><div className="grid gap-12 lg:grid-cols-[14rem_1fr]">
        <div><p className="section-index">01 / Studio</p><div className="mt-10 hidden h-36 w-px bg-ink/25 lg:block" /></div>
        <div>
          <h2 className="max-w-5xl text-[clamp(2.6rem,6vw,6.4rem)] leading-[0.98]">We design the feeling of a place,<span className="text-[#9b6c3e]"> then build every detail around it.</span></h2>
          <div className="mt-14 grid gap-8 border-t border-ink/20 pt-8 md:grid-cols-2">
            <p className="max-w-md text-lg leading-8 text-ink/70">REDMONT brings design, sourcing, and site delivery into one continuous conversation. Fewer handoffs. Clearer decisions. Spaces that feel whole.</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 text-sm">{services.slice(0, 4).map((service, index) => <p key={service} className="border-t border-ink/20 pt-3"><span className="mr-3 font-mono text-[0.65rem] text-wine">0{index + 1}</span>{service}</p>)}</div>
          </div>
        </div>
      </div></div>
    </section>
  );
}

export function ProjectGallery() {
  const featured = products.slice(0, 8);
  const layouts = ["lg:col-span-7", "lg:col-span-5 lg:mt-24", "lg:col-span-5", "lg:col-span-7 lg:mt-16", "lg:col-span-7", "lg:col-span-5 lg:mt-20", "lg:col-span-5", "lg:col-span-7 lg:mt-14"];
  return (
    <section className="bg-[#171714] py-24 text-white sm:py-32"><div className="container-page">
      <div className="flex items-end justify-between gap-8 border-b border-white/20 pb-6">
        <div><p className="section-index text-white/50">02 / Selected Spaces</p><h2 className="mt-5 text-5xl sm:text-7xl">Rooms with a point of view.</h2></div>
        <Link href="/showcase" className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d7b88a] sm:flex">View every space <ArrowUpRight size={16} /></Link>
      </div>
      <div className="mt-12 grid gap-x-5 gap-y-14 lg:grid-cols-12 lg:items-start">{featured.map((project, index) => <article key={project.name} className={`${layouts[index]} group min-w-0`}><div className={`relative overflow-hidden ${index % 3 === 0 ? "aspect-[4/3]" : "aspect-[3/2]"}`}><Image src={project.image} alt={project.name} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" /></div><div className="mt-4 flex items-start justify-between gap-5 border-t border-white/20 pt-4"><div className="min-w-0"><p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#d7b88a]">0{index + 1} / {project.category}</p><h3 className="mt-2 text-2xl text-white sm:text-3xl">{project.name}</h3></div><ArrowUpRight className="mt-1 shrink-0 text-white/45" size={18}/></div></article>)}</div>
    </div></section>
  );
}

export function MaterialLibrary() {
  const swatches = [{name:"Burnished Oak",color:"#7d5036"},{name:"Utah Clay",color:"#a86f51"},{name:"Limestone",color:"#c8bdab"},{name:"Soft Plaster",color:"#e8e0d4"},{name:"Charred Steel",color:"#292824"}];
  return (
    <section className="bg-[#f5f2ec] py-24 sm:py-32"><div className="container-page">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-end"><div><p className="section-index">03 / Material Language</p><h2 className="mt-6 max-w-xl text-5xl leading-[1.02] sm:text-7xl">A palette you can feel.</h2></div><p className="max-w-xl text-lg leading-8 text-ink/65">Finish selections are not decoration at the end. They shape light, acoustics, durability, and the way a room settles around its occupants.</p></div>
      <div className="mt-14 grid grid-cols-2 border border-ink/15 sm:grid-cols-5">{swatches.map((swatch,index) => <div key={swatch.name} className="min-h-52 border-ink/15 p-4 even:border-l sm:border-l sm:first:border-l-0" style={{backgroundColor:swatch.color}}><div className={`flex h-full flex-col justify-between text-[0.62rem] font-bold uppercase tracking-[0.14em] ${index < 2 || index === 4 ? "text-white" : "text-ink"}`}><span>R-{index+1}</span><span>{swatch.name}</span></div></div>)}</div>
    </div></section>
  );
}

export function ProcessSection() {
  const steps = [["Discover","Your goals, site, scope, and priorities."],["Design","Plans, finishes, furniture, and aligned decisions."],["Procure","Materials and furnishings coordinated to schedule."],["Build","Site delivery managed through final completion."]];
  return (
    <section className="bg-[#b8784f] py-24 text-[#191714] sm:py-32"><div className="container-page"><div className="grid gap-10 lg:grid-cols-[14rem_1fr]">
      <p className="section-index text-ink/60">04 / Process</p><div><h2 className="max-w-4xl text-5xl leading-[1.02] sm:text-7xl">One thread from idea to installation.</h2><div className="mt-16 grid gap-0 border-t border-ink/45 md:grid-cols-4">{steps.map(([title,text],index) => <div key={title} className="relative border-b border-ink/35 py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"><span className="absolute -top-3 left-0 grid h-6 w-6 place-items-center rounded-full bg-ink font-mono text-[0.6rem] text-white md:left-6">{index+1}</span><h3 className="mt-3 text-2xl">{title}</h3><p className="mt-4 text-sm leading-6 text-ink/70">{text}</p></div>)}</div></div>
    </div></div></section>
  );
}

export function ContactSection() {
  return (
    <section className="bg-[#ece8e0] py-24 sm:py-32"><div className="container-page"><div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
      <div><p className="section-index">Project Inquiry</p><h1 className="mt-7 max-w-3xl text-[clamp(3.2rem,7vw,7.5rem)] leading-[0.88]">What could this space become?</h1><p className="mt-8 max-w-xl text-lg leading-8 text-ink/65">Tell us where you are starting and what success should feel like. We will help define the next useful step.</p><div className="mt-10 flex flex-col gap-4 text-sm font-bold"><a href={`mailto:${site.email}`} className="inline-flex items-center gap-2"><Mail size={17} />{site.email}</a><a href={site.address.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><MapPin size={17} />{site.address.formatted}</a><a href={`https://wa.me/${site.whatsapp.replace("+","")}`} className="inline-flex items-center gap-2"><MessageCircle size={17} />WhatsApp</a></div></div>
      <form className="border-t-2 border-ink pt-7"><label className="form-line">Name<input aria-label="Name" /></label><label className="form-line">Email<input aria-label="Email" type="email" /></label><label className="form-line">Project type<input aria-label="Project type" /></label><label className="form-line items-start">Tell us about the space<textarea aria-label="Project details" rows={4} /></label><Link href={`mailto:${site.email}?subject=REDMONT%20Project%20Inquiry`} className="mt-8 flex w-full items-center justify-between bg-ink px-6 py-5 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-wine">Send project inquiry <ArrowUpRight size={17} /></Link></form>
    </div></div></section>
  );
}

export function ProductGrid({limit}:{limit?:number}) { const visible=limit?products.slice(0,limit):products; return <section className="bg-[#f5f2ec] py-24"><div className="container-page"><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{visible.map((product,index)=><article key={product.name} className="group"><div className="relative aspect-[4/5] overflow-hidden"><Image src={product.image} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" /></div><p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-wine">0{index+1} / {product.category}</p><h2 className="mt-2 text-3xl">{product.name}</h2><p className="mt-3 text-sm leading-6 text-ink/60">{product.description}</p></article>)}</div></div></section>; }
export function TrustBand(){return <MaterialLibrary />;}
export function ServicesSection(){return <ProcessSection />;}
