import { HttpPostClient } from '../../protocols/http/http-post-client'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClientl: HttpPostClient
  ) {}

  async auth(): Promise<void> {
    await this.httpClientl.post(this.url)
  }
}
