import { Circle, Path, Svg } from "react-native-svg";
import { useTheme } from "styled-components/native";

const DeleteIcon = (props) => {
  const theme = useTheme();

  return (
    <Svg width={37} height={37} fill="none" {...props}>
      <Circle
        cx={18.5}
        cy={18.5}
        r={12}
        transform="rotate(-45 18.5 18.5)"
        fill={theme.colors.white}
        stroke={theme.colors.border}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m14.257 13.55-.707.707 4.243 4.243-4.243 4.243.707.707 4.243-4.243 4.243 4.243.707-.707-4.243-4.243 4.243-4.243-.707-.707-4.243 4.243-4.243-4.243Z"
        fill={theme.colors.border}
      />
    </Svg>
  );
};

export default DeleteIcon;
