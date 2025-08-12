# docker-teste-html
Testes para aplicação html dockerizada
## Sobre

Este repositório é destinado a testes de aplicações HTML e JavaScript utilizando automação com Docker. Utilizado para demonstrar como empacotar e executar uma aplicação web simples em um ambiente isolado, facilitando o desenvolvimento e a replicação do ambiente.

## Como usar

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/docker-teste-html.git
    ```
2. Acesse a pasta do projeto:
    ```bash
    cd docker-teste-html
    ```
3. Construa a imagem Docker:
    ```bash
    docker build -t teste-html .
    ```
4. Execute o container:
    ```bash
    docker run -p 8080:80 teste-html
    ```
5. Acesse a aplicação em [http://localhost:8080](http://localhost:8080).

## Tecnologias

- HTML
- JavaScript
- Docker

## Objetivo

Facilitar testes e demonstrações de aplicações web estáticas em ambientes controlados usando Docker.