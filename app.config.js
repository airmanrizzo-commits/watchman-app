export default {
  expo: {
    name: "watchman-app",
    slug: "watchman-app",
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
      supportsTablet: true,
      bundleIdentifier: "com.firegate.watchman",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false
      }
    },
    extra: {
      eas: {
        projectId: "bf2c35e0-377d-4a5f-8157-86e09abc949f"
      }
    }
  }
};
