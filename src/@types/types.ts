// Types
export interface ApiResponse<T> {
  status: {
    elapsed: number;
    timestamp: Date;
  }
  data: T;
}