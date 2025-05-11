import React from 'react'
import AvatarName from '../../core/avatarGroup/AvatarName'

const UserAvatar = ({ name, phone, userId }) => {
  return (
    <div className="p-4 rounded-2xl shadow-md bg-white relative min-w-44">
      <div className='flex justify-center gap-3'>
        <AvatarName authorName={name} />
      </div>
      <div className='flex-row gap-4'>
        <h1 className='text-xl text-submit font-bold text-center py-2'>{name}</h1>
        <p className='text-sm text-center my-2'>{phone}</p>
        <p className='text-sm text-center'>{userId}</p>
      </div>
    </div>
  )
}

export default UserAvatar