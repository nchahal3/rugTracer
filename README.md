# 🧠 RugTrace – On-Chain Token Rug Scanner

RugTrace is a tool designed to scan smart contract token addresses and warn users about potential rugpull risks. It assigns a “Rug Score” from 1–100 based on various contract flags, helping users make informed decisions before investing in tokens.

## Project Structure

The project is organized into a monorepo with two main directories:

- **frontend/**: Contains the Next.js application built with TypeScript and styled using Tailwind CSS.
- **backend/**: Contains the Node.js application that serves as the API for scanning tokens.

## Frontend

### Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```

### Components

- **TokenForm**: A form for users to input a token address and submit it for scanning.
- **Results**: Displays the rug score and flags based on the scanned token data.

### Pages

- **index.tsx**: The main entry point for the frontend application, managing the state for the token address and scan results.

## Backend

### Setup

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Run the server:
   ```
   npm run dev
   ```

### API

- **POST /scan-token**: Accepts a token address and returns a mocked rug score along with flags indicating potential risks.

## Environment Variables

Both the frontend and backend applications require environment variable configurations. Example `.env` files are provided in each directory.

## Usage Example

To scan a token, input the token address in the frontend form and click the "Scan" button. The results will display the rug score and any relevant flags.

## Future Enhancements

- Integration with Etherscan/BSCScan/BaseScan APIs for real-time data.
- Improved scoring algorithm based on additional contract flags.

## License

This project is licensed under the MIT License.