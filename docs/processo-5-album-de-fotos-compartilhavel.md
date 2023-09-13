### 3.3.5 Processo 5 – ÁLBUM DE FOTOS COMPARTILHÁVEL

Um álbum de fotos compartilhável para um casamento envolve criar um álbum, convidar convidados para enviar fotos e compartilhar as memórias do grande dia de forma interativa.

![WhatsApp Image 2023-09-13 at 09 39 08](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti2-3687100-depois-do-sim/assets/130570629/43049ca7-0129-49c0-b8ce-de6204ae35df)


#### Detalhamento das atividades

Upload de Fotos: Esse processo envolve a capacidade de os noivos, convidados, e fotógrafos fazerem o upload de fotos e vídeos para o álbum de casamento.

Organização e Classificação de Fotos: As fotos enviadas são organizadas e classificadas conforme os eventos do casamento, os participantes e outros critérios relevantes. Os usuários podem adicionar etiquetas (tags) às fotos para descrever quem está na foto e o que está acontecendo. Criar uma galeria separada para os momentos mais emocionantes, como a troca de votos ou o primeiro beijo, destacando essas imagens.

Controle de Privacidade: Permita que os noivos controlem a privacidade das fotos, decidindo quem pode ver e fazer o download delas.

Geração de Link de Compartilhamento: Essa funcionalidade permite que os noivos ou administradores do aplicativo gerem um link exclusivo que pode ser compartilhado com qualquer pessoa. Qualquer pessoa que tenha acesso a esse link pode visualizar o álbum de fotos do casamento, mesmo que não seja um convidado registrado.

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
