export default {
  expo: {
    name: "Watchman App",
    slug: "watchman-app",
    version: "1.0.0",
    orientation: "portrait",
    jsEngine: "hermes",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#000000"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.firegate.watchman"
    },
    android: {
      package: "com.firegate.watchman",
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#000000"
      }
    },
    web: {
      favicon: "./assets/icon.png"
    }
  }
}
