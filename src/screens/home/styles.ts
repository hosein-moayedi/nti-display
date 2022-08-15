import { StyleSheet } from "react-native";
import colors from "../../global-styles/colors";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    backgroundColor: colors.screenBackground,
  },
  clockWrapperView: {
    width: 130,
    height: 130,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    alignSelf: "center",
    width: 230,
    height: 230,
  },
});
