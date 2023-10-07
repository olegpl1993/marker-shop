import { Product } from "@/types";
//import axios, { AxiosResponse } from "axios";

class ApiService {
  private static url = "https://msdrop.com.ua/export/4Oyz/json";

  static async fetchData(): Promise<Product[] | null> {
    // const response: AxiosResponse<Product[]> = await axios.get(this.url);
    // const { data } = response;
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

  static async getData(): Promise<Product[] | null> {
    const data = await this.fetchData();
    return data;
  }

  static async getOneProduct(sku: string): Promise<Product | null | undefined> {
    const data = await this.fetchData();
    const product = data?.find((product) => product.sku === sku);
    return product;
  }
}

export default ApiService;
