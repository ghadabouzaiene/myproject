import React from 'react'
import { useState } from 'react';
import Title from '../comps/Title';
import UploadForm from '../comps/UploadForm';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';


const UserProfile = () => {

  const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div>
<h1>Profile</h1>
<Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}      
  </div>
    )
}

export default UserProfile
