import {
  ActionIcon,
  Box,
  Group,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";

import {
  IconPlayerPlayFilled,
  IconSettings,
  IconPlaylistAdd,
  IconPlus,
} from "@tabler/icons-react";

export default function Home() {
  const theme = useMantineTheme();

  return (
    <Group mt="-20px" style={{ flexDirection: "column" }}>
      <Group
        style={{
          backgroundColor: theme.colors.gray[0],
          width: "500px",
          height: "100vh",
          flexDirection: "column",
        }}
        mx="auto"
      >
        <Group position="apart" style={{ width: "100%" }}>
          <ActionIcon color="gray" size="xl" variant="transparent">
            <IconSettings />
          </ActionIcon>
          <ActionIcon color="gray" size="xl" variant="transparent">
            <IconPlaylistAdd />
          </ActionIcon>
        </Group>
        <Group
          spacing="none"
          mt="sm"
          position="center"
          mx="auto"
          style={{ height: "120px", flexDirection: "column" }}
        >
          <Title order={1} style={{ fontWeight: "900", fontSize: "4rem" }}>
            25:00
          </Title>
          <Text>Training the Mantine Lib</Text>
        </Group>
        <Group
          spacing="none"
          mt="sm"
          position="center"
          mx="auto"
          mb="md"
          style={{ flexDirection: "row", height: "20px" }}
        >
          <ActionIcon color="dark" size="xl" variant="transparent">
            -5
          </ActionIcon>
          <ActionIcon color="dark" size="xl" variant="transparent">
            <IconPlayerPlayFilled />
          </ActionIcon>
          <ActionIcon color="dark" size="xl" variant="transparent">
            +5
          </ActionIcon>
        </Group>
        <Group
          my="sm"
          position="center"
          mx="auto"
          style={{ flexDirection: "column", height: "90px" }}
        >
          <UnstyledButton style={{ height: "100%", width: "260px" }}>
            <Group
              spacing="none"
              p="lg"
              mt="sm"
              mx="auto"
              position="center"
              style={{
                flexDirection: "column",
                background: "rgb(238, 238, 238)",
                border: "1px dashed rgb(189, 189, 189)",
              }}
            >
              <Box sx={() => ({ size: "md", radius: "xs" })}>
                <IconPlus style={{ color: "gray" }} />
              </Box>
              <Text variant="light" size="xs" color="gray">
                Add training
              </Text>
            </Group>
          </UnstyledButton>
        </Group>
        <Group
          mx="auto"
          position="right"
          style={{ width: "260px", justifyContent: "space-between" }}
        >
          <Text size="xs">Clear text</Text>
          <Text size="xs">Hide text</Text>
          <Text size="xs">Clear all texts</Text>
        </Group>
      </Group>
    </Group>
  );
}
