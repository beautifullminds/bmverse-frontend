import React, { useEffect, useState } from "react";
import axios from "axios";
import configs from "configs";
import DOMPurify from "dompurify";

interface BMblogProps {
  scroll: number;
}

interface Iblog {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

const BMblogStyle = {
  padding: "20px",
  background: "rgba(16, 16, 16, 0.2)",
  borderRadius: "15px"
};

const blogItemStyle = {
  display: "block",
  borderRadius: "15px",
  minHeight: "300px",
  padding: "20px"
};

const scrollHeightArr: { path: string; height: number }[] = [
  { path: "/bmgame", height: 1800 },
  { path: "/bmgalaxy", height: 4500 },
  { path: "/bmcard", height: 1290 },
  { path: "/bmmusic", height: 1200 },
  { path: "/bmmega", height: 4600 },
  { path: "/bmjewel", height: 2700 },
  { path: "/bmlearn", height: 3800 }
];

const BMblog: React.FC<BMblogProps> = ({ scroll }) => {
  const [sh, setSh] = useState(0);
  const [blogs, setBlogs] = useState<Iblog[]>([]);

  useEffect(() => {
    const pathname = window.location.href;
    const fH = scrollHeightArr.find((item: { path: string; height: number }) =>
      pathname.includes(item.path)
    );
    if (fH) {
      setSh(fH.height);
    }

    axios
      .get(configs.MEDIUM_URL)
      .then((data: any) => {
        if (data.data.items && data.data.items.length > 0) {
          let arr: Iblog[] = [];
          for (let i = 0; i < data.data.items.length; i++) {
            arr.push({
              title: data.data.items[i].title,
              description: data.data.items[i].description,
              thumbnail: data.data.items[i].thumbnail,
              link: data.data.items[i].link
            });
          }
          setBlogs(arr);
        }
      })
      .catch((e: any) => {
        console.log(e);
      });
  }, []);

  return (
    <div style={BMblogStyle}>
      <h3
        className={`text-73 font-bold mb-5 lg:left-[-1000px] relative ${
          sh > 0 && scroll > sh ? "transition-origin" : ""
        }`}
      >
        BM Blog
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]">
        {blogs.map((item: Iblog, index: number) => (
          <a
            style={blogItemStyle}
            className="bg-dark"
            target="_blank"
            rel="noreferrer"
            href={item.link}
            key={index}
          >
            <div className="h-[100px] rounded-t-[13px] text-center p-2">
              <img src={item.thumbnail} className="h-full inline" alt="blog" />
            </div>
            <div className="min-h-[100px] flex justify-center items-center">
              <h3 className="pt-4 text-28 font-semibold">{item.title}</h3>
            </div>

            {
              <div
                className="text-16 mt-3 max-h-[200px] break-all overflow-hidden limited-text text-left"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.description, {
                    ALLOWED_TAGS: ["p"]
                  })
                }}
              />
            }
          </a>
        ))}
      </div>
    </div>
  );
};

export default BMblog;
