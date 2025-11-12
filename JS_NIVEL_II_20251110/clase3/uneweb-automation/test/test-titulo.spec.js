// 1. Importar las funciones de Playwright Test
import { test, expect } from '@playwright/test';
// 2. Definir una prueba con 'test'
// La función de callback debe ser 'async' porque contiene operaciones 'await'.
test('Verificar el título de la página de Playwright', async ({ page }) => {
// === ACCIÓN 1: Navegación Asíncrona ===
// 'await' espera a que la promesa de navegación se resuelva
await page.goto('https://playwright.dev/');
// === ACCIÓN 2: Obtener el Título de la Página Asíncrona ===
// 'await' espera a que se recupere el título.
const titulo = await page.title();
// === ACCIÓN 3: Verificación (Assertion) ===
// Playwright incluye sus propias aserciones 'web-first'
// 3.1. Usando la aserción de Playwright (Recomendado)
// El 'toHaveTitle' automáticamente reintenta y espera a que el título coincida.
await expect(page).toHaveTitle(/Playwright/);
// 3.2. Verificación de JavaScript tradicional (funciona, pero menos potente)
// expect(titulo).toContain('Playwright');
console.log(`El título de la página es: ${titulo}`);
}); // Fin de la prueba