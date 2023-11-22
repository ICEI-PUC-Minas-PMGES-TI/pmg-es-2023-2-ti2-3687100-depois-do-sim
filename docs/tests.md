| **Caso de Teste** | CT01 - Cadastrar presente |
| :--------------: | ------------ |
| **Procedimento** | Cadastrar novo presente. |
| **Dados de entrada** | Inserção de dados válidos no formulário de cadastro de presente. |
| **Resultado obtido** | Presente cadastrado com sucesso. |
| **Teste associado** | `GiftTest.testNewGift()` |

| **Caso de Teste** | CT02 - Visualizar presentes cadastrados |
| :--------------: | ------------ |
| **Procedimento** | Acessar a tela de visualização de presentes. |
| **Dados de entrada** | Navegar até a tela de presentes cadastrados. |
| **Resultado obtido** | Lista de presentes exibida corretamente na tela. |
| **Teste associado** | `GiftTest.testViewGifts()` |

| **Caso de Teste** | CT03 - Presentear um presente |
| :--------------: | ------------ |
| **Procedimento** | Clicar no botão "presentear" associado a um presente específico. |
| **Dados de entrada** | Seleção de um presente disponível e clique no botão "presentear". |
| **Resultado obtido** | O presente fica indisponível para outros usuários presentearem, e a transação é registrada corretamente. |
| **Teste associado** | `GiftTest.testGiveGift()` |

| **Caso de Teste** | CT04 - Tentar presentear um presente indisponível |
| :--------------: | ------------ |
| **Procedimento** | Clicar no botão "presentear" associado a um presente que já foi presenteado. |
| **Dados de entrada** | Seleção de um presente já presenteado e clique no botão "presentear". |
| **Resultado obtido** | Exibição de uma mensagem informando que o presente não está disponível para presentear. |
| **Teste associado** | `GiftTest.testTryToGiftUnavailableGift()` |

| **Caso de Teste** | CT05 - Cadastrar convidado |
| :--------------: | ------------ |
| **Procedimento** | Cadastrar novo convidado. |
| **Dados de entrada** | Inserção de dados válidos no formulário de cadastro de convidado. |
| **Resultado obtido** | Convidado cadastrado com sucesso. |
| **Teste associado** | `GuestTest.testNewGuest()` |

| **Caso de Teste** | CT06 - Visualizar lista de convidados |
| :--------------: | ------------ |
| **Procedimento** | Acessar a tela de visualização da lista de convidados. |
| **Dados de entrada** | Navegar até a tela de lista de convidados cadastrados. |
| **Resultado obtido** | Lista de convidados exibida corretamente na tela. |
| **Teste associado** | `GuestTest.testViewGuestList()` |

| **Caso de Teste** | CT07 - Aprovar cadastro de convidado |
| :--------------: | ------------ |
| **Procedimento** | Clicar no botão "aceitar" associado a um convidado específico. |
| **Dados de entrada** | Seleção de um convidado pendente de aprovação e clique no botão "aceitar". |
| **Resultado obtido** | O convidado é adicionado à lista de convidados aceitos. |
| **Teste associado** | `GuestTest.testApproveGuest()` |

| **Caso de Teste** | CT08 - Rejeitar cadastro de convidado |
| :--------------: | ------------ |
| **Procedimento** | Clicar no botão "excluir" associado a um convidado específico. |
| **Dados de entrada** | Seleção de um convidado pendente de aprovação e clique no botão "excluir". |
| **Resultado obtido** | O convidado é removido do banco de dados, não sendo incluído na lista de convidados. |
| **Teste associado** | `GuestTest.testRejectGuest()` |

| **Caso de Teste** | CT09 - Cadastrar tarefa no calendário |
| :--------------: | ------------ |
| **Procedimento** | Cadastrar nova tarefa com data e hora no calendário. |
| **Dados de entrada** | Inserção de dados válidos no formulário de cadastro de tarefa. |
| **Resultado obtido** | Tarefa cadastrada com sucesso no calendário. |
| **Teste associado** | `CalendarTest.testNewTask()` |

| **Caso de Teste** | CT10 - Adicionar e-mail do usuário fornecedor |
| :--------------: | ------------ |
| **Procedimento** | Adicionar o e-mail do usuário fornecedor associado a uma tarefa. |
| **Dados de entrada** | Inserção do e-mail do usuário fornecedor na tarefa correspondente. |
| **Resultado obtido** | E-mail do usuário fornecedor associado à tarefa com sucesso. |
| **Teste associado** | `CalendarTest.testAddSupplierEmail()` |

| **Caso de Teste** | CT11 - Visualizar tarefas cadastradas |
| :--------------: | ------------ |
| **Procedimento** | Acessar a tela de visualização de tarefas cadastradas no calendário. |
| **Dados de entrada** | Navegar até a tela de visualização de tarefas. |
| **Resultado obtido** | Lista de tarefas exibida corretamente na tela. |
| **Teste associado** | `CalendarTest.testViewTasks()` |

| **Caso de Teste** | CT12 - Enviar e-mail de aviso ao fornecedor |
| :--------------: | ------------ |
| **Procedimento** | Cadastrar a tarefa adicionando o email do fornecedor |
| **Dados de entrada** | Inserir o email do fornecedor no formulário |
| **Resultado obtido** | E-mail de aviso enviado com sucesso ao fornecedor da tarefa. |
| **Teste associado** | `CalendarTest.testSendNotificationEmail()` |

| **Caso de Teste** | CT13 - Visualizar Lista de Fornecedores |
| :--------------: | ------------ |
| **Procedimento** | Acessar a tela de visualização da lista de fornecedores. |
| **Dados de entrada** | Navegar até a tela de lista de fornecedores cadastrados. |
| **Resultado obtido** | Lista de fornecedores exibida corretamente na tela. |
| **Teste associado** | `SupplierTest.testViewSupplierList()` |

| **Caso de Teste** | CT14 - Escolher Fornecedor |
| :--------------: | ------------ |
| **Procedimento** | Selecionar um fornecedor da lista disponível. |
| **Dados de entrada** | Clicar no fornecedor desejado na tela de lista de fornecedores. |
| **Resultado obtido** | Fornecedor escolhido com sucesso. |
| **Teste associado** | `SupplierTest.testChooseSupplier()` |

| **Caso de Teste** | CT15 - Cadastrar Despesa |
| :--------------: | ------------ |
| **Procedimento** | Cadastrar uma nova despesa. |
| **Dados de entrada** | Inserção de dados válidos, como descrição e valor da despesa. |
| **Resultado obtido** | Despesa cadastrada com sucesso. |
| **Teste associado** | `ExpenseTest.testRegisterExpense()` |

| **Caso de Teste** | CT16 - Visualizar Total de Despesas |
| :--------------: | ------------ |
| **Procedimento** | Acessar a tela de visualização do total de despesas. |
| **Dados de entrada** | Navegar até a tela de detalhes das despesas e visualizar o total. |
| **Resultado obtido** | Total das despesas exibido corretamente na tela. |
| **Teste associado** | `ExpenseTest.testViewTotalExpenses()` |

| **Caso de Teste** | CT17 - Adicionar Foto ao Display |
| :--------------: | ------------ |
| **Procedimento** | Adicionar uma nova foto ao display da tela. |
| **Dados de entrada** | Inserção de um link válido de uma foto para ser exibida. |
| **Resultado obtido** | Foto adicionada com sucesso ao display. |
| **Teste associado** | `PhotoTest.testAddPhotoToDisplay()` |

| **Caso de Teste** | CT18 - Visualizar Display com Fotos |
| :--------------: | ------------ |
| **Procedimento** | Acessar a tela de visualização do display de fotos. |
| **Dados de entrada** | Navegar até a tela de display de fotos cadastradas. |
| **Resultado obtido** | Display exibindo corretamente as fotos adicionadas. |
| **Teste associado** | `PhotoTest.testViewPhotoDisplay()` |

| **Caso de Teste** | CT19 - Gerar Link Compartilhável |
| :--------------: | ------------ |
| **Procedimento** | Gerar um link para compartilhar o display de fotos. |
| **Dados de entrada** | Clicar no botão de geração de link compartilhável. |
| **Resultado obtido** | Link gerado com sucesso para compartilhar o display de fotos. |
| **Teste associado** | `LinkTest.testGenerateShareableLink()` |

| **Caso de Teste** | CT20 - Abrir Display a partir do Link |
| :--------------: | ------------ |
| **Procedimento** | Acessar o display de fotos a partir de um link compartilhado. |
| **Dados de entrada** | Abrir o link compartilhado em um navegador. |
| **Resultado obtido** | Display de fotos aberto corretamente a partir do link. |
| **Teste associado** | `LinkTest.testOpenDisplayFromLink()` |

| **Caso de Teste** | CT21 - Adicionar Comentário ao Fornecedor |
| :--------------: | ------------ |
| **Procedimento** | Adicionar um novo comentário a um fornecedor. |
| **Dados de entrada** | Inserção de um comentário válido no formulário de avaliação. |
| **Resultado obtido** | Comentário adicionado com sucesso na página do fornecedor. |
| **Teste associado** | `ReviewTest.testAddCommentToSupplier()` |

| **Caso de Teste** | CT22 - Adicionar Avaliação ao Fornecedor |
| :--------------: | ------------ |
| **Procedimento** | Adicionar uma nova avaliação (quantidade de estrelas) a um fornecedor. |
| **Dados de entrada** | Seleção de uma quantidade de estrelas no formulário de avaliação. |
| **Resultado obtido** | Avaliação adicionada com sucesso na página do fornecedor. |
| **Teste associado** | `ReviewTest.testAddRatingToSupplier()` |

| **Caso de Teste** | CT23 - Visualizar Comentários do Fornecedor |
| :--------------: | ------------ |
| **Procedimento** | Acessar a tela de visualização dos comentários de um fornecedor. |
| **Dados de entrada** | Navegar até a tela de detalhes do fornecedor e visualizar os comentários. |
| **Resultado obtido** | Comentários do fornecedor exibidos corretamente na tela. |
| **Teste associado** | `ReviewTest.testViewSupplierComments()` |

| **Caso de Teste** | CT24 - Visualizar Avaliação Média do Fornecedor |
| :--------------: | ------------ |
| **Procedimento** | Acessar a tela de visualização da avaliação média de um fornecedor. |
| **Dados de entrada** | Navegar até a tela de detalhes do fornecedor e visualizar a média das avaliações. |
| **Resultado obtido** | Avaliação média do fornecedor exibida corretamente na tela. |
| **Teste associado** | `ReviewTest.testViewSupplierAverageRating()` |

| **Caso de Teste** | CT25 - Cadastrar Casamento |
| :--------------: | ------------ |
| **Procedimento** | Cadastrar um novo casamento. |
| **Dados de entrada** | Inserção de dados válidos, como nome do casamento e orçamento disponível. |
| **Resultado obtido** | Casamento cadastrado com sucesso. |
| **Teste associado** | `WeddingTest.testRegisterWedding()` |

| **Caso de Teste** | CT26 - Cadastrar Noivo |
| :--------------: | ------------ |
| **Procedimento** | Cadastrar um novo usuário como noivo. |
| **Dados de entrada** | Inserção de dados válidos no formulário de cadastro de noivo. |
| **Resultado obtido** | Noivo cadastrado com sucesso no banco de dados. |
| **Teste associado** | `UserTest.testRegisterGroom()` |

| **Caso de Teste** | CT27 - Cadastrar Fornecedor |
| :--------------: | ------------ |
| **Procedimento** | Cadastrar um novo usuário como fornecedor. |
| **Dados de entrada** | Inserção de dados válidos no formulário de cadastro de fornecedor. |
| **Resultado obtido** | Fornecedor cadastrado com sucesso no banco de dados. |
| **Teste associado** | `UserTest.testRegisterSupplier()` |

| **Caso de Teste** | CT28 - Login do Usuário |
| :--------------: | ------------ |
| **Procedimento** | Realizar o login de um usuário registrado. |
| **Dados de entrada** | Inserir as credenciais válidas do usuário no formulário de login. |
| **Resultado obtido** | Usuário autenticado com sucesso no sistema. |
| **Teste associado** | `UserTest.testUserLogin()` |



## Avaliação dos Testes de Software

_Discorra sobre os resultados do teste, ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes._

## Testes das funções JavaScript (Opcional)

_Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele poderá desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas no front-end. Para conhecer sobre testes em JavaScript, leia o documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/)._

