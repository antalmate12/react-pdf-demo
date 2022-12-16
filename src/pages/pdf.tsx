import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { styles } from "./pdf-styles";

// Create styles

const PDF = () => {
  const dummy = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <Document>
      <Page wrap size="A4" style={styles.page}>
        <View fixed style={styles.header}>
          <Text>Header</Text>
        </View>

        <View fixed style={styles.footer}>
          <Text>Footer</Text>
        </View>

        <View style={styles.pageNumber} fixed>
          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </View>

        <View debug style={styles.dummyTable}>
          <View style={styles.tableHeader}>
            <Text style={{ textAlign: "left", flexBasis: "30%" }}>
              Header 1
            </Text>
            <Text style={{ textAlign: "left", flexBasis: "30%" }}>
              Header 2
            </Text>
            <Text style={{ textAlign: "left", flexBasis: "30%" }}>
              Header 3
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={{ textAlign: "left", flexBasis: "30%" }}>Row 1</Text>

            <Text style={{ textAlign: "left", flexBasis: "30%" }}>
              Row 2 fdskljghpoiurhgoiudrfhgőiör ői jheiothg őáöi
            </Text>

            <Text style={{ textAlign: "left", flexBasis: "30%" }}>
              Row 3 dskufhiou rwh ég9owro
            </Text>
          </View>
        </View>

        {/* <Image
          style={{ height: 200, width: 200 }}
          src={"https://placekitten.com/200"}
        /> */}

        <View style={styles.section}>
          {dummy.map((item, index) => (
            <Text key={index}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              quisquam harum aspernatur nulla quia? Animi iure obcaecati amet
              accusantium voluptates accusamus suscipit, esse sunt aspernatur
              possimus molestias neque saepe consequuntur?
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
