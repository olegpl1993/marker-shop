import { Product } from "@/types";
import axios, { AxiosResponse } from "axios";

class ApiService {
  private static data: Product[] | null = null;
  private static url = "https://msdrop.com.ua/export/4Oyz/json";
  private static requestCounter = 0;
  private static cacheInvalidationNumber = 10;

  static async fetchData(): Promise<void> {
    console.log("Fetching data...");
    const response: AxiosResponse<Product[]> = await axios.get(this.url);
    this.data = response.data;
  }

  static async invalidateCache(): Promise<void> {
    console.log("Invalidating cache...");
    this.data = null;
    this.requestCounter = 0;
  }

  static async getData(): Promise<Product[] | null> {
    const jsonString = JSON.stringify(this.data);
    const byteSize = new TextEncoder().encode(jsonString).length;
    const mbSize = (byteSize / (1024 * 1024)).toFixed(2);
    console.log(`Cache data: ${this.data?.length} Cache size: ${mbSize} MB`);

    console.log("getData Getting data...", this.requestCounter);
    if (this.requestCounter >= this.cacheInvalidationNumber) {
      await this.invalidateCache();
    }
    if (!this.data) {
      await this.fetchData();
    }
    return this.data;
  }

  static async getOneProduct(sku: string): Promise<Product | null | undefined> {
    const jsonString = JSON.stringify(this.data);
    const byteSize = new TextEncoder().encode(jsonString).length;
    const mbSize = (byteSize / (1024 * 1024)).toFixed(2);
    console.log(`Cache data: ${this.data?.length} Cache size: ${mbSize} MB`);

    console.log("getOneProduct Getting data...", this.requestCounter);
    if (this.requestCounter >= this.cacheInvalidationNumber) {
      await this.invalidateCache();
    }
    if (!this.data) {
      await this.fetchData();
    }
    this.requestCounter++;
    return this.data?.find((product) => product.sku === sku);
  }
}

export default ApiService;
