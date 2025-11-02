import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "1e9ly1np",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-10-01",
  useCdn: true,
});

export async function GET() {
  const data = await client.fetch(`*[_type == "price"] | order(order asc){
    _id, name, subtitle, includes, price, popular
  }`);
  return NextResponse.json(data);
}
