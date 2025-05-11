/* eslint-disable react/prop-types */
import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

export default function OtpMessageItem({ subject, content, category, onEdit, onDelete }) {
    const getCategoryStyle = () => {
        switch (category) {
            case 'Personalized':
                return 'bg-yellow-200 text-yellow-700';
            case 'New User':
                return 'bg-blue-100 text-blue-600';
            case 'Login':
                return 'bg-green-200 text-green-700';
            default:
                return 'bg-slate-500 text-slate-700';
        }
    };

    const handleDelete = () => {
        if (window.confirm('This action will delete the OTP message. Are you sure you want to proceed?')) {
            onDelete();
        }
    };

    return (
        <div className="min-w-[100%] lg:min-w-[25%] lg:max-w-[25%] rounded-lg overflow-hidden border border-gray-300 m-4 flex flex-col">
            <div className="px-6 py-4 flex-grow">
                <div className="font-bold mb-2">Subject: {subject}</div>
                <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
            <div className="px-6 pb-4 flex justify-between items-center space-x-2">
                <p className={`text-sm px-3 py-1 rounded-full ${getCategoryStyle()}`}>{category}</p>
                <div className="flex space-x-2">
                    <button 
                        className="bg-slate-200 hover:bg-red-300 text-slate-600 hover:text-red-600 font-bold p-3 rounded-full"
                        onClick={handleDelete}
                    >
                        <MdDelete />
                    </button>
                    <button 
                        className="bg-slate-200 hover:bg-blue-200 text-slate-600 font-bold hover:text-blue-600 p-3 rounded-full"
                        onClick={onEdit}
                    >
                        <MdModeEditOutline />
                    </button>
                </div>
            </div>
        </div>
    );
}
