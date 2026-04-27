// Берем только 3 последние новости для главной страницы
export const latestPostsQuery = `
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "coverImageUrl": coverImage.asset->url
  }
`;