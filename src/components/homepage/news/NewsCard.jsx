import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const NewsCard = ({ news }) => {
  return (
    <div className=" bg-base-100 mb-8 rounded-md shadow-xl">
      <div className="">
        <div className="flex items-center p-5 justify-between bg-[#F3F3F3]">
          <div className="flex items-center gap-3">
            <figure>
              <Image
                src={news.author?.img}
                width={40}
                height={40}
                alt="Shoes"
                className="rounded-full"
              />
            </figure>
            <div>
              <h2 className="font-semibold text-[16px]">{news.author?.name}</h2>
              <h2 className="font-regular text-[14px] text-[#706F6F]">
                {news.author?.published_date}
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CiBookmark />
            <CiShare2 />
          </div>
        </div>
        <h2 className="card-title px-5 pt-5 text-lg font-bold">{news.title}</h2>
        <p></p>
      </div>
      <div>
        <figure>
          <Image
            src={news.image_url}
            width={500}
            height={260}
            alt="Shoes"
            className="w-full p-5"
          />
        </figure>
        <p className="line-clamp-3 text-[16px] px-5 text-[#706F6F]">
          {/* truncate */}
          {news.details}
        </p>
        <Link href={`/news/${news._id}`}>
          <button className="btn btn-sm m-5">Read More</button>
        </Link>
        <div className="border-t-2 mx-5 border-gray-300 flex justify-between text-[#706F6F] text-[16px] items-center py-3">
          <div className="flex items-center gap-2">
            <IoIosStar></IoIosStar>
            {news.rating.number}
          </div>
          <div className="flex items-center gap-2">
            <FaEye></FaEye>
            {news.total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

// images.unsplash.com
