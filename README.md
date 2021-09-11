<h1>NestJS Boilerplate
  <a
    href="http://nestjs.com/"
    target="blank"
  >
    <img
      src="https://nestjs.com/img/logo_text.svg"
      width="65"
      alt="Nest Logo"
    />
  </a>
</h1>

## Description

[NestJS](https://github.com/nestjs/nest) Boilerplate made with ❤️

## Start Guide

- Create .env file `cp .env.example .env` and replace existing env variables
  (mysql connection params)
- Install dependencies `yarn`
- Start the app `yarn run start:dev` (app will be exposed through the port 3000)
- Navigate to `api/docs/`


## Environment Configuration

Integrated Configuration Module so you can just inject `ConfigService`
and read all environment variables from `.env` file, which is created automatically by the init script from `.env.example`.

## Swagger

RESTful APIs you can describe with already integrated Swagger.
To see all available endpoints visit http://localhost/api/docs

## Authentication - JWT

Already preconfigured JWT authentication.
It's suggested to change current password hashing to something more secure.
You can start use already working implementation of `Login` and `Registration`
endpoints, just take a look at [http://localhost/api/docs](http://localhost/api/docs).
