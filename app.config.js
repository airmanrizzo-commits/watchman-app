export default {
  cli: {
    version: ">= 3.13.0"
  },
  build: {
    production: {
      ios: {
        image: "macos-xcode16",
        buildType: "release",
        developmentClient: false
      }
    }
  },
  submit: {
    production: {
      ios: {
        ascAppId: "6749645144",
        appleId: "airmanrizzo@gmail.com",
        appleTeamId: "929SGJRZLK",
        companyName: "FireGate Bioscience LLC"
      }
    }
  },
  extra: {
    eas: {
      projectId: "bf2c35e0-377d-4a5f-8157-86e09abc949f"
    }
  }
};
