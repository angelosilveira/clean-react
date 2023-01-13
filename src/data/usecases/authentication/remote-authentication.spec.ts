import { HttpClienPostSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

type SutTYpes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpClienPostSpy
}

const makeSut = (url = 'any_url'): SutTYpes => {
  const httpPostClientSpy = new HttpClienPostSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
