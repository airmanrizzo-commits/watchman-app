{
  "cli": {
    "version": ">= 3.0.0"
  },
  "build": {
    "production": {
      "developmentClient": false,
      "distribution": "internal",
      "env": {
        "EXPO_PUBLIC_SECRET_KEY": "your-secret-key-here",
        "API_URL": "https://your-api-url-here.com"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
