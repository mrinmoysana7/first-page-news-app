import { getNewsDetails } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetails(id);

  return {
    title: news.title,
    description: news.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetails(id);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-base-100 mb-8 rounded-md shadow-xl">
        <div>
          <div className="flex items-center p-5 justify-between bg-[#F3F3F3]">
            <div className="flex items-center gap-3">
              <figure>
                <Image
                  src={news.author.img}
                  width={40}
                  height={40}
                  alt="author"
                  className="rounded-full"
                />
              </figure>
              <div>
                <h2 className="font-semibold text-[16px]">
                  {news.author.name}
                </h2>
                <h2 className="font-regular text-[14px] text-[#706F6F]">
                  {news.author.published_date}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CiBookmark />
              <CiShare2 />
            </div>
          </div>
          <h2 className="card-title px-5 pt-5 text-lg font-bold">
            {news.title}
          </h2>
        </div>
        <div>
          <figure>
            <Image
              src={news.image_url}
              width={500}
              height={260}
              alt="news"
              className="w-full p-5"
              priority
            />
          </figure>
          <p className="text-[16px] px-5 text-[#706F6F]">{news.details}</p>
          <Link href="/">
            <button className="btn btn-sm m-5">Back to Home</button>
          </Link>
          <Link href={`/category/${news.category_id}`}>
            <button className="btn btn-sm m-5">
              All news in this category <BsArrowRight></BsArrowRight>
            </button>
          </Link>
          <div className="border-t-2 mx-5 border-gray-300 flex justify-between text-[#706F6F] text-[16px] items-center py-3">
            <div className="flex items-center gap-2">
              <IoIosStar className="text-yellow-500" />
              {news.rating.number}
            </div>
            <div className="flex items-center gap-2">
              <FaEye />
              {news.total_view}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
