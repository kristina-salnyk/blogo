import { Text } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "../../contexts/Route";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const { setCurrentRouteName } = useRoute();
  const [location, setLocation] = useState(null);
  const [locationString, setLocationString] = useState("");

  useEffect(() => {
    setCurrentRouteName("Map");

    return () => {
      setCurrentRouteName("");
    };
  }, []);

  useEffect(() => {
    setLocation(route.params?.location);
    setLocationString(route.params?.locationString);
  }, [route.params]);

  return (
    <>
      {location && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.006,
          }}
          mapType="standard"
        >
          <Marker
            title={locationString}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        </MapView>
      )}
    </>
  );
};

export default MapScreen;
