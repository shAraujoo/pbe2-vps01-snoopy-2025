const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const { clienteId, data, produto, qtd, preco } = req.body;
        const subTotal = qtd * preco;

        const pedido = await prisma.pedido.create({
            data: { clienteId, data, produto, qtd, preco, subTotal }
        });
        return res.status(201).json(pedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const read = async (req, res) => {
    try {
        const pedidos = await prisma.pedido.findMany({ include: { cliente: true } });
        return res.json(pedidos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { clienteId, data, produto, qtd, preco } = req.body;
        const subTotal = qtd * preco;

        const pedido = await prisma.pedido.update({
            where: { id: Number(req.params.id) },
            data: { clienteId, data, produto, qtd, preco, subTotal }
        });
        return res.status(202).json(pedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        await prisma.pedido.delete({ where: { id: Number(req.params.id) } });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = { create, read, update, remove };