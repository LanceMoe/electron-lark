import path, { PlatformPath } from 'path';

class Configuration {
  path: PlatformPath;
  rootDir: string;
  iconDir: string;
  icon128: string;
  dock32: string;
  dock32Empty: string;

  constructor() {
    this.path = path;
    this.rootDir = path.join(__dirname, '../');
    this.iconDir = path.join(this.rootDir, 'icon/');
    this.icon128 = path.join(this.iconDir, '/128.png');
    this.dock32 = path.join(this.iconDir, '/dock/32.png');
    this.dock32Empty = path.join(this.iconDir, '/dock/32empty.png');
  }
}

export default new Configuration();
