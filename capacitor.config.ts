import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'appaliadas.aliadas.co',
  appName: 'aliadas_front',
  webDir: 'dist/aliadas_front',
  server: {
    androidScheme: 'https'
  }
,
    android: {
       buildOptions: {
          keystorePath: 'c:\Users\Mauricio Murcia\Desktop\APP-ALIADAS\key.aliadas.jks',
          keystoreAlias: 'key0',
       }
    }
  };

export default config;
