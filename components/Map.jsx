import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ address }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      if (!google.maps) {
        console.error("Google Maps JS not loaded.");
        return;
      }

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results[0]) {
          const map = new google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: 14,
          });

          new google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
        } else {
          console.error("Geocode failed:", status);
        }
      });
    }).catch((err) => {
      console.error("Failed to load Google Maps:", err);
    });
  }, [address]);

  return <div ref={mapRef} className="w-full h-full" />;
}

export default Map;
