import { defineField, defineType } from "sanity";

export default defineType({
  name: "program",
  title: "Programs",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Program Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "neighborhood",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "peopleHelped",
      title: "People Helped",
      type: "number",
    }),

    defineField({
      name: "peopleHelpedLabel",
      title: "People Helped Label",
      type: "string",
      initialValue: "People Reached",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Education", value: "education" },
          { title: "Environment", value: "environment" },
          { title: "Health", value: "health" },
          { title: "Community", value: "community" },
        ],
      },
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});