### 3.3.1 Processo 1 – LISTA DE CONVIDADOS

Este processo pode ser melhorado por meio de uma interface intuitiva, upoload de convites personalizados, lembretes de confirmação, relatórios e estatísticas em tempo real dos convidados convidados, inclusão de opção para convidados informarem restrições alimentares.

![Lista de convidados Diagrama](images/lista_de_convidados.png)


#### Detalhamento das atividades

_Os tipos de dados a serem utilizados são:_

_* **Listar convidados e enviar Save the Date** - inserir os dados dos convidados e selecionar o envio do "Save the Date"._

_* **Enviar "Save the Date"** - o sistema envia o Save the Date para todos os convidados cadastrados._

_* **Receber o "Save the Date" e confirmar  presença** - receber o Save the Date e confirmar ou não a presença no evento_

_* **Confirmar confirmados e escolher data para enviar o convite** - os convidados recebem um relatório com os convidados que confirmaram ou não e escolhem uma data para enviar os convites do casamento._

_* **Enviar o convite de casamento** - o convite do casamento é enviado pelo sistema para aqueles que confirmaram o Save the Date_



**Fazer upload do convite**

| **Campo**           | **Tipo**         | **Restrições**                               | **Valor default** |
| ---                 | ---              | ---                                          | ---               |
| imagem do convite   | Campo de texto    | url  |      null         |                       	|      edit         |


| **Comandos**                     |  **Destino**                           | **Tipo**       |                   
| ---                              | ---                                    | ---            | 
| Adicionar convite              | Fim da tarefa     |         |                   

**Enviar o formulário de cadastro**

| **Campo**           | **Tipo**         | **Restrições**                               | **Valor default** |
| ---                 | ---              | ---                                          | ---               |
| Confirmar           | Seleção única    | Verdadeiro ou Falso                          |      null         |

| **Comandos**                     |  **Destino**                           | **Tipo**       |                   
| ---                              | ---                                    | ---            | 
| Enviar Resposta                  | Lista de convidados confirmados        | -              | 

**Cadastrar quem comparecerá**

| **Campo**           | **Tipo**         | **Restrições**                               | **Valor default** |
| ---                 | ---              | ---                                          | ---               |
| Nome do convidado   | Indicador        | Verdadeiro ou Falso                          |      NULL, até resposta do convidado       |

| **Comandos**                     |  **Destino**                           | **Tipo**       |                   
| ---                              | ---                                    | ---            |     
| Data de envio dos convites       | Atividade de envio dos convites        | -              |    

