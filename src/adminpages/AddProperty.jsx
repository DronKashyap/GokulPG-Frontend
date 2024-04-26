import React, { useState } from 'react';
import axios from 'axios';
import { storage } from '../firebaseconfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function AddProperty() {
  const [formData, setFormData] = useState({
    PgName: '',
    PgLocation: '',
    PrivateRoomPrice: '',
    DoubleSeaterRoomPrice: '',
    TripleSeaterRoomPrice: '',
  });
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      PgName: formData.PgName,
      PgLocation: formData.PgLocation,
      PrivateRoomPrice: formData.PrivateRoomPrice,
      DoubleSeaterRoomPrice: formData.DoubleSeaterRoomPrice,
      TripleSeaterRoomPrice: formData.TripleSeaterRoomPrice,
    };

    try {
      const response = await axios.post('https://gokul-pg-backend.vercel.app/admin/addproperty', formDataToSend, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const propertyId = response.data._id;
      const propertyNumber = response.data.PropertyNumber;

      let imageUrls = [];

      if (files && files.length > 0) {
        imageUrls = await uploadImages(files, propertyNumber);
      }

      // Add imageUrls to formDataToSend
      formDataToSend.ImageUrls = imageUrls;

      // Update the property with imageUrls
      const updatedResponse = await axios.put(`https://gokul-pg-backend.vercel.app/admin/addproperty/${propertyId}`, formDataToSend, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      console.log(updatedResponse.data);
      alert('Property added successfully!');

      setFormData({
        PgName: '',
        PgLocation: '',
        PrivateRoomPrice: '',
        DoubleSeaterRoomPrice: '',
        TripleSeaterRoomPrice: '',
      });
      setFiles([]);
    } catch (error) {
      console.error('Error adding property:', error);
      alert('Error adding property. Please try again.');
    }
  };

  const uploadImages = async (files, propertyNumber) => {
    const uploadPromises = files.map((file) => {
      const imageName = `PG${propertyNumber}_${Date.now()}_${file.name}`;
      const storageRef = ref(storage, imageName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log(`Upload is ${progress}% done`);
          },
          (error) => {
            console.error('Error uploading image:', error);
            reject(error);
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(downloadURL);
            } catch (error) {
              console.error('Error getting download URL:', error);
              reject(error);
            }
          }
        );
      });
    });

    try {
      const imageUrls = await Promise.all(uploadPromises);
      return imageUrls;
    } catch (error) {
      console.error('Error saving image URLs to MongoDB:', error);
      throw error;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Add New Property</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="PgName" className="mb-1">Property Name:</label>
          <input
            type="text"
            id="PgName"
            name="PgName"
            value={formData.PgName}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="PgLocation" className="mb-1">Location:</label>
          <input
            type="text"
            id="PgLocation"
            name="PgLocation"
            value={formData.PgLocation}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="PrivateRoomPrice" className="mb-1">Private Room Price:</label>
          <input
            type="number"
            id="PrivateRoomPrice"
            name="PrivateRoomPrice"
            value={formData.PrivateRoomPrice}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="DoubleSeaterRoomPrice" className="mb-1">Double Seater Room Price:</label>
          <input
            type="number"
            id="DoubleSeaterRoomPrice"
            name="DoubleSeaterRoomPrice"
            value={formData.DoubleSeaterRoomPrice}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="TripleSeaterRoomPrice" className="mb-1">Triple Seater Room Price:</label>
          <input
            type="number"
            id="TripleSeaterRoomPrice"
            name="TripleSeaterRoomPrice"
            value={formData.TripleSeaterRoomPrice}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="photos" className="mb-1">Add Photos:</label>
          <input
            type="file"
            id="photos"
            name="photos"
            onChange={handleFileChange}
            className="p-2 border rounded"
            multiple
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Add Property
        </button>
      </form>
    </div>
  );
}

export default AddProperty;
