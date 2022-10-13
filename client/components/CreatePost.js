import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import {RiDeleteBin6Fill} from "react-icons/ri"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../public/src/features/postSlice";

const CreatePost = () => {
  const { data: session } = useSession();
  const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post"
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);

  const dispatch = useDispatch()

  const [imageToPost, setImageToPost] = useState(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = (e) => {
        setImageToPost(e.target.result);
      };
    }
  };

  const removeImage = () =>{
    setImageToPost(null)
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()

    if(!inputRef.current.value) return
    const formData = new FormData()

    formData.append("file", imageToPost)
    formData.append("post", inputRef.current.value)
    formData.append("name", session?.user.name)
    formData.append("email", session?.user.email)
    formData.append("profilePic", session?.user.image)

    await axios.post(FACEBOOK_CLONE_ENDPOINT, formData,{
      headers: {Accept: "application/json"}
    }).then((response)=>{
      inputRef.current.value = ""
      console.log(response.data)
      dispatch(addPost(response.data))
      removeImage()
    }).catch((error)=>{
      console.log(error)
    })
    
  }
  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex items-center space-x-2 p-4">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full"
        />
        <form className="flex flex-1">
          <input
            className="flex-grow rounded-full h-12 p-4 focus:outline-none font-medium bg-gray-100"
            type="text"
            placeholder={`What's on Your Mind ${session?.user.name}`}
            ref={inputRef}
          ></input>
          <button hidden onClick={handleSubmit}></button>
        </form>
        
      </div>
      {imageToPost && (
        <div className="flex items-center space-x-4 px-4 py-2 hover:brightness-110 filter transition duration-150 cursor-pointer">
          <img src={imageToPost} className="h-10 object-contain" />
          <RiDeleteBin6Fill className="h-16 hover:text-red-500 cursor-pointer" onClick={removeImage} />
        </div>
      )}
      <div className="flex justify-evenly py-2">
        <div className="flex flex-grow justify-center py-1 space-x-1 items-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600">Live Video</p>
        </div>
        <div
          onClick={handleClick}
          className="flex flex-grow justify-center py-1 space-x-1 items-center hover:bg-gray-100 rounded-md hover:cursor-pointer"
        >
          <IoMdPhotos size={20} className="text-green-500" />
          <p className="font-semibold text-gray-600">Photo/Video</p>
          <input
            onChange={addImageToPost}
            type="file"
            hidden
            accept="image/*"
            ref={hiddenFileInput}
          />
        </div>
        <div className="flex flex-grow justify-center py-1 space-x-1 items-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <BsEmojiSmile size={20} className="text-yellow-500" />
          <p className="font-semibold text-gray-600">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
