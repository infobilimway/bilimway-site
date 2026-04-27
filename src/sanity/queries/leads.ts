export const allLeadsQuery = `
  *[_type == "lead"] | order(createdAt desc){
    _id,
    name,
    citizenship,
    email,
    phone,
    targetUniversity,
    comment,
    status,
    createdAt
  }
`