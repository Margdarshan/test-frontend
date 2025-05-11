/* eslint-disable react/prop-types */
import React from 'react';

const CategoryInput = ({ categoryMessage, handleCategoryInput, handleAddCategory }) => (
    <div className='my-2 flex items-center'>
        <div className='flex-grow'>
            <label htmlFor="new-category" className="block px-1 text-sm font-medium leading-6 text-[#344767]">
                Add New Category
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="text"
                    name="new-category"
                    id="new-category"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="New Category"
                    value={categoryMessage}
                    onChange={handleCategoryInput}
                />
            </div>
        </div>
        <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-sm ml-2 mt-7"
            onClick={handleAddCategory}
        >
            Add Category
        </button>
    </div>
);

export default CategoryInput;
