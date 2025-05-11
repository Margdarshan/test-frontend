/* eslint-disable react/prop-types */
import React from 'react';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';

export default function UserItem({ username, password, role, onEdit, onDelete }) {
    const getRoleStyle = () => {
        switch (role) {
            case 'Admin':
                return 'bg-red-200 text-red-700';
            case 'Blog':
                return 'bg-blue-200 text-blue-700';
            case 'OTP':
                return 'bg-green-200 text-green-700';
            default:
                return 'bg-gray-200 text-gray-700';
        }
    };

    const handleDelete = () => {
        if (window.confirm('This action will delete the user. Are you sure you want to proceed?')) {
            onDelete();
        }
    };

    return (
        <div className="min-w-[100%] lg:min-w-[25%] lg:max-w-[25%] rounded-lg overflow-hidden border border-gray-300 m-4 flex flex-col">
            <div className="px-6 py-4 flex-grow">
                <div className="font-bold mb-2">Username: {username}</div>
                <div className="text-gray-700 text-base mb-2">Password: {password}</div>
            </div>
            <div className="px-6 pb-4 flex justify-between items-center space-x-2">
                <p className={`text-sm px-3 py-1 rounded-full ${getRoleStyle()}`}>{role}</p>
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
