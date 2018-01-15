import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import {iconsMap, iconsLoaded} from './components/helper/appIcons';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './app/reducers';

const loggerMiddleware=createLogger({predicate:(getState,action)=>__DEV__});

function configureStore(initialStore){
    const enhancer=compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
    return createStore(reducer,initialStore,enhancer);
}
const store=configureStore({

});
registerScreens(store,Provider);
iconsLoaded.then(() => {
    startApp();
});
function startApp(){
    Navigation.startTabBasedApp({
      tabs: [
        {
          label:'Home',
          screen:'RnBoiler.Home',
          icon: iconsMap['home'],
          title: 'RN Boiler',
        },{
          label:'Explore',
          screen:'RnBoiler.search',
          icon: iconsMap['circular-graph'],
          title: 'Places',
        },
        {
          label:'Save',
          screen:'RnBoiler.save',
          icon: iconsMap['lifebuoy'],
          title:'Pooling '
        },{
          label:'Hotels',
          screen:'RnBoiler.hotel',
          icon: iconsMap['hotel'],
          title: 'Hotels',
        },
        {
          label:'Profile',
          screen:'RnBoiler.settings',
          icon: iconsMap['user'],
          title: 'Profile',
        }
      ],
      animationType:'fade',
      appStyle: {
        tabBarBackgroundColor: '#1F1F1F',
        tabBarButtonColor: '#E6E6E6',
        tabBarSelectedButtonColor: '#FAFAFA',
        tabBarTranslucent: false,
        initialTabIndex:0,
        keepStyleAcrossPush:false
      },
      passProps:{iconMap:iconsMap}
    });
}