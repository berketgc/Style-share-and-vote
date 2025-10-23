import React, { useState, useRef, useEffect } from "react";
import PostItems from "./PostItems";
import Follower from "./Follower";

const Post = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isNewPost, setIsNewPost] = useState(false);
  const newPostRef = useRef(null);

  
  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  
  const handlePost = () => {
    setIsNewPost(!isNewPost);
  };

  
  useEffect(() => {
    const handleClickOut = (e) => {
      if (newPostRef.current && !newPostRef.current.contains(e.target)) {
        setIsNewPost(false);
      }
    };
    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-8 mt-16 w-4/5 m-auto border-2 border-white relative bg-[#EBCB90]">
      
      <div className="relative flex flex-col items-center ">
        <img
          className="size-44 border-2 border-white rounded-full p-2 bg-white"
          src="../images/avatar4.jpg"
          alt=""
        />
        <p className="text-center mt-3">felix86</p>
        <img
          onClick={handleMenu}
          className="size-14 absolute top-0 left-180 hover:cursor-pointer"
          src="../images/menuu.png"
          alt="menu"
        />
        <div
          className={`bg-gray-300 flex flex-col justify-center items-center gap-4 absolute top-18 left-173 p-2 rounded-2xl text-white transition-all duration-300 ${
            isMenu ? "block" : "hidden"
          }`}
        >
          <a href="#">Account</a>
          <a href="#">Messages</a>
          <a href="#">Achievements</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
        </div>
      </div>

  
      <section className="flex justify-center gap-4 p-4 border-b-2 border-white w-full mt-6">
        <button className="bg-sky-400 p-2 rounded-2xl">post: 4</button>
        <button className="bg-yellow-400 p-2 rounded-2xl">score:+10</button>
        <button className="bg-green-400 p-2 rounded-2xl">followers: 4</button>
      </section>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full mt-6 bg-gray-100">
      
        <div className="w-full lg:w-2/3">
          <h2 className="text-center font-bold text-2xl underline">Your Posts</h2>
          <section className="flex flex-wrap justify-center items-center gap-4 mt-6 relative p-2">
            <PostItems img={"../images/avatar6.jpg"} />
            <PostItems img={"../images/avatar7.jpg"} />
            <PostItems img={"../images/avatar8.jpg"} />
            <PostItems img={"../images/avatar5.jpg"} />

            
            <div className="border-2 border-white size-40 flex justify-center items-center bg-gray-100 opacity-50 hover:opacity-90">
              <img
                onClick={handlePost}
                className="size-20 hover:cursor-pointer"
                src="../images/more.png"
                alt="new post"
              />
            </div>

            
            {isNewPost && (
              <section
                ref={newPostRef}
                className="border-2 w-[500px] h-[600px] bg-gray-100 flex flex-col justify-center items-center gap-8 absolute bottom-0 left-1/2 -translate-x-1/2 z-50 shadow-2xl p-4 rounded-2xl"
              >
                <img
                  className="size-20"
                  src="../images/new-post.png"
                  alt="new post"
                />
                <input
                  className="border-2 bg-white w-full p-2"
                  type="text"
                  placeholder="Title"
                />
                <select
                  className="bg-white border-2 w-full p-2"
                  name="category"
                  id="category"
                >
                  <option value="">Casual</option>
                  <option value="">Sport</option>
                  <option value="">Formal</option>
                  <option value="">StreetWear</option>
                  <option value="">Vintage</option>
                </select>
                <div className="flex flex-col gap-4 mt-4 justify-center items-center">
                  <img
                
                    className="size-40 border-white border-2  rounded-2xl hover:cursor-pointer"
                    src="../images/post.png"
                    alt="post"
                  />
                  <button
                    onClick={() => setIsNewPost(false)}
                    className="text-2xl p-2 text-white bg-pink-600 rounded-2xl w-20"
                  >
                    Share
                  </button>
                </div>
              </section>
            )}
          </section>
        </div>

      
        <section className="flex flex-col md:flex-row justify-center items-start gap-6 border-t-2 lg:border-t-0 lg:border-l-2 p-4 mt-8 lg:mt-0">
          <div className="border-2  p-2">
            <h2 className="text-center font-semibold">Followers</h2>
            <Follower follower={"user1"} button={"follow"} />
            <Follower follower={"user2"} button={"follow"} />
            <Follower follower={"user1"} button={"follow"} />
            <Follower follower={"user2"} button={"follow"} />
          </div>

          <div className="border-2  p-2">
            <h2 className="text-center font-semibold">Follow</h2>
            <Follower follower={"user1"} button={"unfollow"} />
            <Follower follower={"user2"} button={"unfollow"} />
             <Follower follower={"user1"} button={"unfollow"} />
            <Follower follower={"user2"} button={"unfollow"} />
             <Follower follower={"user1"} button={"unfollow"} />
            <Follower follower={"user2"} button={"unfollow"} />

          </div>
        </section>
      </div>
    </div>
  );
};

export default Post;
