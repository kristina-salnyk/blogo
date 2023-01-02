import Svg, { Path } from "react-native-svg";

const ProfileIcon = (props) => {
  return (
    <Svg width={40} height={40} fill="none" style={props.style}>
      <Path
        d="M28 29v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2"
        stroke={props.color}
        strokeOpacity={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M20 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke={props.color}
        strokeOpacity={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ProfileIcon;
