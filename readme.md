# AI-Powered DNS Server

A revolutionary DNS server that leverages Google's Gemini AI to provide intelligent responses to DNS queries. This project combines traditional DNS functionality with modern AI capabilities to create a unique and powerful name resolution system.

## Features

- **AI-Powered Responses**: Uses Google's Gemini AI model to generate intelligent responses to DNS queries
- **UDP Server**: Implements a standard DNS UDP server on port 53
- **Docker Support**: Easy deployment using Docker and Docker Compose
- **TypeScript**: Built with TypeScript for type safety and better development experience

## Architecture

The project follows a simple yet powerful architecture:

1. **DNS Query Reception**
   - Listens on UDP port 53 for incoming DNS queries
   - Uses the `denamed` library for DNS protocol handling

2. **AI Processing**
   - Converts DNS query names into natural language questions
   - Processes questions through Google's Gemini AI model
   - Generates concise, one-word or single-sentence responses

3. **Response Generation**
   - Converts AI responses back into DNS TXT records
   - Sends responses back to the querying client

## Technology Stack

- **Backend**: Node.js with TypeScript
- **DNS Protocol**: denamed library
- **AI Integration**: Google Generative AI (Gemini)
- **Containerization**: Docker
- **Environment Management**: dotenv

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose (for containerized deployment)
- Google Cloud API key for Gemini AI

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/DeshDeepakKant/radial.git
   cd radial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   GEMINI_API_KEY=your_google_cloud_api_key
   ```

4. **Run the server**
   ```bash
   npm run dev
   ```

## Docker Deployment

1. **Build and run using Docker Compose**
   ```bash
   docker-compose up --build
   ```

2. **Or build and run Docker container directly**
   ```bash
   docker build -t dns-ai .
   docker run -p 53:53/udp dns-ai
   ```

## Configuration

The server can be configured through environment variables:
- `GEMINI_API_KEY`: Your Google Cloud API key for Gemini AI
- Port 53 is used by default for DNS queries

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

## Important Notes

- This server requires root/administrator privileges to bind to port 53
- Ensure you have proper API key permissions for Google's Gemini AI
- The server is designed for experimental and educational purposes

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   - Create a `.env` file in the root directory and add your API key:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

## Usage

To start the server, run:

```bash
npm run dev
```
