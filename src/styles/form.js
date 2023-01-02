import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    flex: 0.7,
  },
  registerForm: {
    paddingTop: 86,
  },
  fieldsContainer: {
    width: "100%",
    flex: 1,
  },
  fields: {
    paddingVertical: 16,
    flexDirection: "column",
    width: "100%",
  },
  field: {
    position: "relative",
  },
  input: {
    marginBottom: 8,
    fontSize: 16,
    backgroundColor: "#f6f7f8",
  },
  inputControl: {
    position: "absolute",
    right: 16,
    top: Platform.OS === "ios" ? 23 : 21,
    justifyContent: "center",
    zIndex: 1,
  },
  btn: {
    marginTop: 32,
    marginBottom: 8,
    paddingVertical: Platform.OS === "ios" ? 16 : 12,
    backgroundColor: "#FF6C00",
    borderRadius: 8,
    elevation: 3,
    alignItems: "center",
  },
  btnTitle: {
    fontSize: 18,
    color: "#fff",
  },
});

export default styles;
