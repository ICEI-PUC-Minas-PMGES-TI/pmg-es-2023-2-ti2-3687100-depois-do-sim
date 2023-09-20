### 3.3.5 Processo 5 – ÁLBUM DE FOTOS COMPARTILHÁVEL

Um álbum de fotos compartilhável para um casamento envolve criar um álbum, convidar convidados para enviar fotos e compartilhar as memórias do grande dia de forma interativa.

![diagrama-album-de-fotos](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti2-3687100-depois-do-sim/assets/123561984/d1b00437-e869-4908-97a5-ae75e402cdd4)

#### Detalhamento das atividades

**Carregar e Classificar Mídias:** Esse processo envolve a capacidade de os noivos, convidados, e fotógrafos fazerem o upload de fotos e vídeos para o álbum de casamento. As fotos enviadas são organizadas e classificadas conforme os eventos do casamento, os participantes e outros critérios relevantes. Os usuários podem adicionar etiquetas (tags) às fotos para descrever quem está na foto e o que está acontecendo. Criar uma galeria separada para os momentos mais emocionantes. Permitir que os noivos controlem a privacidade das fotos, decidindo quem pode ver e fazer o download delas.

**Visualizar Todas as Mídias:** Permite que os noivos visualizem tanto as mídias públicas quanto as privadas no álbum de casamento, com a opção de configurar a privacidade de cada mídia.

**Criar e Enviar Link:** Permite que os noivos ou administradores do aplicativo gerem um link exclusivo que pode ser compartilhado com qualquer pessoa. Qualquer pessoa que tenha acesso a esse link pode visualizar o álbum de fotos do casamento, mesmo que não seja um convidado registrado.

**Visualizar Mídias Públicas:** Permite aos convidados acessarem fotos e vídeos públicos compartilhados no álbum. 


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

**Carregar e Classificar Mídias:**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Título da Mídia	 | Caixa de Texto	  |     Nenhum           |     -              |
| Etiquetas  |      Caixa de Texto (lista)	     |       Separação por vírgulas, no máximo 5 etiquetas	         |       -            |
| Data de Captura	           | Data  | Deve ser uma data válida	 |      Data atual          |
| Localização           | Caixa de Texto   | Máximo de 100 caracteres	 |        -   |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Enviar Mídia | Processo de Upload	  | - |
| Adicionar Etiqueta       |              Atividade de Adicionar Etiqueta                  |         -          |
| Configurar Privacidade               | Atividade de Configurar Privacidade              | -           |
| Criar Galeria            | Atividade de Criar Galeria  |         -          |


**Visualizar Todas as Mídias**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Opção de Privacidade	 | Caixa de Seleção	  |       Público/Privado	         |         Público          |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Visualizar Mídias	 | Atividade de Visualização	  | -|
|         Configurar Privacidade	             |             Atividade de Configuração	                   |       -            |


**Criar e Enviar Link**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Link de Compartilhamento		 | Link (ou Caixa de Texto)	  |       -	         |         -          |
| Opções de Privacidade			 | Caixa de Seleção		  |       Público/Privado	         |         Público          |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Gerar Link		 | Atividade de Geração de Link		  | -|
|         Enviar Link		             |             Atividade de Envio de Link		                   |       -            |


**Visualizar Mídias Públicas:**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Nenhum campo necessário		 | -	  |       -         |       -          |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Visualizar Mídias	 | Atividade de Visualização	  | - |
