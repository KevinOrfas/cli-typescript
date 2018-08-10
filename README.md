## Setup and install

Clone this repo from or simply download the `.zip` bundle with the contents inside.

#### Dependency installation

During the time building this project, you'll need development dependencies of
which run on Node.js, follow the steps below for setting everything up (if you
have some of these already, skip to the next step where appropriate):

1. Download and install [Node.js here](https://nodejs.org/en/download/) for
   Windows or for Mac.

2. Install TypeScript globally via `npm i -g typescript`

#### Project installation

Now you've pulled down the repo and have everything setup, using the terminal
you'll need to `cd` into the directory that you cloned the repo into and run
some quick tasks:

```
cd <driftrock-cli-typescript>
npm install
```
This will then setup all the development and production dependencies we need.

To re-transpile the project if you need to run `tsc`.

#### Project run
To test you can run `npm run test`

The command `./bin/driftrock` will show a help message with all available commands. 

For instance
`./bin/driftrock most_sold`
`./bin/driftrock most_loyal`
`./bin/driftrock total_spend --email pearlie.yost@greenholt.biz`



