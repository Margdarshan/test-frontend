import React, { useState } from 'react';
import UserItem from './UserItem';

export default function User() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [users, setUsers] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddUser = () => {
        if (username && password && role) {
            if (editIndex !== null) {
                const updatedUsers = [...users];
                updatedUsers[editIndex] = { username, password, role };
                setUsers(updatedUsers);
                setEditIndex(null);
            } else {
                setUsers([...users, { username, password, role }]);
            }
            setUsername('');
            setPassword('');
            setRole('');
        } else {
            alert('Username, password, and role are required.');
        }
    };

    const handleEditUser = (index) => {
        setUsername(users[index].username);
        setPassword(users[index].password);
        setRole(users[index].role);
        setEditIndex(index);
    };

    const handleDeleteUser = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className='rounded-xl my-7 py-5 bg-white container mx-auto px-6'>
                <h6 className='text-[#344767] font-bold'>Add New User</h6>
                <div className='my-2'>
                    <label htmlFor="username" className="block px-1 text-sm font-medium leading-6 text-[#344767]">
                        Username <span className="text-red-600">*</span>
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            placeholder="Username" 
                            required 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className='my-2'>
                    <label htmlFor="password" className="block px-1 text-sm font-medium leading-6 text-[#344767]">Password</label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input 
                            type="text" 
                            name="password" 
                            id="password" 
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            placeholder="Password" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className='my-2'>
                    <label htmlFor="role" className="block px-1 text-sm font-medium leading-6 text-[#344767]">
                        Role <span className="text-red-600">*</span>
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <select
                            name="role"
                            id="role"
                            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="" disabled>Select Role</option>
                            <option value="Admin">Admin</option>
                            <option value="Blog">Blog</option>
                            <option value="OTP">OTP</option>
                        </select>
                    </div>
                </div>
                <div className='my-4'>
                    <button 
                        type="button" 
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-sm mr-2"
                        onClick={handleAddUser}
                    >
                        {editIndex !== null ? 'Update' : 'Add'}
                    </button>
                    <button 
                        type="reset" 
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-sm"
                        onClick={() => { setUsername(''); setPassword(''); setRole(''); setEditIndex(null); }}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div className='rounded-xl my-7 py-5 bg-white container mx-auto px-6'>
                <h6 className='text-[#344767] font-bold'>User List</h6>
                <div className='flex flex-wrap'>
                    {users.map((user, index) => (
                        <UserItem 
                            key={index} 
                            username={user.username} 
                            password={user.password} 
                            role={user.role}
                            onEdit={() => handleEditUser(index)}
                            onDelete={() => handleDeleteUser(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
