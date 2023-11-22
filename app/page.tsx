'use client'

export default function Home() {

var tabela = ["", "", "", "", "", "", "", "", ""]
var jogador = "X"


function marcar(celula:number) {

  if (tabela[celula]) return

    tabela[celula] = jogador
    if (jogador == "X") {
        jogador = "O"
    } else {
        jogador = "X"
    }
    render()
    ganhador()
}



function render() {
  
  if (typeof document !== 'undefined') {
    let tds = document.querySelectorAll("td")
   
    for (let indice = 0; indice < tabela.length; indice++) {
      tds[indice].innerHTML = tabela[indice]
    }
  } 

}

render()

function ganhador() {
   

  var ganhou = "Parabéns, Você Venceu!!!"


  
  //Linhas
  if(tabela[0] == tabela[1] && tabela[0] == tabela[2] && tabela[0] != ""){
      alert(ganhou)
  } 
  
  if (tabela[3] == tabela[4] && tabela[3] == tabela[5] && tabela[3] != ""){
      alert(ganhou)
  }
  
  if (tabela[6] == tabela[7] && tabela[6] == tabela[8] && tabela[6] != ""){
      alert(ganhou)
  }

  //Colunas
  if (tabela[0] == tabela[3] && tabela[0] == tabela[6] && tabela[0] != ""){
      alert(ganhou)
  }

  if (tabela[1] == tabela[4] && tabela[1] == tabela[7] && tabela[1] != ""){
      alert(ganhou)
  }

  if (tabela[2] == tabela[5] && tabela[2] == tabela[8] && tabela[2] != ""){
      alert(ganhou)
  }


  //de lado (Esqueci o nome)

  if (tabela[0] == tabela[4] && tabela[0] == tabela[8] && tabela[0] != ""){
      alert(ganhou)
  }

  if (tabela[2] == tabela[4] && tabela[2] == tabela[6] && tabela[2] != ""){
      alert(ganhou)
  }


  

 console.log(tabela)
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
            
            <h1>Jogo da Velha</h1>
            

            <table>
              <tbody>

                <tr>
                    <td onClick={() => marcar(0)}></td>
                    <td onClick={() => marcar(1)}></td>
                    <td onClick={() => marcar(2)}></td>
                </tr>
                <tr>
                    <td onClick={() => marcar(3)}></td>
                    <td onClick={() => marcar(4)}></td>
                    <td onClick={() => marcar(5)}></td>
                </tr>
                <tr>
                    <td onClick={() => marcar(6)}></td>
                    <td onClick={() => marcar(7)}></td>
                    <td onClick={() => marcar(8)}></td>
                </tr>
              </tbody>
            </table>
        </div>

    </main>
  )
}
