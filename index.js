/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import 'react-native-get-random-values';
import {name as appName} from './app.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ThemeProvider from './context/provider/ThemeProvider';
import TranslationProvider from './context/provider/TranslationProvider';
import LocationProvider from './context/provider/LocationProvider';

const Root = () => (
  <GestureHandlerRootView>
    <SafeAreaProvider>
      <ThemeProvider>
        <TranslationProvider>
          <LocationProvider>
            <App />
          </LocationProvider>
        </TranslationProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => Root);
