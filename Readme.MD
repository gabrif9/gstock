# Project Overview
This application is a full-stack platform featuring a backend server built with **Node.js** and **Express**, and a frontend developed using **Next.js**. The platform is designed for scalability, reliability, and ease of deployment.

> **Note:** This project was built by following a tutorial and serves as a learning exercise to gain more experience with AWS, Node.js, and Next.js.

## Architecture

- **Backend:** Node.js with Express handles API endpoints, and business logic.
- **Frontend:** Next.js provides a modern React interface for users.
- **Image Storage:** AWS S3 is used to securely store and serve images.
- **Deployment:** 
    - **EC2 Instances:** Backend is deployed on AWS EC2 instances for flexible compute resources.
    - **AWS Amplify:** The frontend application is exposed and managed via AWS Amplify, which also automates builds and deployments whenever changes are pushed to the GitHub repository.

## Features

- RESTful API with Express
- Modern, responsive UI with Next.js
- Continuous deployment pipeline with Amplify and GitHub integration

## Deployment

- The platform is deployed on AWS using EC2 for compute, S3 for storage, and Amplify for CI/CD.
- Any push to the GitHub repository triggers an automatic build and deployment via Amplify.

## Live Demo

You can view an example of the deployed application here: [https://main.d1yzobwlxc86xn.amplifyapp.com/dashboard](https://main.d1yzobwlxc86xn.amplifyapp.com/dashboard)

## License

This project is licensed under the MIT License.