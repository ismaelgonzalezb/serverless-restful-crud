export class Configuration {
  static key(key) {
    if (!process.env[key]) {
      console.error(`Missing key property ${key}`);
      process.exit(1);
    }
    return process.env[key];
  }
}
