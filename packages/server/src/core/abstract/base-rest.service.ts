export abstract class BaseRestService {
  abstract getOne?: (...args: any[]) => Promise<any>;
  abstract getAll?: (...args: any[]) => Promise<any>;
  abstract create?: (...args: any[]) => Promise<any>;
  abstract update?: (...args: any[]) => Promise<any>;
  abstract delete?: (...args: any[]) => Promise<any>;
  abstract search?: (...args: any[]) => Promise<any>;
}
