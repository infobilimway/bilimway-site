export const universitiesQuery = `
  *[_type == "university"] | order(publishedAt desc)[0...6]{
    _id,
    name,
    "slug": slug.current,
    city,
    country,
    shortDescription,
    tuitionFrom,
    faculties,
    coverImage{
      alt,
      asset->
    }
  }
`