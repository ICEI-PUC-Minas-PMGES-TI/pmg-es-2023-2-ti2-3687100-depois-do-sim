### 3.3.2 Processo 2 – LISTA DE PRESENTES

Este processo pode ser melhorado por meio de um sistema de envio de agradecimentos aos presentes, opções de presentes virtuais como contribuições monetárias, informar o link de acesso à lista de presentes no convite do casamento.

![Lista de presentes Diagrama (1)](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti2-3687100-depois-do-sim/assets/130570629/c6f7acf5-32ce-46af-a93c-8030103e1f8f)


#### Detalhamento das atividades

_**Cadastrar presentes:** os noivos podem cadastrar os presentes desejados_

_**Vizualizar e escolher presentes:** os convidados podem escolher um presente que eles desejam da lista dos noivos e marcar como presentar._

_**Adicionar recado:** uma tela de pop up aparece para inserir uma mensagem para os noivos._

_**Tirar presente da view dos convidados:** view dos convidados é atualizada._

_**Receber relatório de presentes:** os noivos recebem uma lista dos presentes escolhidos pelos convidados e as mensagens enviadas._

_Os tipos de dados a serem utilizados são:_

_* **Área de texto** - campo texto de múltiplas linhas_

_* **Caixa de texto** - campo texto de uma linha_

_* **Número** - campo numérico_

_* **Data** - campo do tipo data (dd-mm-aaaa)_

_* **Hora** - campo do tipo hora (hh:mm:ss)_

_* **Data e Hora** - campo do tipo data e hora (dd-mm-aaaa, hh:mm:ss)_

_* **Imagem** - campo contendo uma imagem_

_* **Seleção única** - campo com várias opções de valores que são mutuamente exclusivas (tradicional radio button ou combobox)_

_* **Seleção múltipla** - campo com várias opções que podem ser selecionadas mutuamente (tradicional checkbox ou listbox)_

_* **Arquivo** - campo de upload de documento_

_* **Link** - campo que armazena uma URL_

_* **Tabela** - campo formado por uma matriz de valores_

**Nome da atividade 1**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
| nome do presente   |caixa de texto   |  mínimo 1 caractere e máximo 2000 carácteres            |                   |
| Link do presente           | link   |  |                |
| Adicionar recado          | Caixa de Texto   | mínimo 1 caractere |           |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
| Escolher presente             | View dos noivos             |           |
| cadastrar            | Início do proceso de cadastro  |                   |


