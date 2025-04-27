FROM python:3.10

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

# Instala netcat-openbsd para o wait-for-it funcionar
RUN apt-get update && apt-get install -y netcat-openbsd && rm -rf /var/lib/apt/lists/*

COPY . .

# Usa wait-for-it para garantir que o DB esteja pronto antes de iniciar o app
CMD ["./wait-for-it.sh", "ualflix_db", "5432", "--", "python", "app.py"]
