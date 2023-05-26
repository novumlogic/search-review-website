import dynamic from 'next/dynamic';
import React from 'react'
const ProfileRating = dynamic(() => import('../src/component/ProfileRating'), {ssr: false})

const ProfileRatings = () => {
  return (
    <>
      <ProfileRating/>
    </>
  )
}

export default ProfileRatings
