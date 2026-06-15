"use client";

import {defineConfig} from "sanity";
import {visionTool} from "@sanity/vision";
import {structureTool} from "sanity/structure";

import {projectId, dataset, apiVersion} from "./src/sanity/env";
import {schemaTypes} from "./src/sanity/schemaTypes";
import {structure} from "./src/sanity/structure";

export default defineConfig({
  name: "default",
  title: "NGO Website CMS",

  projectId,
  dataset,

  basePath: "/studio",

  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
np  ],

  schema: {
    types: schemaTypes,
  }
});