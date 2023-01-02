import Svg, { Path } from "react-native-svg";

const PostsIcon = (props) => {
  return (
    <Svg width={40} height={40} fill="none" style={props.style}>
      <Path d="M8 8h24v24H8z" />
      <Path
        clipRule="evenodd"
        d="M11 11h7v7h-7v-7ZM22 11h7v7h-7v-7ZM22 22h7v7h-7v-7ZM11 22h7v7h-7v-7Z"
        stroke={props.color}
        strokeOpacity={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PostsIcon;
