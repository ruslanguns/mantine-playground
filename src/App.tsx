import {
  AppShell,
  Navbar,
  Header,
  Button,
  ActionIcon,
  Group,
  useMantineColorScheme,
  Burger,
  MediaQuery,
  useMantineTheme,
  Grid,
} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { useState } from 'react';
import { Logo } from './components/Logo';
import { MainLinks } from './components/MainLink';
import { User } from './components/User';
function App() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 300, lg: 300 }}
        >
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} p="md" className="bg-[#99BB4C]">
          <Group sx={{ height: '100%' }} px={20} position="apart">
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[1]}
                mr="xl"
              />
            </MediaQuery>
            <Logo colorScheme={colorScheme} />
            <ActionIcon
              variant="transparent"
              className="text-white font-bold"
              onClick={() => toggleColorScheme()}
              size={30}
            >
              {colorScheme === 'dark' ? (
                <IconSun size={50} />
              ) : (
                <IconMoonStars size={50} />
              )}
            </ActionIcon>
          </Group>
        </Header>
      }
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
    >
      <div className="flex justify-center flex-col items-center h-full bg-red-400">
        <h1 className="m-4 text-white text-6xl font-bold ">Hello world!</h1>

        <p className="m-3 mb-4 text-white mt-2 text-xl">
          desde React & Vite & Tailwind & Mantine...
        </p>

        <Button className="bg-slate-500 text-red-200 hover:bg-slate-600 hover:text-red-300 transition h-12 w-36 text-xl">
          Click me!
        </Button>
      </div>
    </AppShell>
  );
}

export default App;
