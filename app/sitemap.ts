import type {MetadataRoute} from "next";
import {site} from "@/lib/site";
import {furniture} from "@/lib/furniture";
export default function sitemap():MetadataRoute.Sitemap{
 const routes=["","/about","/services","/showcase","/contact","/privacy-policy","/terms","/furniture",...furniture.map(p=>"/furniture/"+p.slug)];
 return routes.map(route=>({url:site.url+route,lastModified:new Date("2026-10-17"),changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:route==="/furniture"?.9:.7}));
}

