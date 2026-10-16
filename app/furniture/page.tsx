import type {Metadata} from "next";
import {Suspense} from "react";
import Image from "next/image";
import Link from "next/link";
import {FurnitureExplorer} from "@/components/furniture-explorer";
export const metadata:Metadata={title:"Furniture & Decor",description:"Explore REDMONT furniture and decorative accessories: seating, tables, storage, lighting, mirrors and textiles. Contact us for selection and pricing.",alternates:{canonical:"/furniture"}};
export default function Page(){return <>
  <section className="furn-cover"><div className="container-page furn-cover-copy"><h1>Furniture.<br/>Objects.<br/>A room of your own.</h1><div><p>Furniture and decorative accessories, sold through a personal selection and quotation process. Find a piece for your home or bring together a whole room.</p><a className="action" href="#collections">Browse the collections ↓</a></div></div><div className="furn-cover-photo"><Image src="/photos/studio-room.webp" alt="Living room with a sectional sofa, timber table, patterned rug and natural light" fill priority sizes="100vw" /></div></section>
  <section className="furn-range container-page"><div className="furn-range-heading"><h2>Find the pieces<br/>that feel like you.</h2><p>From a single lamp to coordinated furniture for a home, workplace or hospitality space. Explore the collection, then tell us what you have in mind.</p></div><Suspense fallback={<p>Loading collections…</p>}><FurnitureExplorer/></Suspense></section>
  <section className="furn-order container-page"><h2>A considered way<br/>to furnish.</h2><div><article><h3>Choose a direction</h3><p>Browse furniture and decor, or send a reference for the look you want.</p></article><article><h3>Make it specific</h3><p>Share dimensions, finishes, quantity, budget and delivery location.</p></article><article><h3>Review your quotation</h3><p>Confirm the exact item, price, availability, lead time and delivery arrangements before ordering.</p></article><Link href="/contact?topic=Furniture%20%26%20decor%20sales" className="action">Discuss furniture &amp; decor ↗</Link></div></section>
</>;}

