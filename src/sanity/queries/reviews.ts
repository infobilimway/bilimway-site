export const approvedReviewsQuery = `
  *[_type == "review" && approved == true] 
    | order(submittedAt desc)[0...6]{
      _id,
      name,
      role,
      message,
      rating,
      submittedAt
    }
`;