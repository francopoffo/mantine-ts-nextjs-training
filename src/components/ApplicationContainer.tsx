import { AppShell, Footer, Group, Header, Text } from "@mantine/core";
import React from "react";

const ApplicationContainer: React.FC<{ children: JSX.Element }> = (props) => {
  return (
    <AppShell
      styles={{
        main: {
          background: "#FFFFFF",
          width: "100vw",
          height: "100vh",
          paddingLeft: "0px",
        },
      }}
      fixed
      footer={
        <Footer height={60} p="md">
          <Group position="apart" spacing="xl">
            <Text size="sm" style={{ fontWeight: "bolder" }}>
              <span>List Time:</span> 0h 25m
            </Text>
            <Text size="sm" style={{ fontWeight: "bolder" }}>
              <span>End Time:</span> 7:51pm
            </Text>
          </Group>
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Text size="lg" weight="bolder">
              Alpacca Activity
            </Text>
          </div>
        </Header>
      }
    >
      {props.children}
    </AppShell>
  );
};

export default ApplicationContainer;
