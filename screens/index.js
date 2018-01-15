import { Navigation } from 'react-native-navigation';

import Home from './Home';
import save from './save';
import hotel from './hotel';
import settings from './setting';
import Search from './search';

// register all screens of the app (including internal ones)
export function registerScreens(store,provider) {
  Navigation.registerComponent('RnBoiler.Home', () => Home,store,provider);
  Navigation.registerComponent('RnBoiler.save', () => save,store,provider);
  Navigation.registerComponent('RnBoiler.hotel', () => hotel,store,provider);
  Navigation.registerComponent('RnBoiler.settings',()=>settings,store,provider);
  Navigation.registerComponent('RnBoiler.search',()=>Search,store,provider);
}