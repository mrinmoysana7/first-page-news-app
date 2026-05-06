import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";

//  Egulo ke alada file e rakhbo, jate code clean and maintainable thake. Data fetching function gulo ke lib folder er data.js file e rakhbo, and sidebar components gulo ke components/homepage/news folder er LeftSidebar.jsx and RightSidebar.jsx file e rakhbo. Eivabe amader code modular hobe and future e maintain kora easy hobe.

// const getCategories = async () => {
//   const res = await fetch(
//     "https://openapi.programming-hero.com/api/news/categories",
//   );

//   const data = await res.json();
//   return data.data;

//   // const data = await res.json();
//   // const categories = await data.data;
//   // return categories;
// };

// const getNewsByCategoryId = async (category_Id) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/news/category/${category_Id}`,
//   );
//   const data = await res.json();
//   const newses = await data.data;
//   return newses;
// };

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  console.log(id, "Category Id from URL");

  const categories = await getCategories();
  //   console.log("Categories", categories.news_category);

  const newses = await getNewsByCategoryId(id);
  //   console.log("News", newses);
  return (
    <div className="container mx-auto grid grid-cols-4 mt-20 gap-5">
      <div className="col-span-1 space-y-10">
        <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
      </div>
      <div className="text-4xl col-span-2">
        News by category:{" "}
        {
          categories.news_category.find((c) => c.category_id === id)
            ?.category_name
        }
        <div className="">
          {newses.length > 0 ? (
            newses.map((news) => {
              return <NewsCard news={news} key={news._id}></NewsCard>;
            })
          ) : (
            <p className="text-3xl font-semibold text-center mt-20">
              No news available in this category.
            </p>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
