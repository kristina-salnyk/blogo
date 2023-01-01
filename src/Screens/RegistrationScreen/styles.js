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
  form: {
    paddingTop: 100,
    paddingBottom: 32,
    paddingHorizontal: 16,
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    flex: 0.65,
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
  fields: {
    paddingTop: 32,
    flexDirection: "column",
    width: "100%",
  },
  field: {
    position: "relative",
  },
  input: {
    marginBottom: 16,
    paddingVertical: Platform.OS == "ios" ? 16 : 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#f6f7f8",
    borderColor: "#e5e5e5",
    borderWidth: 1,
    borderRadius: 8,
  },
  inputControl: {
    position: "absolute",
    right: 16,
    top: Platform.OS == "ios" ? 18 : 16,
  },
  btn: {
    marginBottom: 16,
    paddingVertical: Platform.OS == "ios" ? 16 : 12,
    backgroundColor: "#FF6C00",
    borderRadius: 8,
    elevation: 3,
    alignItems: "center",
  },
  btnTitle: {
    fontSize: 18,
    color: "#fff",
  },
  link: {
    paddingVertical: 16,
  },
});

export default styles;
