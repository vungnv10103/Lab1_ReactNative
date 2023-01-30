import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";

import React, { Component } from "react";
import CustomListview from "./components/CustomListView";
import Form from "./components/input";

export default class App extends Component {
  /* Return object for populate the list */
  getData() {
    return [
      {
        key: 1,
        title: "Cao đẳng FPT Polytechnic",
        description:
          "Cổng số 1, Tòa nhà FPT Polytechnic, phố Trịnh Văn Bô, phường Phương Canh, quận Nam Từ Liêm, TP Hà Nội",
        image_url: "https://ap.poly.edu.vn/images/logo.png",
      },
      {
        key: 2,
        title: "Android",
        description:
          "Android là một hệ điều hành dựa trên nền tảng Linux được thiết kế dành cho các thiết bị di động có màn hình cảm ứng như điện thoại thông minh và máy tính bảng.",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png",
      },
      {
        key: 3,
        title: "Cao đẳng FPT Polytechnic",
        description:
          "Cổng số 1, Tòa nhà FPT Polytechnic, phố Trịnh Văn Bô, phường Phương Canh, quận Nam Từ Liêm, TP Hà Nội",
        image_url: "https://ap.poly.edu.vn/images/logo.png",
      },
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.text}>Họ tên: Nguyễn Văn Vững</Text>
          <Text style={styles.text}>MSV: PH27864</Text>
        </View>
        <CustomListview itemList={this.getData()} />
        <Form />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  info: {
    marginHorizontal: 35,
    marginTop: 45,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: "red",
  },
  title: {
    fontSize: 16,
    color: "#000",
  },
  container_text: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
    justifyContent: "center",
  },
  description: {
    fontSize: 11,
    fontStyle: "italic",
  },
  photo: {
    height: 50,
    width: 50,
  },
});
