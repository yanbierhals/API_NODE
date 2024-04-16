const { consultar } = require('../service/produto_service');

describe('Testes para o método consultar', () => {
  test('Deve retornar um erro ao receber ID igual a 0', async () => {
    const id = 0;

    // Use `expect` para verificar se a função lança um erro
    await expect(consultar(id)).rejects.toThrow();
  });

  test('Deve retornar um erro ao receber ID null', async () => {
    const id = null;

    // Use `expect` para verificar se a função lança um erro
    await expect(consultar(id)).rejects.toThrow();
  });
});
