import React from "react";

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      title: "Nissan and Infiniti recall 1.2 million vehicles",
      desc: "Nissan North America, Inc. is issuing a massive recall on pretty much every 2018-2019 model due to a faulty image on the back-up camera.",
      img: "https://i.ibb.co/wQBXjCw/bike-blog-9.jpg",
    },
    {
      id: 2,
      title: "This non-slip toll mat might in your garage",
      desc: " S&B Tool trays are made of a premium silicone that lasts longer and looks better. It won't crack over time, has exceptional tear strength, and can handle ...",
      img: "https://i.ibb.co/5vLLSTm/bike-blog-7.jpg",
    },
    {
      id: 3,
      title: "Main reasons to buy a new luxury car in 2022",
      desc: "It is true that the value of a car depreciates with time and mileage. However, the resale value of luxury cars depreciates at a steady pace than new average or ...",
      img: "https://i.ibb.co/c8tS3xN/bike-blog-8.jpg",
    },
  ];
  return (
    <div className="lg:w-4/5  mx-auto p-5 w-full">
      <h1 className="text-4xl font-bold my-9 text-center">
        This is latest news
      </h1>
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-7">
        {newsData.map((news) => (
          <div key={news.id} className=" rounded-md shadow-xl pb-7 group">
            <div className="w-full ">
              <img className="w-full" src={news.img} alt="" />
            </div>

            <h1 className="text-2xl font-bold my-5 px-4 border-l-4 border-black group-hover:text-red-500 group-hover:border-red-500 duration-500">
              {news.title}
            </h1>
            <p className="px-5">{news.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
