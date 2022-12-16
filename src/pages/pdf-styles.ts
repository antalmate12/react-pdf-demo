import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 140,
    paddingBottom: 140,
    fontSize: 16,
    margin: 0,
  },
  section: {
    // margin: 10,
    // padding: 10,
    // flexGrow: 1,
  },
  pageNumber: {
    // bottom of every page, centered
    position: "absolute",
    fontSize: 12,
    bottom: 16,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#0e0e0e",
  },
  header: {
    // top of every page, centered
    position: "absolute",
    fontSize: 12,
    top: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#0e0e0e",

    height: "100px",
    backgroundColor: "red",
  },
  footer: {
    // bottom of every page, centered, top of pageNumber
    position: "absolute",
    fontSize: 12,
    bottom: 32,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#0e0e0e",

    height: "100px",
    backgroundColor: "red",
  },
  dummyTable: {
    // make a material design table
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "left",
    flexGrow: 0,
    flexShrink: 0,

    //  material style border
    border: "1px solid #d1d1d1",
    borderRadius: "4px",
    // material style padding
    padding: "8px",

    // material style shadow
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",

    marginBottom: 16,
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "left",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "left",
    flexGrow: 0,
    flexShrink: 0,
  },
});
