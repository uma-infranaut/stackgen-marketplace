---
title: "Infracost Estimator"
date: 2025-04-04
description: "A Go-based server that provides infrastructure cost estimation by using Infracost"
provider: "StackGen Official"
version: "1.0.0"
tags: ["cost-estimation", "infrastructure", "cloud", "infracost"]
categories: ["cost-management", "optimization"]
---

## Overview

Infracost Estimator is a Go-based server that provides a service related to infrastructure cost estimation by using [Infracost](https://www.infracost.io/). This service helps you estimate cloud infrastructure costs before deployment, preventing unexpected expenses.

## Features

- Accepts Topology ID and Organisation ID, gets the respective IAC zip and provides infracost estimation for the same
- Runs Infracost inside the same container (no sidecar required)
- Deployable to Kubernetes

## Admin Requirements

- **Go**
- **Docker, Kubernetes** (optional, for containerized deployment)

### Environment Variables

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `INFRACOST_API_KEY` | API key to interact with Infracost | No default value |
| `STACKGEN_AUTH_TOKEN` | StackGen Personal Access Token | No default value |
| `INFRACOST_PORT` | The port on which the Infracost estimator will run | `8000` |
| `APP_LOG_LEVEL` | The log level for the service | `INFO` |

### Logging

- The log level can be adjusted using the `APP_LOG_LEVEL` environment variable
- Supported levels include `DEBUG`, `INFO`, `WARN`, and `ERROR`

## Deployment Options

### Docker Deployment

#### Build the Docker Image

```bash
docker build -t cost-estimator -f ./Dockerfile .
```

## Run the Docker Container

```bash
docker run -p 8080:8080 -e INFRACOST_API_KEY="your-infracost-api-key" -e STACKGEN_AUTH_TOKEN="your-stackgen-personal-access-token" cost-estimator
```

## Kubernetes Deployment
The service is designed to be deployable to Kubernetes clusters, making it scalable and resilient.

## Local Development
1. Clone the repository:

```bash
git clone <repository-url>
cd infracost-estimator
```

2. Install dependencies:

```bash
go mod tidy
```

3. Run the application:

```bash
go run cmd/main.go
```

### Example:
Run the server with environment variables:

```bash
INFRACOST_API_KEY="your-infracost-apikey" STACKGEN_AUTH_TOKEN="StackGen-Personal-Access-Token" INFRACOST_PORT=8000 APP_LOG_LEVEL=DEBUG go run cmd/main.go
```

The server will start on the specified port and will be ready to handle requests.

## API Usage

### Endpoints
* `GET /topology/:id/cost-estimation`: Accepts topology id of an appstack, organization id. Fetch IAC ZIP file using topology ID and OrgID, extracts it, and runs cost estimation using Infracost CLI.

### Parameters (as Query params)
* `:id` (required): Topology ID(UUID) of an AppStack
* `orgId` (required): Organization ID

### Content Type
* Accept header can be of `plain/text` or `application/json`
* By default it is `application/json`

### Testing the API
Use **Postman** or **cURL** to send a request:

```bash
curl -X GET "http://your-server:8080/topology/<topologyId>/cost-estimation?orgId=<organizationId>" \
-H "Accept: plain/text" \
-v
```

## Support
For questions or issues, please contact our support team at support@stackgen.com.

