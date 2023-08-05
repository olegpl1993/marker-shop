import { Product } from "@/types";
import axios, { AxiosResponse } from "axios";

class ApiService {
  private static data: Product[] | null = null;
  private static url = "https://msdrop.com.ua/export/4Oyz/json";

  static async fetchData(): Promise<void> {
    const response: AxiosResponse<Product[]> = await axios.get(this.url);
    this.data = response.data;
  }

  static async getData(): Promise<Product[] | null> {
    if (!this.data) {
      await this.fetchData();
    }
    return this.data;
  }

  static async getOneProduct(sku: string): Promise<Product | null | undefined> {
    if (!this.data) {
      await this.fetchData();
    }
    return this.data?.find((product) => product.sku === sku);
  }
}

export default ApiService;
