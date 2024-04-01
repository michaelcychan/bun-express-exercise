# An exercise with Bun, Express.js and Docker

I am using Bun v1.1.0, Express.js and Docker to build this simple web API.

## To clone:

Use the following command:
```bash
git clone
cd bun-docker-exercise
```

To install dependencies:

```bash
bun install
```

To run as development profile (reload upon file changes):

```bash
bun run dev
```

## To build the docker image

```bash
docker build --pull -t bun-express .
```
Note: . at the end of the command is required

## To Run
```bash
docker run -d -p 3000:3000 bun-express
```

## To Stop Docker runnin
```bash
docker stop <<docker-id>>
```
