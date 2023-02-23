import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { useTheme } from "styled-components/native";

const DeletePostsIcon = (props) => {
  const theme = useTheme();

  return (
    <Svg width={70} height={40} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Rect width={70} height={40} rx={20} fill={theme.colors.input} />
        <Path
          d="M26 14h18"
          stroke={theme.colors.border}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M42.5 14a.5.5 0 0 0-1 0h1Zm-14 0a.5.5 0 0 0-1 0h1Zm2 0a.5.5 0 0 0 1 0h-1Zm8 0a.5.5 0 0 0 1 0h-1Zm3 0v14h1V14h-1Zm0 14a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5h-1ZM40 29.5H30v1h10v-1Zm-10 0a1.5 1.5 0 0 1-1.5-1.5h-1a2.5 2.5 0 0 0 2.5 2.5v-1ZM28.5 28V14h-1v14h1Zm3-14v-2h-1v2h1Zm0-2a1.5 1.5 0 0 1 1.5-1.5v-1a2.5 2.5 0 0 0-2.5 2.5h1Zm1.5-1.5h4v-1h-4v1Zm4 0a1.5 1.5 0 0 1 1.5 1.5h1A2.5 2.5 0 0 0 37 9.5v1Zm1.5 1.5v2h1v-2h-1Z"
          fill={theme.colors.border}
        />
        <Path
          d="M33 19v6M37 19v6"
          stroke={theme.colors.border}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={theme.colors.white} d="M0 0h70v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default DeletePostsIcon;
