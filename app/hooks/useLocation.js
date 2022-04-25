import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) return;

        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();
        setLocation({ latitude, longitude });
      } catch (error) {
        setError(error.message);
      }
    };

    getLocation();
  }, []);

  return location;
};

export default useLocation;
