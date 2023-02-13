import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components/native";

const LogoutIcon = (props) => {
  const theme = useTheme();

  return (
    <Svg width={24} height={24} fill="none" style={props.style}>
      <Path
        d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5M17 16l4-4-4-4M21 12H9"
        stroke={theme.colors.border}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LogoutIcon;
