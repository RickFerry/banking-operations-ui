# Aplicação Frontend para Operações Bancárias

Esta é a aplicação frontend para a API de Operações Bancárias, desenvolvida com Angular e PrimeNG. A aplicação permite que os usuários realizem operações bancárias, como consultar saldo, depositar dinheiro, transferir fundos e sacar dinheiro.

## Índice
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Começando](#começando)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Executando a Aplicação](#executando-a-aplicação)
- [Uso](#uso)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Funcionalidades

- **Consultar Saldo:** Visualizar o saldo de uma conta específica.
- **Depósito:** Depositar dinheiro em uma conta.
- **Transferência:** Transferir dinheiro de uma conta para outra.
- **Saque:** Sacar dinheiro de uma conta.

## Tecnologias Utilizadas

- **Angular:** 16.x.x
- **PrimeNG:** 16.x.x

## Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **Angular CLI** (versão 16 ou superior)
- **API de Operações Bancárias** (rodando em `http://localhost:8080`)

## Começando

1. **Clone o repositório da API Backend:**
   ```bash
   git clone https://github.com/RickFerry/banking-operations-api.git
   cd banking-operations-api
   ```

2. **Inicie a API Backend:**
   ```bash
   ./mvnw spring-boot:run
   ```

3. **Clone o repositório da Aplicação Frontend:**
   ```bash
   git clone <URL_DO_SEU_REPOSITÓRIO_FRONTEND>
   cd banking-operations-frontend
   ```

4. **Instale as dependências do Frontend:**
   ```bash
   npm install
   ```

## Estrutura do Projeto

```
banking-operations-frontend/
├── src/
│   ├── app/
│   │   ├── balance/
│   │   │   ├── balance.component.css
│   │   │   ├── balance.component.html
│   │   │   ├── balance.component.ts
│   │   ├── deposit/
│   │   │   ├── deposit.component.css
│   │   │   ├── deposit.component.html
│   │   │   ├── deposit.component.ts
│   │   ├── transfer/
│   │   │   ├── transfer.component.css
│   │   │   ├── transfer.component.html
│   │   │   ├── transfer.component.ts
│   │   ├── withdraw/
│   │   │   ├── withdraw.component.css
│   │   │   ├── withdraw.component.html
│   │   │   ├── withdraw.component.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── banking.service.ts
│   ├── assets/
│   ├── environments/
│   ├── main.ts
│   ├── index.html
```

## Executando a Aplicação

1. **Inicie a Aplicação Angular:**
   ```bash
   ng serve
   ```

2. **Acesse a Aplicação:**
   Abra seu navegador e navegue para `http://localhost:4200`.

## Uso

- **Consultar Saldo:** Navegue até a aba "Consultar Saldo", insira o ID da conta e clique em "Consultar".
- **Depósito:** Navegue até a aba "Depósito", insira o ID da conta e o valor, e clique em "Depositar".
- **Transferência:** Navegue até a aba "Transferência", insira o ID da conta de origem, o ID da conta de destino e o valor, e clique em "Transferir".
- **Saque:** Navegue até a aba "Saque", insira o ID da conta e o valor, e clique em "Sacar".

## Contribuindo

Contribuições são bem-vindas! Por favor, faça um fork deste repositório e envie pull requests com suas alterações.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
