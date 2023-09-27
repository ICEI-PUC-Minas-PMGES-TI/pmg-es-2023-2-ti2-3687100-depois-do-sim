### 3.3.2 Processo 2 – LISTA DE PRESENTES

Este processo pode ser melhorado por meio de um sistema de envio de agradecimentos aos presentes, opções de presentes virtuais como contribuições monetárias, informar o link de acesso à lista de presentes no convite do casamento.

![Lista de presentes Diagrama (1)](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti2-3687100-depois-do-sim/assets/130570629/c6f7acf5-32ce-46af-a93c-8030103e1f8f)


#### Detalhamento das atividades

_**Cadastrar presentes:** os noivos podem cadastrar os presentes desejados_

_**Vizualizar e escolher presentes:** os convidados podem escolher um presente que eles desejam da lista dos noivos e marcar como presentar._

_**Adicionar recado:** uma tela de pop up aparece para inserir uma mensagem para os noivos._

_**Tirar presente da view dos convidados:** view dos convidados é atualizada._

_**Receber relatório de presentes:** os noivos recebem uma lista dos presentes escolhidos pelos convidados e as mensagens enviadas._


**Cadastrar Presente**

| **Campo**              | **Tipo**         | **Restrições** | **Valor default** |
| ---                    | ---              | ---            | ---               |
| Foto do presente       |       image      |  -             |-
| Nome do presente       |caixa de texto    |  mínimo 1 caractere e máximo 2000 carácteres        |                   |
| Link do presente       | link             |                 |                |
| Descrição do presente  | Caixa de Texto   | mínimo 1 caractere |           |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Cadastrar Presente   | Cadastro do presente           |           |
| Salvar Presente      | Adiciona presente na view dos convidados  |                   |

**Vizualizar Presente**
| **Campo**              | **Tipo**         | **Restrições** | **Valor default** |
| ---                    | ---              | ---            | ---               |
| Foto do presente       |       image      |  -             |-                  |
| Nome do presente       |caixa de texto    |  mínimo 1 caractere e máximo 2000 carácteres        |                   |
| Link do presente       | link             |                 |                |
| Descrição do presente  | Caixa de Texto   | mínimo 1 caractere |           |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Escolher Presente    | View de presentes escolhidos dos noivos |           |

**Adicionar Recado**

| **Campo**              | **Tipo**         | **Restrições** | **Valor default** |
| ---                    | ---              | ---            | ---               |
| Recado                 |   caixa de texto    |  mínimo 1 caractere e máximo 2000 carácteres        |                |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Enviar Recado  | View de presentes escolhidos dos noivos |           |
