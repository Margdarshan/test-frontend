import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit, FaSave, FaUndo } from "react-icons/fa";

export const GeneralInformation = ({ firstName, lastName, stateName, studentClass }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
      state: stateName,
      class: studentClass,
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (data) => {
    console.log("General Information Submitted:", data);
    setIsEditing(false);
  };

  return (
    <div className="p-4 rounded-2xl shadow-md bg-white relative w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-[#020D2B]">General Information</h2>
        {!isEditing ? (
          <FaEdit className="text-purple-500 cursor-pointer" onClick={() => setIsEditing(true)} />
        ) : (
          <div className="flex gap-2">
            <FaSave className="text-blue-500 cursor-pointer" onClick={handleSubmit(onSubmit)} />
            <FaUndo className="text-gray-500 cursor-pointer" onClick={() => { reset(); setIsEditing(false); }} />
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium text-[#333333]">First Name</label>
          <input {...register("firstName")} className="w-full p-2 border rounded" disabled={!isEditing} />
        </div>
        <div>
          <label className="block font-medium text-[#333333]">Last Name</label>
          <input {...register("lastName")} className="w-full p-2 border rounded" disabled={!isEditing} />
        </div>
        <div>
          <label className="block font-medium text-[#333333]">Coutry</label>
          <input {...register("state")} className="w-full p-2 border rounded" disabled={!isEditing} />
        </div>
        <div>
          <label className="block font-medium text-[#333333]">Class</label>
          <input {...register("class")} className="w-full p-2 border rounded" disabled={!isEditing} />
        </div>
      </form>
    </div>
  );
}

export default GeneralInformation;