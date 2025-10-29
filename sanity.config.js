import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "lavea-studio",
  title: "LAVEA Content",
  projectId,
  dataset,
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas }
});
