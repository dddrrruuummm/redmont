import type {Metadata} from "next";
import {ContactSection} from "@/components/sections";
export const metadata:Metadata={title:"Contact & Quotations",description:"Contact REDMONT for interior projects, furniture and decorative accessories.",alternates:{canonical:"/contact"}};
export default async function Page({searchParams}:{searchParams:Promise<{product?:string;topic?:string}>}){
  const params=await searchParams;
  const product=typeof params.product==="string"?params.product.slice(0,160):"";
  const allowed=["Interior design","Renovation","Furniture & decor sales","Materials procurement","Other"];
  const topic=product?"Furniture & decor sales":allowed.includes(params.topic||"")?params.topic:"";
  return <ContactSection page initialTopic={topic} initialDetails={product?"I am interested in: "+product+"\nQuantity:\nDimensions / finish preferences:\nDelivery location:\nPreferred timing:":""}/>;
}
