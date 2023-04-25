<br/>
<p align="center">
  <h1 align="center">kafka_lms_sync</h1>

  <h3 align="center">Sistema de mensageria para armazenamento de eventos e sincronização de dados Instituição - AVA</h3>

  <p align="center">
    Armazena dados para posteriormente poder ser consumidos por outros serviços de sincronização com ambientes AVAs.
    <br/>
    <br/>
    <br/>
    <a href="https://github.com/edgardhsl/api-simulacao-instituicao/issues">Reportar Bug</a>
    .
    <a href="https://github.com/edgardhsl/api-simulacao-instituicao/issues">Solicitar recurso</a>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/edgardhsl/api-simulacao-instituicao?color=dark-green) ![Forks](https://img.shields.io/github/forks/edgardhsl/api-simulacao-instituicao?style=social) ![Stargazers](https://img.shields.io/github/stars/edgardhsl/api-simulacao-instituicao?style=social) ![Issues](https://img.shields.io/github/issues/edgardhsl/api-simulacao-instituicao) 

## Sumário

* [Sobre o projeto](#sobre-o-projeto)
* [Primeiros passos](#primeiros-passos)
  * [Pré-requisitos](#pré-requisitos)
  * [Instalação](#instalação)
* [Uso da aplicação](#uso-da-aplicação)
* [Contribuição](#contribuição)
* [Autores](#autores)

## Sobre o projeto

Este projeto é um dos três microsserviços que estão sendo desenvolvidos para a disciplina de TCC 2. 

O objetivo deste serviço é armazenar os dados relacionados a cursos, disciplinas e atividades e fornecer para serviços que posteriormente podem sincronizá-los com ambientes AVAs, assim automatizando parte do processo de gerenciamento dos ambientes.

## Primeiros passos

Abaixo segue as instruções de como executar o projeto em seu ambiente.

### Pré-requisitos

**NECESSÁRIO UM AMBIENTE DOCKER CONFIGURADO E DISPONÍVEL.**

Para que as dependências sejam instaladas, você precisa instalar o npm.

O npm é o gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js.

* npm

```sh
npm install npm@latest -g
```

### Instalação

1. Clone the repo

```sh
git clone https://github.com/edgardhsl/kafka_lms_sync.git
```

2. Instale as dependências do projeto

```sh
npm install
```

## Uso da aplicação

Defina a variável de ambiente com o IP do servidor do Apache Kafka:

Windows Powershell: 
```sh
[Environment]::SetEnvironmentVariable("DOCKER_KAFKA_HOST", "IP_SERVIDOR_KAFKA", "User")
```

Linux: 
```sh
echo 'export DOCKER_KAFKA_HOST=IP_SERVIDOR_KAFKA' >> ~/.bashrc 
```

Você pode executar o projeto com o comando abaixo:
`npm run start`

## Contribuição



### Creating A Pull Request

1. Fazer um Fork do Projeto.
2. Crie sua branch do recurso (`git checkout -b feature/RecursoIncrivel`)
3. Faça o commit das suas alterações (`git commit -m 'Adicionado um RecursoIncrivel'`)
4. Envie para a sua branch (`git push origin feature/RecursoIncrivel`)
5. Abra um Pull-Request

## Autores

* **Edgard H. Santos Lopes** - *Graduando em Sistemas de Informação* - [Edgard H. Santos Lopes](https://github.com/edgardhsl) - *Projeto completo*
