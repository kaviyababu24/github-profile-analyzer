# GitHub Profile Analyzer API

## Description
A backend application built using Node.js, Express.js, MySQL, and the GitHub API. It fetches GitHub user profile information, stores useful insights in a MySQL database, and provides APIs to retrieve analyzed profiles.

## Tech Stack
- Node.js
- Express.js
- MySQL
- GitHub REST API

## Installation

1. Clone the repository

```bash
git clone https://github.com/kaviyababu24/github-profile-analyzer.git
```

2. Install dependencies

```bash
npm install
```

3. Configure MySQL and update database credentials in `src/config/db.js`

4. Start the server

```bash
node src/server.js
```

## API Endpoints

### Analyze GitHub Profile

```http
GET /api/profiles/analyze/:username
```

Example:

```http
GET /api/profiles/analyze/octocat
```

### Get All Profiles

```http
GET /api/profiles
```

### Get Single Profile

```http
GET /api/profiles/:id
```

## Database Schema

Database schema is available in:

```text
database_schema.sql
```

## Author

Kaviya T B