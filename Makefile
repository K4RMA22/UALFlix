# Makefile para gerir o projeto UALFlix

up:
	docker-compose up --build

down:
	docker-compose down

rebuild:
	docker-compose down --volumes --remove-orphans
	docker-compose up --build

logs:
	docker-compose logs -f

ps:
	docker-compose ps

restart:
	docker-compose restart

clean:
	docker system prune -f --volumes

build:
	docker-compose build
