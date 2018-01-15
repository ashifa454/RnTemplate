package com.rnboiler;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.aakashns.reactnativedialogs.ReactNativeDialogsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
     public boolean isDebug() {
         // Make sure you are using BuildConfig from your own application
         return BuildConfig.DEBUG;
     }
     protected List<ReactPackage> getPackages() {
         // Add additional packages you require here
         // No need to add RnnPackage and MainReactPackage
         return Arrays.<ReactPackage>asList(
             // eg. new VectorIconsPackage()
             new VectorIconsPackage(),
             new ReactNativeDialogsPackage()
         );
     }
    @Override
     public List<ReactPackage> createAdditionalReactPackages() {
         return getPackages();
     }
  /*private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactNativeDialogsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage  false);
  }*/
}
