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
        appleId: "airmanrizzo@gmail.com",
        appleTeamId: "929SG7RZLK",
        appStoreConnect: {
          appleId: "6749645144"
        },
        companyName: "FireGate Bioscience LLC"
      }
    }
  }
};
