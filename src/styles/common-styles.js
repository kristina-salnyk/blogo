import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    resizeMode: "cover",
    justifyContent: "flex-end",
    flex: 1,
  },

  profileImg: {
    position: "absolute",
    top: -70,
    width: 140,
    height: 140,
    backgroundColor: "#f6f7f8",
    borderRadius: 16,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  link: {
    paddingVertical: 16,
  },
});

export default styles;
