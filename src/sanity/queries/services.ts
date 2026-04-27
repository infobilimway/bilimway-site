export const servicesQuery = `
  *[_type == "service"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    price,
    category,
    icon
  }
`