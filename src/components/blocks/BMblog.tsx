import React, { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import axios from "axios";
import configs from "configs";
import DOMPurify from "dompurify";

interface BMblogProps {}

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

const BMblog: React.FC<BMblogProps> = () => {
  const [blogs, setBlogs] = useState<Iblog[]>([]);

  useEffect(() => {
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
      <AnimationOnScroll animateIn="bounceInLeft">
        <h3 className="text-73 font-bold mb-5">BM Blog</h3>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="fadeIn">
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
                <img
                  src={item.thumbnail}
                  className="h-full inline"
                  alt="blog"
                />
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
      </AnimationOnScroll>
    </div>
  );
};

export default BMblog;
