import { SHORTENER_BASE_URL } from "./app-const";

export default class UrlShortener {

  private urlMap: Map<string, string> = new Map();


  shortenUrl(longUrl: string): string {
    const shortCode = this.generateShortCode();
    const shortUrl = SHORTENER_BASE_URL + shortCode;
    this.urlMap.set(shortCode, longUrl);
    return shortUrl;
  }

  expandUrl(shortUrl: string): string {
    const shortCode = shortUrl.replace(SHORTENER_BASE_URL, "");
    const longUrl = this.urlMap.get(shortCode);
    return longUrl || "URL not found";
  }

  generateShortCode(): string {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let shortCode = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      shortCode += chars.charAt(randomIndex);
    }

    return shortCode;
  }
}
