import { expect, test, coverage } from 'vitest'
import { sayHello, esTuMajeur } from './hello'

test('Cas de démarrage #1 - Dire bonjour avec un prénom', () => {
  expect(sayHello("Laïla")).toBe("Bonjour, Laïla !")
})

test('Cas Mineur·e', () => {
	expect(esTuMajeur(10)).toBe(false);
  })