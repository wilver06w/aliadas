import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'aliadas-front',
  webDir: 'dist/aliadas_front/',
  plugins: {
    FacebookConnect: {
      appId: "1413009566077245",
      appName: "Aliadas APP"
    }
  }
};

export default config;
