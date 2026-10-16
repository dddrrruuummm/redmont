"use client";
import {useState} from "react";
import {useSearchParams} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {furniture} from "@/lib/furniture";
export function FurnitureExplorer(){
  const params=useSearchParams();
  return <Explorer key={params.toString()} initialCategory={params.get("category")||"All"} />;
}
function Explorer({initialCategory}:{initialCategory:string}){
  const categories=["All",...new Set(furniture.map(p=>p.category))];
  const [category,setCategory]=useState(categories.includes(initialCategory)?initialCategory:"All");
  const [query,setQuery]=useState("");
  const items=furniture.filter(p=>(category==="All"||p.category===category)&&(p.name+" "+p.description).toLowerCase().includes(query.trim().toLowerCase()));
  return <div className="furn-explorer" id="collections">
    <div className="furn-controls"><div className="furn-filters" aria-label="Furniture categories">{categories.map(c=><button type="button" key={c} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><label>Find a collection<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Chair, lamp, vase…" /></label></div>
    <p className="furn-count" aria-live="polite">{items.length} collections</p>
    {items.length?<div className="furn-grid">{items.map(p=><article key={p.slug}><Link className="furn-photo" href={"/furniture/"+p.slug}><Image src={p.image} alt={p.alt} fill sizes="(max-width:600px) 100vw,(max-width:1000px) 50vw,33vw" /></Link><p className="furn-category">{p.category}</p><h2><Link href={"/furniture/"+p.slug}>{p.name}</Link></h2><p>{p.description}</p><Link className="furn-view" href={"/furniture/"+p.slug}>Explore collection <span aria-hidden="true">↗</span></Link></article>)}</div>:<div className="furn-empty"><h2>No collections found.</h2><p>Try another search or browse the full collection.</p><button className="action" onClick={()=>{setQuery("");setCategory("All");}}>View all collections</button></div>}
  </div>;
}

