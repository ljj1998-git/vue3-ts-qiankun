export interface MockParams {
    url: string;
    type: string;
    data?: any;
    params?: any;
    // eslint-disable-next-line no-unused-vars
    response(option?: any): Record<string, unknown>;
  }
