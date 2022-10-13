import Image from "next/image";
import React from "react";
import {FiThumbsUp} from "react-icons/fi"
import {FaRegCommentAlt} from "react-icons/fa"
import {RiShareForwardLine} from "react-icons/ri"

const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
          />
          <div>
            <p className="font-medium">David Olaotan</p>
            {/* <p className="text-sm text-gray-500">
              {new Date().toLocaleString()}
            </p> */}
          </div>
        </div>
        <p className="py-4">lorem ipsum</p>
      </div>
      <div className="relative h-60 md:h-96 bg-white">
        <Image
          src="https://images.pexels.com/photos/4557876/pexels-photo-4557876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          layout="fill" objectFit="cover"
        />
      </div>
      <div className="flex items-center justify-center bg-white">
        <div className="flex items-center space-x-1 hover:bg-gray-100 rounded-xl cursor-pointer flex-grow p-2 justify-center">
            <FiThumbsUp className="h-4" />
            <p className="text-sm sm:text-base">Like</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 rounded-xl cursor-pointer flex-grow p-2 justify-center">
            <FaRegCommentAlt className="h-4" />
            <p className="text-sm sm:text-base">Comments</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 rounded-xl cursor-pointer flex-grow p-2 justify-center">
            <RiShareForwardLine className="h-4" />
            <p className="text-sm sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
