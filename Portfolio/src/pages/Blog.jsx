import { useEffect, useState } from "react";
import ArrowLink from "../components/ArrowLink";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `
    query Publication {
      publication(host: "jonaz.hashnode.dev") {
        posts(first: 4) {
          edges {
            node {
              title
              brief
              url
              coverImage {
                url
              }
              slug
            }
          }
        }
      }
    }
    `;

    fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((data) => {
        const fetchedPosts = data.data.publication.posts.edges.map(edge => edge.node);
        setPosts(fetchedPosts);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch blog posts");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center top-30 absolute left-[40%] lg:left-[45%]">Loading posts...</p>;
  if (error) return <p className="text-center top-30 absolute left-[40%] lg:left-[45%] text-red-500">{error}</p>;

  return (
            <section className="relative max-w-full flex flex-col items-center justify-center text-primary-light ">
                <div className="px-4 lg:px-8 xl:px-10">
                    {/* Hero Section */}
                    <div className="relative flex flex-col items-center justify-center text-center mt-30">
                        <h1 className="text-[35px] sm:text-[60px] md:text-[75px] lg:text-[100px] xl:text-[120px] font-bold font-inter">
                        BLOG POSTS
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 ">
                      {posts.map((post) => (
                        <div
                          key={post.slug}
                          className="bg-background-secondary rounded-2xl shadow-md hover:shadow-lg navbox transform transition-transform duration-400 ease-in-out hover:scale-[1.02] flex flex-col "
                        >
                          <div className="bg-white rounded-t-2xl">
                            {post.coverImage && (
                            <img
                            src={post.coverImage.url}
                            alt={post.title}
                            className="w-full rounded-t-2xl"
                            />
                            )}
                          </div>
                          <div className="p-6 lg:p-4 flex flex-col  ">
                            <div>
                              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                              <p className="text-sm text-gray-400 mb-4">{post.brief}</p>
                            </div>
                            <ArrowLink
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-between mt-6 max-w-[115px]"
                            text="Read More"
                            />


                          </div>
                        </div>
                      ))}
                    </div>
                </div>
            
            <Cta />
            <Footer />

                  
            </section>
  );
}
