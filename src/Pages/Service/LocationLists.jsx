import { FaMapMarker } from 'react-icons/fa';

function LocationList() {
  const locations = [
    { name: 'San Diego', id: 1, lat: 23.3717062, lng: 90.7708186 },
    { name: 'San Antonio', id: 2, lat: 23.3717062, lng: 90.7708186 },
    { name: 'Philadelphia', id: 3, lat: 23.3717062, lng: 90.7708186 },
    { name: 'Phoenix', id: 4, lat: 23.3717062, lng: 90.7708186 },
    { name: 'Houston', id: 5, lat: 23.3717062, lng: 90.7708186 },
    { name: 'Chicago', id: 6, lat: 23.3717062, lng: 90.7708186 },
    { name: 'Miami Florida', id: 7, lat: 23.3717062, lng: 90.7708186 },
    { name: 'Denver co', id: 8, lat: 23.3717062, lng: 91.7708186 },
    
  ];

  const openGoogleMapsDirections = (location) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = `${position.coords.latitude},${position.coords.longitude}`;
        const destination = `${location.lat},${location.lng}`;
        const zoomLevel = 17;
        const googleMapsUrl = `https://www.google.com/maps/dir/${userLocation}/${destination}?z=${zoomLevel}`;
        window.open(googleMapsUrl);
      });
    } else {
      alert("Geolocation is not supported in your browser.");
    }
  };

  return (
    <div className="p-4">
    <ul className=" flex flex-col items-center gap-4">
        {locations.map((location) => (
            <li
                key={location.id}
                className="flex lg:min-w-[800px] items-center justify-center  p-3 cursor-pointer hover:shadow-md"
                onClick={() => openGoogleMapsDirections(location)}
            >
<div className='flex items-center justify-between'>                <span className="text-blue-500 text-xl font-bold">{location.name}</span>
                <FaMapMarker className="text-gray-600" /></div>
            </li>
        ))}
    </ul>
</div>
  );
}

export default LocationList;
