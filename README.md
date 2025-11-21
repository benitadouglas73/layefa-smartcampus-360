# SmartCampus 360

A digital ecosystem for schools managing operations, academic data, and communication.

## Project Structure

- **frontend**: Next.js application (Public Website + Dashboards)
- **backend**: Node.js + Express application (API + Database)

## Getting Started

### Prerequisites

- Node.js installed
- PostgreSQL database (Supabase recommended)

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on the `.env` template and add your database credentials.
4. Run the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Public Website**: Home, About, Academics, Contact
- **Authentication**: Login/Register (JWT-based)
- **Dashboards**: Role-based access for Students, Teachers, and Parents (In Progress)
