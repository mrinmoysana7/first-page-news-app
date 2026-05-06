import Link from "next/link";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <p className="font-semibold text-xl">All Categories</p>
      <ul className="flex mt-5 flex-col gap-3">
        {categories.news_category.map((category) => {
          return (
            <li
              key={category.category_id}
              className={`font-medium text-lg
                ${activeId === category.category_id && "bg-slate-100 p-3 rounded-md font-semibold text-xl text-center"}
                `}
            >
              <Link
                className="block  p-2"
                href={`/category/${category.category_id}`}
              >
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
