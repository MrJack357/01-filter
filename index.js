let pessoas = [
    {nome : 'Roberto', idade: 33},
    {nome : 'Ricardo', idade: 33},
    {nome : 'Thiago', idade: 27}
]

// let pessoaComIdade33Anos = []
// for (let i = 0; i < pessoas.length; i++) {
//     if (pessoas[i].idade === 33) {
//         pessoaComIdade33Anos.push(pessoas[i])
//     }
    
// }

// console.log(pessoaComIdade33Anos);

let pessoaComIdade33Anos = pessoas.filter((pessoa) => pessoa.idade === 33 )


console.log(pessoaComIdade33Anos);
