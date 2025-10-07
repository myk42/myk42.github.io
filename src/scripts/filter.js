export const getFeaturedPosts = (posts) => {
  return posts.filter((p) => p.data.featured === true);
};
