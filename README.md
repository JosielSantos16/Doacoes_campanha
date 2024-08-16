# Projeto de Campanhas

Este projeto é uma aplicação web para criar e gerenciar campanhas. É composta por um backend em Node.js com Express e um frontend em Next.js.

## Tecnologias Utilizadas

- **Backend**: Node.js, Express, PostgreSQL
- **Frontend**: Next.js, React, Tailwind CSS
- **Banco de Dados**: PostgreSQL

## Configuração do Ambiente

### Requisitos

- [Node.js](https://nodejs.org/) (v20.12.2 ou superior)
- [Docker](https://www.docker.com/) (para o PostgreSQL)
- [PostgreSQL](https://www.postgresql.org/) (opcional, se não usar Docker)

### Configuração do Banco de Dados

#### Usando Docker

1. Certifique-se de que o Docker está instalado e em execução.
2. Na raiz do projeto, execute o comando a seguir para iniciar o banco de dados PostgreSQL:
   ```bash
   docker-compose up

### Configuração Manual (se não usar Docker)

1. **Instale o PostgreSQL localmente**:
   - Siga as instruções no [site oficial do PostgreSQL](https://www.postgresql.org/download/) para instalar o PostgreSQL em sua máquina.

2. **Crie um banco de dados chamado `campanhas`**:
   - Abra o terminal ou o cliente de administração do PostgreSQL e execute o seguinte comando:
     ```sql
     CREATE DATABASE campanhas;
     ```

3. **Configure o arquivo `.env` com a seguinte string de conexão**:
   - Crie um arquivo `.env` na raiz do seu projeto (se ainda não existir) e adicione a seguinte linha:
     ```bash
     CONNECTION_STRING=postgresql://postgres:postgres@localhost:5432/campanhas
     ```

### Configuração do Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/JosielSantos16/Doacoes_campanha.git

2. **Instale as dependência**:
   ```bash
   npm install

3. **Inicie o servidor**:
   ```bash
   npm run dev


A aplicação estará disponível em http://localhost:3000 (ou a porta configurada).



