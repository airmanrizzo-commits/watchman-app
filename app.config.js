export default () => ({
  expo: {
    name: "Watchman",
    slug: "watchman",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      bundleIdentifier: "com.firegatebioscience.watchman"
    },
    android: {
      package: "com.firegate.watchman"
    },
    web: {
      favicon: "./assets/favicon.png"
    }
  }
});
