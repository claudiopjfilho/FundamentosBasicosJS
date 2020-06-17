const produtos =[
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad', preco:4199, fragil: true},
    {nome: 'Copo de vidro', preco:12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 19.99, fragil: false}
]

const pFragil = produtos => produtos.fragil == true
const pCaros = produtos => produtos.preco >= 2000

console.log(produtos.filter(pFragil).filter(pCaros))

