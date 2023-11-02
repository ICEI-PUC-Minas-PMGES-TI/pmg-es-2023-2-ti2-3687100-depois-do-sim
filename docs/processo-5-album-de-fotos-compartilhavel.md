### 3.3.5 Processo 5 – ÁLBUM DE FOTOS COMPARTILHÁVEL

Um álbum de fotos compartilhável para um casamento envolve criar um álbum, convidar convidados para enviar fotos e compartilhar as memórias do grande dia de forma interativa.

![diagrama-album-de-fotos](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti2-3687100-depois-do-sim/assets/123561984/d1b00437-e869-4908-97a5-ae75e402cdd4)

#### Detalhamento das atividades

**Carregar e classificar mídias:** Esse processo envolve a capacidade de os noivos, convidados, e fotógrafos fazerem o upload de fotos e vídeos para o álbum de casamento. 

**Visualizar mídias:** Permite que os noivos visualizem as mídias.

**Criar e enviar link:** Permite que os noivos ou administradores do aplicativo gerem um link exclusivo que pode ser compartilhado com qualquer pessoa. Qualquer pessoa que tenha acesso a esse link pode visualizar o álbum de fotos do casamento.

**Visualizar mídias Públicas:** Permite aos convidados acessarem fotos e vídeos públicos compartilhados no álbum. 

**Carregar e classificar Mídias:**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Título da Mídia	 | Caixa de Texto	  |     Nenhum           |     -              |
| Mídias           | Imagem ou vídeo   | -	 |        -   |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Enviar Mídia | Processo de Upload	  | - |

**Visualizar mídias**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Mídias           | Imagem ou vídeo   | -	 |        -   |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Visualizar Mídias	 | Atividade de Visualização	  | -|


**Criar e enviar Link**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Link de Compartilhamento		 | Link (ou Caixa de Texto)	  |       -	         |         -          |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
|         Copiar Link		             |             Atividade de Envio de Link		                   |       -            |

