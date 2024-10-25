const { consultar } = require('../service/produto_service');




describe('Testes para o método consultar', () => {
    test('Deve retornar um erro ao receber ID igual a 0', async () => {
        const id = 0;

        // Verifique se a função lança um erro com a mensagem esperada
        await expect(consultar(id)).rejects.toThrow(`Id inválido: ${id}`);
    });

    test('Deve retornar um erro ao receber ID null', async () => {
        const id = null;

        // Verifique se a função lança um erro com a mensagem esperada
        await expect(consultar(id)).rejects.toThrow(`Id inválido: ${id}`);
    });
});
