### 3.3.3 Processo 3 – Calendário e agenda

Este processo pode ser melhorado com a implementação de tags coloridas diferentes para distinguir eventos e uma view do calendário diferente para cada fornecedor mostrando seus eventos.
![Calendário e Agenda Diagram](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti2-3687100-depois-do-sim/assets/130570629/09c14cec-68ec-4638-ad10-3010a649fa28)

#### Detalhamento das atividades

- **Cadastro inicial de datas disponíveis:** Os noivos adicionam em um calendário todas as datas disponíveis para resolver questões relacionadas ao casamento.

- **Compartilhar agenda com os fornecedores:** O sistema compartilha a agenda dos noivos com os fornecedores cadastrados.

- **Fornecedores marcam em uma data que os noivos estão disponíveis:** O fornecedor marca um evento em uma data livre na agenda dos noivos.

- **Pedir para os noivos aceitarem nova data:** Quando os fornecedores não acham uma data livre na agenda dos noivos que os atenda, solicita que eles abram uma exceção em determinada data.

- **Aceitação dos noivos à nova data:** Quando uma nova data é solicitada, cabe aos noivos aceitar ou não, se aceitarem, a data fica disponível para os fornecedores, senão, uma resposta é enviada aos fornecedores que precisam escolher uma nova data até que a mesma seja aceita.

- **Notificação aos noivos de evento marcado:** Quando os fornecedores criam um evento em data disponível, os noivos são notificados e o evento aparece na agenda.


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
| ***Exemplo:***  |                  |                |                   |
| login           | Caixa de Texto   | formato de e-mail |                |
| senha           | Caixa de Texto   | mínimo de 8 caracteres |           |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
| ***Exemplo:***       |                                |                   |
| entrar               | Fim do Processo 1              | default           |
| cadastrar            | Início do proceso de cadastro  |                   |


**Nome da atividade 2**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
|                 |                  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
|                      |                                |                   |
