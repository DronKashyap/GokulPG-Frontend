import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import { BackgroundGradient } from "../Components/ui/Gradientbgcard";
import { useParams } from 'react-router-dom';  // Import useParams

function PropertyInfo() {
  const [property, setProperty] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { id } = useParams();  // Use useParams to get the id

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`https://gokul-pg-backend.vercel.app/properties/${id}`);
        setProperty(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching property');
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://gokul-pg-backend.vercel.app/reviews`);
        setReviews(response.data.slice(0, 5)); // Get latest 5 reviews
      } catch (error) {
        setError('Error fetching reviews');
      }
    };

    fetchProperty();
    fetchReviews();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="container mx-auto p-4 bg-gradient-to-b from-cyan-500 to-white">
      <Navbar />
        <h1 className="text-2xl mb-4 flex justify-center font-extrabold">{property.PgName}</h1>
        <p className='flex justify-center pb-6 '>Location: {property.PgLocation}</p>
       
        <div className='flex flex-col md:flex-row '>
          {property.ImageUrls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Property ${index + 1}`} style={{ width: '200px', margin: '10px' }} className='hover:scale-150 rounded-md overflow-scroll'/>
          ))}
        </div>
        <p className='pt-6'>Private Room Price: Rs. {property.PrivateRoomPrice}</p>
        <p>Double Seater Room Price: Rs. {property.DoubleSeaterRoomPrice}</p>
        <p>Triple Seater Room Price: Rs. {property.TripleSeaterRoomPrice}</p>
      </div>

      <div className="container mx-auto p-4 mt-4 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-medium">{review.author}</h3>
              <p className="text-sm">{review.content}</p>
            </div>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  );
}

export default PropertyInfo;
