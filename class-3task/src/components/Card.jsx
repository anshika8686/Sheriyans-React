import React from "react";
import users from "./users";

const Card = ({userData}) => {
  console.log(userData)
  console.log(userData.fullName)
  return (
    <div className="w-[300px] rounded-2xl bg-white text-black border-1 h-[380px] mx-8 my-8">
      <div className="rounded-2xl w-[280px]  h-[120px] border-[0.5px] bg-cover bg-center mx-2 my-2"
     style={{ backgroundImage: `url(${userData.coverImage})` }}>
     <div className="w-[100px] h-[100px] border-[0.5px] rounded-[50%] mt-14 ml-21"
      style={{ backgroundImage: `url(${userData.profile})` }}>
    </div>  
      </div>

<div className="flex flex-col justify-center items-center gap-1 mt-14">
  <h2 className="text-xl font-bold">
    {userData.fullName}
  </h2>

  <p className="text-sm font-normal text-gray-600">
    {userData.title}
  </p>
</div>
      <div className="flex items-center rounded-2xl bg-gray-200 shadow-xs w-[280px] h-[75px] ml-2 mt-10 justify-around">
        <div className="flex flex-col gap-px">       
          <h5 className="text-xl font-bold"> {userData.likesCount} </h5>
        <p>Likes</p></div>

        <div className="flex flex-col gap-px">
              <h5 className="text-xl font-bold "> {userData.postCount} </h5>
         <p>Post</p>     
        </div>

        <div className="flex flex-col gap-px">
           <h5 className="text-xl font-bold "> {userData.viewsCount} </h5>
         <p>Views</p>
        </div>

       
       

       
      
      </div>

      {userData.followed}
    </div>
  );
};

export default Card;
