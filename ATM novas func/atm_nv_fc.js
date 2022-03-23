var saldo = 10000.50; //Float 1.36
		var array = ["Saque: 3500", "Depósito: 2500", "Transferencia: 3500"]; //extrato
		var boolean = false;

		var nome = prompt("Digite seu nome:");
		saudacao(nome);

		function inicio() {
			
			var escolha = parseInt(prompt('Selecione uma opção \n1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferencia 6.) Sair'));

			switch (escolha) {

				case 1:
					if(confereSenha() === true){
						ver_saldo();
					}
					break;

				case 2: 
					if(confereSenha() === true){
						exibeExtrato();
					}
					break;
				
				case 3:
					if(confereSenha() === true){
						fazer_saque();
					}
					break;

				case 4:
					if(confereSenha() === true){
						fazer_deposito();
					}
					break;
				
				case 5:
					if(confereSenha() === true){
						fazerTransferencia();
					}
					break;
				
				case 6: 
					sair();
					break;

				default:
					erro();

			}
		}

		function ver_saldo() {
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}

		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			// Not a Number
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número:');
				fazer_deposito();
			} else {
				if(deposito <= 0){
					alert("Operação Invalida! ");
					fazer_deposito();
				}else {
					saldo += deposito;
					criaExtrato("Depósito: " + deposito);
					ver_saldo();
				}
				
			}
		}

		function fazer_saque() {
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número:');
				fazer_saque();
			} else { 
				if(saque > 0){ //confere os valores relativos ao saque
					if(saque > saldo){
						alert("Operação invalida");
						fazer_saque();
					} else {
						saldo -= saque;		
						criaExtrato("Saque: " + saque);
						ver_saldo();
					}
				} else{
				alert("Operação invalida");
				fazer_saque();
				} 
			}
		}

		function fazerTransferencia(){
			var conta = prompt("Qual numero da conta que você deseja transferir: ");

			if(isNaN(conta) || conta === ""){
				alert("Operação invalida !")
			} else {
				var valor = prompt("Digite o valor da transferencia: ");
				if(valor > 0){
					if(valor > saldo){
						alert("Operação invalida");
						fazerTransferencia();
					} else {
						saldo -= valor;		
						criaExtrato("Transferencia para Conta: " + conta + ", valor: " + valor);
						ver_saldo();
					}
				} else {
					alert("Operação invalida");
					fazerTransferencia();
				}
			}
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(nome + ", foi um prazer ter você por aqui!")
				window.close();
			} else {
				inicio();
			}
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 6');
			inicio();
		}

		function saudacao(nome){
			return "Olá " + nome + " é um prazer ter você aqui!";
		}

		function criaExtrato(operação){
			array.push(operação);
		}

		function exibeExtrato(){
			alert(array);
			inicio();			
		}

		function confereSenha(){
			var senha = prompt("Digite a sua senha: ");
			boolean = senha == 3589;
			if(senha != 3589){
				alert("SENHA INVALIDA!");
				inicio();
			} else {
				return true;
			}
		}

		inicio();