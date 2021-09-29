export declare global {
  interface Window {
    gtag: (config: string, target_id: string, parameters?: any) => void;
  }
}
