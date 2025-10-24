import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    paddingBottom: 40,
  },
  header: {
    width: "100%",
    backgroundColor: "#4B0D0D",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    paddingVertical: 30,
  },
  trevo: {
    width: 100,
    height: 100,
    marginBottom: 15,
    resizeMode: "contain",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  tabText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  form: {
    marginTop: 30,
    width: "85%",
  },
  subtitle: {
    color: "#aaa",
    marginBottom: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    marginBottom: 25,
    paddingVertical: 5,
    fontSize: 16,
    color: "#4B0D0D",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  checkboxText: {
    marginLeft: 8,
    color: "#4B0D0D",
  },
  link: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#4B0D0D",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
