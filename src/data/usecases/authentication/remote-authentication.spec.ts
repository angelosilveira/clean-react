import { HttpClienPostSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'
import { faker } from '@faker-js/faker'

type SutTYpes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpClienPostSpy
}

const makeSut = (url = faker.internet.url()): SutTYpes => {
  const httpPostClientSpy = new HttpClienPostSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
