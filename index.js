/*
Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 
O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes 
esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 
O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente 
ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e
 mostra na tela o nome do paciente consultado, e “Sair”. 
O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

let opcao = ''
let fila = []

do{
    let pacientes = []
    for (let i = 0; i < fila.length; i++ ){
        pacientes += ( i + 1 ) + 'º ' + fila[i] + '\n'
    }
    
    opcao = prompt('Lista de espera: \n' + pacientes + '\n1 - Novo Paciente\n2 - Consultar Paciente\n3 - Sair')

    switch (opcao){
        case '1':
            const paciente = prompt('Digite o nome do paciente: ')
            fila.push(paciente)
            break
        case '2':
            let consultado = fila.shift()
            if(!consultado){
                alert('Não há pacientes na fila')
            }else{
                alert(consultado + ' foi removido da fila')
            }
            break
        case '3':
            alert('Saindo do programa')
            break
        default:
            alert('Opção inválida')
            break

    }

}while (opcao !=3)