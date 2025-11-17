import { groq } from 'next-sanity'

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    name,
    description,
    "logo": logo.asset->url,
    link {
      href,
      label
    }
  }
`
