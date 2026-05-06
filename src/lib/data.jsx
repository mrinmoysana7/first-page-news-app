export const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

export const getNewsByCategoryId = async (category_Id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_Id}`,
  );
  const data = await res.json();
  const newses = await data.data;
  return newses;
};

export const getNewsDetails = async (news_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
  );
  const data = await res.json();
  return data.data[0];
};
