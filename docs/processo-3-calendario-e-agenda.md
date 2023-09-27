### 3.3.3 Processo 3 – Calendário e agenda

Este processo pode ser melhorado com a implementação de tags coloridas diferentes para distinguir eventos e uma view do calendário diferente para cada fornecedor mostrando seus eventos.

![Calendário e Agenda Diagram](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti2-3687100-depois-do-sim/assets/60365983/63052c12-7872-4c09-91da-0348d3424eff)

#### Detalhamento das atividades

- **Escolher uma data e adiconar um compromisso:** Os noivos adicionam em um calendário todas as datas disponíveis para resolver questões relacionadas ao casamento.

- **Adicioanar compromisso à agenda:** O sistema salva o compromisso no calendário dos noivos e terceiros, caso existam.

- **Receber um pedido de evento:** Os fornecedores são notificados e aceitam ou não o evento. Caso aceitem, é adicionado ao calendário, senão, os noivos são notificados.

- **Receber notificação de falta de disponibilidade** Quando os fornecedores não aceitam um evento, os noivos são notificados através do sistema.

**Escolher uma data e adicionar um compromisso**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Data           | Data e Hora   | Apenas datas futuras | Data atual      |
| Fornecedores           | Seleção única |               |                   |
| Tipo de evento      | Seleção única |               |                   |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Salvar               | Salvar data                    |                   |

As informações abaixo são referentes à uma lista de cards de datas já salvas

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Data           | Caixa de texto   | Apenas datas futuras | Data do evento      |
| Fornecedores           | Caixa de texto |               | Fornecedores do evento       |
| Tipo de evento      | Caixa de texto |               | Tipo do evento cadastrado   |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Editar               | Editar evento                    |                   |
| Excluir               | Excluir evento                    |                   |


**Receber um pedido de evento**

| **Comandos**         |  **Destino**                                   | **Tipo**          |
| ---                  | ---                                            | ---               |
| Aceitar              | Salvar evento                                  |                   |
| Recusar              | Envia falta de disponibilidade pros noivos     |                   |
