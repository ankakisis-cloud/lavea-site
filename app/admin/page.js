"use client";
import { Studio } from "sanity";
import config from "../../sanity.config"; // ✅ две точки

export default function AdminPage() {
  return <Studio config={config} />;
}
