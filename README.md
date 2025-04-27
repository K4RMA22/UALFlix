# 🎬 UALFlix

UALFlix é uma aplicação web estilo "Netflix" onde podes fazer **upload de vídeos** e vê-los listados numa interface simples.

## 🚀 Tecnologias Utilizadas

- **Frontend**: React.js
- **Backend**: Flask (Python)
- **Base de Dados**: PostgreSQL
- **Containers**: Docker e Docker Compose
- **Servidor Web**: Nginx

## 📦 Estrutura dos Serviços

- `frontend`: Aplicação React que permite o upload e visualização de vídeos.
- `catalog_service`: API Flask que gere uploads e consulta de vídeos.
- `streaming_service`: API Flask (futura expansão) para servir os vídeos.
- `ualflix_db`: Base de dados PostgreSQL para armazenar metadados dos vídeos.
- `nginx`: Faz o proxy e serve o frontend.

## 🛠️ Como correr o projeto localmente

1. Clonar o repositório:

`bash`
git clone https://github.com/seu-username/UALFlix.git
cd UALFlix

2. Construir e levantar os containers:
make up

3. Aceder à aplicação:

Frontend: http://localhost

API (catalog_service): http://localhost/api
