import Svg, { Circle, ClipPath, Defs, G, Path } from "react-native-svg";
import { useTheme } from "styled-components/native";

const AddImageIcon = ({ opacity, fill, ...props }) => {
  const theme = useTheme();

  return (
    <Svg width={60} height={60} fill="none" {...props}>
      <Circle
        cx={30}
        cy={30}
        r={30}
        fill={theme.colors.white}
        fillOpacity={opacity}
      />
      <G clipPath="url(#a)" fill={fill ?? theme.colors.border}>
        <Path d="M30 33.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
        <Path d="m27 20-1.83 2H22c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V24c0-1.1-.9-2-2-2h-3.17L33 20h-6Zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path
            fill={theme.colors.white}
            transform="translate(18 18)"
            d="M0 0h24v24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default AddImageIcon;
