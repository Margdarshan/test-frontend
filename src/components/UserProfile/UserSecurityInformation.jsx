import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit, FaSave, FaUndo } from "react-icons/fa";

export const UserSecurityInformation = ({ phone, email }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      phoneNumber: phone,
      email: email,
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (data) => {
    console.log("Security Information Submitted:", data);
    setIsEditing(false);
  };

  return (
    <div className="p-4 rounded-2xl shadow-md bg-white relative w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-[#020D2B]">Security Information</h2>
        {!isEditing ? (
          <FaEdit className="text-purple-500 cursor-pointer" onClick={() => setIsEditing(true)} />
        ) : (
          <div className="flex gap-2">
            <FaSave className="text-blue-500 cursor-pointer" onClick={handleSubmit(onSubmit)} />
            <FaUndo className="text-gray-500 cursor-pointer" onClick={() => { reset(); setIsEditing(false); }} />
          </div>
        )}
      </div>

      <form className="grid grid-cols-1 gap-4">
        <div>
          <label className="block font-medium text-[#333333]">Phone Number</label>
          <input {...register("phoneNumber")} className="w-full p-2 border rounded" disabled={!isEditing} />
        </div>
        <div>
          <label className="block font-medium text-[#333333]">Email</label>
          <input {...register("email")} className="w-full p-2 border rounded" disabled={!isEditing} />
        </div>
      </form>
    </div>
  );
};
export default UserSecurityInformation