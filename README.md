# tsweb-custom-tool

TypeScript Node SSF Web App Utilizing Example

## Overview

This project serves as an example of how to use the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/elliemae__em-ssf-guest) typed package for SSF to add TypeScript support for a node project. This is necessary as the @elliemae/em-ssf-guest package does not currently publish its own types. The example demonstrates how to integrate these type declarations into a React application using Vite as the build tool. While this example uses React and Vite, the same principles can be applied to other typescript based frameworks and build tools.

## Prerequisites

- [PNPM](https://pnpm.io/) It is recommended to use PNPM as the package manager for this project and assumed that it is installed. If you do not have PNPM installed, you can install it by running visiting the [PNPM installation page](https://pnpm.io/installation).
- [@types/elliemae\_\_em-ssf-guest](https://www.npmjs.com/package/@types/elliemae__em-ssf-guest) This package provides the typed declarations for the SSF package and is what provides type support for SSF. It is assumed that this package is installed in your project. If you do not have this package installed, you can install it by running `pnpm add @types/elliemae__em-ssf-guest -D`.

## Installation

Clone the repository:

```bash
git clone https://github.com/dex2dot0/tsweb-custom-tool.git
cd ngtypes-ngweb
```

Install dependencies:

```bash
pnpm install
```

## Scripts

**Development**: Start the development server with Vite and LocalTunnel

In your terminal, run:

```bash
pnpm run dev
```

Running this command will start the development server and expose your local port to the internet using [LocalTunnel](https://www.npmjs.com/package/localtunnel). The LocalTunnel URL will be displayed in the terminal. This is useful for testing with EM since you will need an HTTPS public URL to expose in EM Web. Once the dev server is running, make sure to open the URL and enter the required password to authorize the LocalTunnel connection.

:lock: **Note**: The LocalTunnel password will be your local IP address. You can find this when you first run the dev script by opening the URL and clicking on the link that will expose your local IP address. Copy and paste that in to the password field to authorize the LocalTunnel connection.

**Build**: Building the project for production

:warning: It is not recommended to use this project for production purposes.

```bash
pnpm run build
```

**Serve**: Preview the production build:

```bash
pnpm run serve
```

**Type Check**: Run TypeScript type checking:

```bash
pnpm run typecheck
```

## SSF Examples

The SSF examples are located in the `src/components/loanObject` directory.

## Disclaimer

:warning: This is an oversimplified example of how to support Typescript alongside the SSF. This should not be construed as a best practice approach and is for demonstration purposes only.

## Usage

Once you have the application running locally with `pnpm run dev` you can load the project as a custom tool or global custom tool and experiment as needed. This will only work while your local server is running. This guide will not cover deploying the application to a production environment or usage for production purposes.
