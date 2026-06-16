import { groq } from "next-sanity";

export const PROGRAMS_QUERY = groq`
  *[_type == "program"] | order(_createdAt asc) {
    _id,
    name,
    description,
    neighborhood,
    peopleHelped,
    peopleHelpedLabel,
    category,
    image
  }
`;
