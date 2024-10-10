import React from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createStyles, padding, margin } from "@/styles";

const Page = ({
  children,
  scrollable = true,
  style,
  contentContainerStyle,
}) => {
  const ContentWrapper = scrollable ? ScrollView : View;

  let topContent, mainContent, bottomContent;

  return (
    <SafeAreaView style={[styles.container, style]}>
      {topContent && <View style={styles.topContent}>{topContent}</View>}
      <ContentWrapper
        style={styles.content}
        contentContainerStyle={[
          scrollable && { flexGrow: 1 },
          contentContainerStyle,
        ]}
      >
        {mainContent}
      </ContentWrapper>
      {bottomContent && (
        <View style={styles.bottomContent}>{bottomContent}</View>
      )}
    </SafeAreaView>
  );
};

const styles = createStyles({
  container: {
    flex: 1,
    flexGrow: 1,
    padding: padding.lg,
    justifyContent: "space-between",
  },
  topContent: {
    width: "100%",
    marginTop: margin.sm,
  },
  bottomContent: {
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: margin.sm,
  },
});

export default Page;
