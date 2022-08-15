import { StyleSheet } from "react-native";
import colors from "../../global-styles/colors";

export const styles = StyleSheet.create({
  cardView: {
    width: "93%",
    borderRadius: 10,
    shadowOffset: { height: 5, width: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    paddingHorizontal: 10,
    elevation: 7,
    paddingVertical: 20,
    backgroundColor: colors.cardBoard,
    alignItems: 'center',
    justifyContent: 'center'
  },
  border: {
    backgroundColor: colors.border,
    height: 1,
    width: "95%",
    marginBottom: 10,
  },
  recordWrapperView: {
    flexDirection: "row",
    width: "95%",
    height: 40,
    alignItems: "center",
  },
  columnWrapperView: {
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    flex: 1,
    marginHorizontal: 25,
    backgroundColor: colors.border,
    height: 1,
  },
  headerWrapperView: {
    flexDirection: "row",
    width: "95%",
    // height: 40,
    alignItems: "center",
    justifyContent: 'space-between'
  }
});
