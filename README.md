<img width="1200" alt="Labs" src="https://user-images.githubusercontent.com/99700157/213291931-5a822628-5b8a-4768-980d-65f324985d32.png">

<p>
 <h3 align="center">Chainstack is the leading suite of services connecting developers with Web3 infrastructure</h3>
</p>

<p align="center">
  <a target="_blank" href="https://chainstack.com/build-better-with-ethereum/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Ethereum.svg" /></a>&nbsp;  
  <a target="_blank" href="https://chainstack.com/build-better-with-bnb-smart-chain/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/BNB.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-polygon/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Polygon.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-avalanche/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Avalanche.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-fantom/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Fantom.svg" /></a>&nbsp;
</p>

<p align="center">
  • <a target="_blank" href="https://chainstack.com/">Homepage</a> •
  <a target="_blank" href="https://chainstack.com/protocols/">Supported protocols</a> •
  <a target="_blank" href="https://chainstack.com/blog/">Chainstack blog</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Chainstack docs</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Blockchain API reference</a> • <br> 
  • <a target="_blank" href="https://console.chainstack.com/user/account/create">Start for free</a> •
</p>

# Getting Started with Kubernetes

## Deploy an Express.js Server with a Load Balancer

This repository contains all the necessary scripts and code to deploy an Express.js server on a Kubernetes cluster hosted on [Linode](https://cloud.linode.com/dashboard).

The app uses the Express framework to create a simple API server that interacts with the Ethereum blockchain. It utilizes the Web3.js library to fetch the balance of an Ethereum address using a [Chainstack](https://chainstack.com/) node.

The project aims to provide a comprehensive guide for beginners to get hands-on experience with Kubernetes deployments, pod management, and load balancing.

> Find the full guide on Chainstack's Developer Portal: [Getting started with Kubernetes on Linode](https://docs.chainstack.com/docs/tutorial-on-how-to-make-your-dapp-reliable-and-scalable-with-kubernetes)

### Prerequisites

- Kubernetes CLI— [Install kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Linode](https://cloud.linode.com/dashboard) Account
- [Chainstack](https://console.chainstack.com/user/account/create) account

### Quick Start

1. **Clone the Repository**

   ```
   git clone https://github.com/soos3d/get-started-with-kubernetes.git
   ```

2. **Navigate to the Project Directory**

   ```
   cd get-started-with-kubernetes
   ```

3. **Set KUBECONFIG Environment Variable**

   Deploy a kubernetes cluster on Linode and get the `kubeconfig.yaml` file, then add it to the project and run:

   ```
   export KUBECONFIG=kubeconfig.yaml
   ```

4. **Deploy the Pod**

   First deploy an Ethereum node on Chainstack:

   1. [Sign up with Chainstack](https://console.chainstack.com/user/account/create).
   1. [Deploy a node](https://docs.chainstack.com/platform/join-a-public-network).
   1. [View node access and credentials](https://docs.chainstack.com/platform/view-node-access-and-credentials).

   Use the node RPC URL as environment variable.

   ```
   kubectl run addressbalance --image=soos3d/addressbalance:latest --port=80 --env="ETHEREUM_RPC_URL=YOUR_CHAINSTACK_NODE_URL" --env="PORT=3333"
   ```

   This will deply one pod manually.

5. **Deploy Using Manifest**

   > Find the manifest in the `k8s` directory.

   Add the Chainstack RPC node to the environment variables.

   ```yaml
   env:
     - name: ETHEREUM_RPC_URL
       value: "YOUR_CHAINSTACK_RPC_URL"
     - name: PORT
       value: "3333"
   ```

   Then run:

   ```sh
   kubectl apply -f server_deployment.yaml
   ```

   This will deploy 4 managed pods.

6. **Set Up Load Balancer**

   > Find the manifest in the `k8s` directory.

   ```
   kubectl apply -f server_loadbalance.yaml
   ```

### Features

- Step-by-step guide to deploying your first pod
- Detailed explanation of Kubernetes Deployment manifests
- Load balancing with Linode's built-in service
- Environment variable configuration

### Contributing

Feel free to open issues or PRs if you find any problems or have suggestions for improvements.
