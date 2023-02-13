import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";
import { useTheme } from "styled-components/native";

const CreatePostsIcon = (props) => {
  const theme = useTheme();

  return (
    <Svg width={70} height={40} fill="none" style={props.style}>
      <G clipPath="url(#a)">
        <Rect width={70} height={40} rx={20} fill={theme.colors.main} />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.5 13.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z"
          fill={theme.colors.white}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h70v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CreatePostsIcon;
