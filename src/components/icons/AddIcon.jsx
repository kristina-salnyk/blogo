import Svg, { Circle, Path } from "react-native-svg";
import { useTheme } from "styled-components/native";

const AddIcon = (props) => {
  const theme = useTheme();

  return (
    <Svg width={25} height={25} fill="none" {...props}>
      <Circle cx={12.5} cy={12.5} r={12} stroke={theme.colors.main} />
      <Path
        fill={theme.colors.main}
        fillRule="evenodd"
        d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default AddIcon;
