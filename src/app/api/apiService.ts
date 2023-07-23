import { Product } from '@/types';
import axios, { AxiosResponse } from 'axios';

class ApiService {
  private static data: Product[] | null = null;
  private static url = 'https://msdrop.com.ua/export/4Oyz/json';

  static async fetchData(): Promise<void> {
    const response: AxiosResponse<Product[]> = await axios.get(this.url);
    this.data = response.data;
  }

  static getData(): Product[] | null {
    return this.data;
  }
}

export default ApiService;
