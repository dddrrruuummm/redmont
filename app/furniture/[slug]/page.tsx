import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {furniture} from "@/lib/furniture";
export const dynamicParams=false;
export function generateStaticParams(){return furniture.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=furniture.find(x=>x.slug===slug);return p?{title:p.name+" | Furniture & Decor",description:p.description,alternates:{canonical:"/furniture/"+p.slug}}:{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=furniture.find(x=>x.slug===slug);if(!p)notFound();return <section className="furn-detail container-page"><nav className="furn-breadcrumb" aria-label="Breadcrumb"><Link href="/furniture">Furniture &amp; decor</Link><span aria-hidden="true">/</span><span>{p.name}</span></nav><div className="furn-detail-main"><div className="furn-detail-photo"><Image src={p.image} alt={p.alt} fill priority sizes="(max-width:700px) 100vw,58vw"/></div><div className="furn-detail-copy"><p>{p.category}</p><h1>{p.name}</h1><p>{p.description}</p><h2>Let’s find the right fit.</h2><ul>{p.considerations.map(x=><li key={x}>{x}</li>)}</ul><p>Tell us the look, size and quantity you need. We’ll discuss suitable options and provide item details, pricing and availability for your review.</p><Link className="action" href={"/contact?product="+encodeURIComponent(p.name)}>Request a quotation ↗</Link><Link className="furn-view" href="/furniture">Back to all collections</Link></div></div><div className="furn-related"><h2>Bring the room together.</h2><div>{furniture.filter(x=>x.slug!==slug).slice(0,3).map(x=><Link key={x.slug} href={"/furniture/"+x.slug}><span className="furn-photo"><Image src={x.image} alt={x.alt} fill sizes="(max-width:600px) 100vw,33vw"/></span><h3>{x.name} ↗</h3></Link>)}</div></div></section>;}

