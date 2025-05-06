# Kubernetes Demo Application

A simple React application deployed on Kubernetes to demonstrate container orchestration concepts.

## Project Overview

This project showcases a modern web application architecture using:
- **Kubernetes** for container orchestration
- **Docker** for containerization
- **React** for the frontend UI
- **Nginx** as the web server

The application presents an informational UI about Kubernetes technologies and deployment concepts.

## Project Structure

```
kubernetes-demo-app/
├── frontend/                # React application
│   ├── Dockerfile          # Docker configuration
│   ├── package.json        # Frontend dependencies
│   ├── public/             # Static assets
│   │   └── index.html      # HTML template
│   └── src/                # React source code
│       ├── App.js          # Main application component
│       └── index.js        # Application entry point
└── kubernetes/             # Kubernetes manifests
    ├── frontend-deployment.yml  # Deployment configuration
    ├── frontend-service.yml     # Service configuration
    └── demo-configmap.yml       # ConfigMap for environment variables
```

## Prerequisites

- Docker
- Kubernetes cluster (any of the following):
    - Minikube
    - Docker Desktop with Kubernetes enabled
    - Kind
    - Cloud provider Kubernetes (GKE, AKS, EKS)
- kubectl command-line tool

## Step-by-Step Deployment Guide

### 1. Clone the Repository

```bash
git clone https://github.com/Xioketh/kubernetes-demo-app.git
cd kubernetes-demo-app
```

### 2. Build the Frontend Docker Image

```bash
# Navigate to frontend directory
cd frontend

# Build the Docker image
docker build -t yourusername/kubernetes-demo-frontend:latest .

# Push to Docker Hub
docker push yourusername/kubernetes-demo-frontend:latest
```

> **Note:** Replace `yourusername` with your Docker Hub username or appropriate registry path.

### 3. Update Kubernetes Manifests

Edit the `kubernetes/frontend-deployment.yml` file and replace the image name with your pushed image:

```yaml
spec:
  containers:
  - name: frontend
    image: yourusername/kubernetes-demo-frontend:latest
```

### 4. Apply Kubernetes Configurations

```bash
# Create the ConfigMap
kubectl apply -f kubernetes/demo-configmap.yml

# Create the Deployment
kubectl apply -f kubernetes/frontend-deployment.yml

# Create the Service
kubectl apply -f kubernetes/frontend-service.yml
```

### 5. Verify Deployment

```bash
# Check if pods are running
kubectl get pods

# Check if service is created
kubectl get services

# Check deployment status
kubectl get deployments

# Check logs
kubectl logs -l app=kube-demo
```

### 6. Access the Application

using Minikube:
```bash
minikube service kube-demo-service
```
