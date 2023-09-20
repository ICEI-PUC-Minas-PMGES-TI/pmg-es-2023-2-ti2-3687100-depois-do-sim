### 3.3.1 Processo 1 – LISTA DE CONVIDADOS

Este processo pode ser melhorado por meio de uma interface intuitiva, upoload de convites personalizados, lembretes de confirmação, relatórios e estatísticas em tempo real dos convidados convidados, inclusão de opção para convidados informarem restrições alimentares.

![Lista de convidados Diagrama](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti2-3687100-depois-do-sim/assets/130570629/3d250682-ef73-4fa4-bea6-586b293681bb)


#### Detalhamento das atividades

_Os tipos de dados a serem utilizados são:_

_* **Listar convidados e enviar Save the Date"** - inserir os dados dos convidados e selecionar o envio do "Save the Date"._

_* **Enviar "Save the Date"** - o sistema envia o Save the Date para todos os convidados cadastrados._

_* **Receber o "Save the Date" e confirmar  presença** - receber o Save the Date e confirmar ou não a presença no evento_

_* **Confirmar confirmados e escolher data para enviar o convite** - os convidados recebem um relatório com os convidados que confirmaram ou não e escolhem uma data para enviar os convites do casamento._

_* **Enviar o convite de casamento** - o convite do casamento é enviado pelo sistema para aqueles que confirmaram o Save the Date_

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
| Nome do convidado | área de texto   | mínimo 1 caractere e máximo 2000 carácteres	               |                   |
| telefone do convidado       | número   | aceita somente números|                |


| **Comandos**            |  **Destino**                  | **Tipo**       |                   
| ---                     | ---                           | ---            | 
| confirmar presença      | relatório de confirmados      | bool true      |                   
| não confirmar presença  | relatório de não confirmadors | bool false     |                   

