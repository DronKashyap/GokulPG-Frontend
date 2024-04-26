import React from 'react'

function Map() {
  return (
    <div className='p-10 m-5 flex justify-center'>
      <iframe className='rounded-3xl'
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.054282012299!2d77.38645597550062!3d28.62813517566716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzQxLjMiTiA3N8KwMjMnMjAuNSJF!5e0!3m2!1sen!2sin!4v1713802875838!5m2!1sen!2sin"
      width="1600"
      height="600"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Google Maps"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
  )
}
// https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.054282012299!2d77.38645597550062!3d28.62813517566716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzQxLjMiTiA3N8KwMjMnMjAuNSJF!5e0!3m2!1sen!2sin!4v1713802875838!5m2!1sen!2sin

export default Map