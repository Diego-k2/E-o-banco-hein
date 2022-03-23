# Atualização de Funções 

O projeto abaixo se resume em um sistema semelhante ao de um banco porem foi dado um 
código inicial e eu tive que fazer algumas alterações com o intuito de trazer mais segurança e 
trazer para proximo da realidade.
As alterações foram:

<ul>
  <li>Ao acessar o sistema, pergunte o nome do usuário e diga "Olá {Nome} é um prazer ter você por aqui!".</li>
  <li>Sempre que o usuário for sacar dinheiro, o valor restante não pode ser negativo, ou seja, caso o usuário tente sacar 
mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".</li>
  <li>Sempre que o usuário for sacar dinheiro, o valor a ser sacado não pode ser igual ou menor a zero. 
Exiba uma mensagem de "Operação não autorizada".</li>
  <li>Adicionar a opção para ver o extrato (Coloque algumas compras ou depósitos fictícios).</li>
  <li>Adicionar a opção para fazer uma transferência. A transferência consiste em você informar o 
número de uma conta (pode ser qualquer número, mas obrigatoriamente um número, ou seja, nenhum outro caractere deve ser aceito), 
perguntar o valor da transferência e remover o valor da conta da mesma forma como na ação do saldo. Caso o usuário tente transferir 
mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".</li>
  <li>Sempre que o usuário for transferir dinheiro,  o valor a ser transferido não pode ser igual ou menor a zero., 
ou seja, caso o usuário tente transferir mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de 
"Operação não autorizada".</li>
  <li>A ordem das opções deve ser: Saldo, Extrato, Saque, Depósito, Transferência e Sair.</li>
  <li>Atualize a função "erro" com as novas opções do menu. </li>
  <li> Caso o usuário informe um valor para depósito igual ou menor que zero, não deixe a operação ocorrer. 
Exiba uma mensagem de "Operação não autorizada".</li>
  <li> Sempre que o usuário for acessar o saldo, sacar, retirar o extrato ou transferir dinheiro é 
necessário que ele informe uma senha. Essa senha deve validada com uma condicional. A senha é 3589.</li>
  <li>Quando o usuário escolher sair do sistema, exiba uma mensagem agradecendo por utilizar os 
serviços do banco: "{Nome}, foi um prazer ter você por aqui!".</li>
  <li>Na função "inicio", utilize escolha/caso (switch/case) para validar a opção do usuário.</li>
</ul>
