import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="container mx-auto p-4 bg-[#F3F3F3]">
            <div className="flex gap-5">
                <button className="btn bg-[#D72050] text-white">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;