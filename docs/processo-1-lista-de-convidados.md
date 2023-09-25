### 3.3.1 Processo 1 – LISTA DE CONVIDADOS

Este processo pode ser melhorado por meio de uma interface intuitiva, upoload de convites personalizados, lembretes de confirmação, relatórios e estatísticas em tempo real dos convidados convidados, inclusão de opção para convidados informarem restrições alimentares.

![Lista de convidados Diagrama](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti2-3687100-depois-do-sim/assets/130570629/3d250682-ef73-4fa4-bea6-586b293681bb)


#### Detalhamento das atividades

_Os tipos de dados a serem utilizados são:_

_* **Listar convidados e enviar Save the Date** - inserir os dados dos convidados e selecionar o envio do "Save the Date"._

_* **Enviar "Save the Date"** - o sistema envia o Save the Date para todos os convidados cadastrados._

_* **Receber o "Save the Date" e confirmar  presença** - receber o Save the Date e confirmar ou não a presença no evento_

_* **Confirmar confirmados e escolher data para enviar o convite** - os convidados recebem um relatório com os convidados que confirmaram ou não e escolhem uma data para enviar os convites do casamento._

_* **Enviar o convite de casamento** - o convite do casamento é enviado pelo sistema para aqueles que confirmaram o Save the Date_



**Listar convidados e enviar Save the Date**

| **Campo**           | **Tipo**         | **Restrições**                               | **Valor default** |
| ---                 | ---              | ---                                          | ---               |
| Nome do convidado   | Área de texto    | mínimo 1 caractere e máximo 2000 carácteres  |      edit         |
| E-mail do convidado | Área de texto    | mínimo 1 caractere e máximo 2000 carácteres	|      edit         |
| Idade do convidado  | Campo numérico   | mínimo 1 caractere e máximo 2000 carácteres	|      edit         |


| **Comandos**                     |  **Destino**                           | **Tipo**       |                   
| ---                              | ---                                    | ---            | 
| Adicionar convidado              | Transição para a próxima atividade     | default        |                   
| Salvar convidado                 | Lista de convidados                    |   -            |      
| Data de envio de "Save the Date" | Atividade de envio dos "Save the Date" | -              |    

**Receber o "Save the Date" e confirmar  presença**

| **Campo**           | **Tipo**         | **Restrições**                               | **Valor default** |
| ---                 | ---              | ---                                          | ---               |
| Confirmar           | Seleção única    | Verdadeiro ou Falso                          |      null         |

| **Comandos**                     |  **Destino**                           | **Tipo**       |                   
| ---                              | ---                                    | ---            | 
| Enviar Resposta                  | Lista de convidados confirmados        | -              | 

**Confirmar confirmados e escolher data para enviar o convite**

| **Campo**           | **Tipo**         | **Restrições**                               | **Valor default** |
| ---                 | ---              | ---                                          | ---               |
| Nome do convidado   | Indicador        | Verdadeiro ou Falso                          |      NULL, até resposta do convidado       |

| **Comandos**                     |  **Destino**                           | **Tipo**       |                   
| ---                              | ---                                    | ---            |     
| Data de envio dos convites       | Atividade de envio dos convites        | -              |    

