"use client"
import React, { useRef, useState } from 'react'
import classes from './image-picker.module.css';
import Image from 'next/image'
function ImagePicker({label, name}) {
  const uploadRef = useRef(null);
  const [pickedImage, setPickedImage] =  useState()
  const handleImagePick = (event) => {
    console.log(uploadRef);
    uploadRef.current.click()
    
  };
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPickedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage && <Image alt='sdgfg' src={pickedImage} fill/>
          }
          {!pickedImage && <p>No image chosen yet!</p>}
        </div>
        <input onChange={handleImageChange} ref={uploadRef} className={classes.input} type="file" name={name} id={name} accept='image/png, image/jpg' />
        <button onClick={handleImagePick} className={classes.button} type='button'>
          Pick an Image
        </button>
      </div>
    </div>
  )
}

export default ImagePicker
