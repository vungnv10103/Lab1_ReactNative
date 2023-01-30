import { StyleSheet } from "react-native";

import color from "../contain/color";

const styles = StyleSheet.create({
  addTaskNew: {
    margin: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  addTask: {
    bottom: 30,
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 44,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: color.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 2,
  },
  iconWallpaper: {
    width: 45,
    height: 45,
    backgroundColor: color.square,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: color.square,
    marginLeft: 10,
  },
  iconAdd: {
    fontSize: 32,
    color: "white",
  },
});

export default styles;
