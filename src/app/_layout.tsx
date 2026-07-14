import { BugTrackingRoot } from '@ruttl/mobile-sdk';
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    //live projects
    // <BugTrackingRoot
    //   projectID="A8WDdHuCZhJCIrifxHWd"
    //   token="BD7KAqd0O2hhJcSkoF8N8pBZaKS2"
    // >
    <BugTrackingRoot
      projectID="fuWLZseR4GawxhpPJERC"
      token="AQZ6EAkeHnNz0j7huWCssgTMSsd2"
      // projectID="1Ph8tDnytxwZGVyBju7A"
      // token="vsirNGvN31gpoPsNz6YWLk6OFL92"
    >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AnimatedSplashOverlay />
        <AppTabs />
      </ThemeProvider>
    </BugTrackingRoot>
  );
}
