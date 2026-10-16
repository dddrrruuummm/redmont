"use client";
import {useState} from "react";
import {useSearchParams} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {gallery} from "@/lib/gallery";
import {products} from "@/lib/site";
import {furniture} from "@/lib/furniture";
const allItems = [...products.map((p,i)=>({id:"code" in p?String(p.code):`product-${i}`,title:p.name,group:p.category,image:p.image,description:p.description,alt:p.name,href:"/contact"})),...gallery.map(p=>({...p,href:"/contact"})),...furniture.map(p=>({id:"furniture-"+p.slug,title:p.name,group:p.category,image:p.image,description:p.description,alt:p.alt,href:"/furniture/"+p.slug}))];
export function CollectionExplorer(){const params=useSearchParams();return <Explorer key={params.toString()} initialQuery={params.get("q")||""}/>;}
function Explorer({initialQuery}:{initialQuery:string}){
 const [query,setQuery]=useState(initialQuery);const [category,setCategory]=useState("All");
 const groups=["All",...new Set(allItems.map(p=>p.group))];
 const items=allItems.filter(p=>(category==="All"||p.group===category)&&`${p.title} ${p.group} ${p.description}`.toLowerCase().includes(query.toLowerCase()));
 return <div className="collection-explorer"><aside className="collection-controls"><label className="collection-search">Search the collection<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Product, material, or application"/></label><div className="collection-filters" aria-label="Filter by category">{groups.map(g=><button type="button" aria-pressed={category===g} key={g} onClick={()=>setCategory(g)}>{g}</button>)}</div></aside><div className="collection-results"><p className="collection-count" aria-live="polite">{items.length} {items.length===1?"item":"items"}</p>{items.length?<div className="collection-grid">{items.map(p=><article className="collection-entry" id={p.id} key={p.id}><div className="collection-photo"><Image src={p.image} alt={p.alt} fill sizes="(max-width:600px) 100vw,(max-width:1000px) 50vw,33vw"/></div><div className="collection-entry-copy"><p>{p.group}</p><h2>{p.title}</h2><p>{p.description}</p><Link href={p.href}>{p.href.startsWith("/furniture/")?"View details":"Discuss your space"} ↗</Link></div></article>)}</div>:<div className="collection-empty"><h2>No matching items.</h2><p>Try another product name or choose All.</p><button className="action" type="button" onClick={()=>{setCategory("All");setQuery("")}}>Show all items</button></div>}</div></div>
}
