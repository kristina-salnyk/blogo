import { Path, Svg } from "react-native-svg";

const LocationIcon = (props) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M20 10.364C20 16.09 12 21 12 21s-8-4.91-8-10.636C4 6.297 7.582 3 12 3s8 3.297 8 7.364v0Z"
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LocationIcon;
