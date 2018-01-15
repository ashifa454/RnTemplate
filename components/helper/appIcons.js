import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  "md-add-circle":[50,"#fff"],
  "hotel":[30,'#fff',MaterialCommunityIcons],
  "settings":[30,'#fff',MaterialCommunityIcons],
  "home":[30,"#fff",Octicons],
  "beach":[30,'#fff',MaterialCommunityIcons],
  "search":[25,'#fff',Octicons],
  "share":[25,'#fff',Entypo],
  "notification-clear-all":[25,'#fff',MaterialCommunityIcons],
  "ios-search":[30,'#fff'],
  "sign-out":[25,'#fff',Octicons],
  "user":[25,'#fff',SimpleLineIcons],
  "md-send":[30,'#fff'],
  "airplane":[30,'#fff',MaterialCommunityIcons],
  "md-color-palette":[30,"#fff"],
  "notification":[30,'#fff',Entypo],
  "filter-variant":[30,'#fff',MaterialCommunityIcons],
  "circular-graph":[30,'#fff',Entypo],
  "lifebuoy":[30,'#fff',Entypo],
  "people":[30,'#fff',SimpleLineIcons],
  "ios-chatbubbles":[30,'#fff'],
  "map-marker":[30,'#fff',MaterialCommunityIcons],
  "uber":[30,'#fff',MaterialCommunityIcons],
  "format-text":[30,"#fff",MaterialCommunityIcons],
  "pencil-circle":[30,'#fff',MaterialCommunityIcons],
  "map":[30,'#fff',SimpleLineIcons],
  "car-sports":[30,'#fff',MaterialCommunityIcons],
  "checkbox-marked-circle":[30,'#fff',MaterialCommunityIcons],
  "chevron-right":[30,'#fff',MaterialCommunityIcons],
  "ios-car":[30,'#fff',Ionicons]
}

const defaultIconProvider = Ionicons;

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1]
      )
    })
  ).then(sources => {
    Object.keys(icons)
      .forEach((iconName, idx) => iconsMap[iconName] = sources[idx])

    // Call resolve (and we are done)
    resolve(true);
  })
});

export {
    iconsMap,
    iconsLoaded
};