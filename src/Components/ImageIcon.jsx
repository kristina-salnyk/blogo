import Svg, { Circle, Path } from "react-native-svg";
import { StyleSheet } from "react-native";

const ImageIcon = () => {
  return (
    <Svg style={styles.icon} width={25} height={25} fill="none">
      <Circle cx={12.5} cy={12.5} r={12} stroke="#FF6C00" />
      <Path
        fill="#FF6C00"
        fillRule="evenodd"
        d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ImageIcon;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 100,
    left: 125,
  },
});
