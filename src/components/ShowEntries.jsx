import React from 'react'
import Image from 'next/image'
const getData = async () => {

  try {
    const response = await fetch(process.env.URI, { cache: "no-store" });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};



/* getData()
    .then(data => {
        // Haz algo con los datos obtenidos
        console.log("Datos obtenidos:", data);
    })
    .catch(error => {
        // Maneja errores generales
        console.error("Error en la obtención de datos:", error);
    });
 */



const ShowEntries = async () => {
  /*   const [entries,SetEntries] = useState({}) */
  const data = await getData()

  console.log(data)
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.autor}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  )
}

export default ShowEntries