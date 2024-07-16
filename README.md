# Codificador e Decodificador de Texto - Alura ONE 

## 📋 Sobre
Feito com HTML, CSS e Javascript. Esta aplicação tem por função codificar e decodificar mensagens de texto de maneira simples, visando a troca de informações com outras pessoas de uma forma segura e divertida.

### 🛠 Como funciona? 
#### Codificação
Ao inserir a sua mensagem no campo de texto e pressionar o botão *codificar* a aplicação irá percorrer pelo o seu texto caracter por caracter em busca de substituir as vogais presentes pelos seguintes códigos pré-determinados:

1. "a" irá se converter para "ai"
2. "e" irá se converter para "enter"
3. "i" irá se converter para "imes"
4. "o" irá se converter para "ober"
5. "u" irá se converter para "ufat"

#### Decodificação
Nesse caso, a aplicação percorrerá na mensagem encriptada em busca das vogais verificando se os caracteres posteriores são os mesmos do código exposto acima. Em caso positivo, a aplicação irá substituir o termo identificado pela vogal respectiva.

#### Especificações
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve funcionar apenas com letras minúsculas
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

#### Exemplo:

| ENTRADA | SAIDA |
| ------ | ------ |
| "gato" |  "gaitober" |
| gaitober" | "gato" |


A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
O resultado deve ser exibido na tela.


