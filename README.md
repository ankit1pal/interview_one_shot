# Interview Preparation Platform

A comprehensive MERN stack application for technical interview preparation, featuring LeetCode problems, High-Level Design (HLD) concepts, and Low-Level Design (LLD) patterns.

## Features

- **LeetCode Blind 75 Problems**: Complete solutions with explanations, complexity analysis, and C++ code
- **High-Level Design Topics**: System design concepts with architecture diagrams and tradeoffs
- **Low-Level Design Patterns**: Design patterns with implementations and use cases
- **Responsive Design**: Modern UI with CSS Grid layout
- **Syntax Highlighting**: Beautiful code display with syntax highlighting
- **Markdown Support**: Rich text formatting for explanations and documentation

## Technology Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **RESTful API** design
- **CORS** enabled for frontend communication

### Frontend
- **React 18** with Vite
- **Axios** for API communication
- **React Markdown** for rich text rendering
- **React Syntax Highlighter** for code display
- **CSS Grid** for responsive layout

## Project Structure

```
interview_one_shot/
├── server/                 # Backend application
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── data/              # Seed data files
│   ├── server.js          # Main server file
│   ├── seed.js            # Database seeding script
│   └── package.json       # Backend dependencies
├── client/                # Frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main app component
│   │   ├── App.css        # Main styles
│   │   └── main.jsx       # Entry point
│   └── package.json       # Frontend dependencies
└── README.md              # This file
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### 1. Clone and Setup
```bash
git clone <repository-url>
cd interview_one_shot
```

### 2. Backend Setup
```bash
cd server
npm install
```

### 3. Database Configuration
Create a `.env` file in the `server` directory:
```env
PORT=5000
ATLAS_URI=mongodb://localhost:27017/interview-prep
```

For MongoDB Atlas, replace the URI with your connection string.

### 4. Seed the Database
```bash
npm run seed
```

### 5. Start the Backend Server
```bash
npm start
# or for development with auto-restart
npm run dev
```

### 6. Frontend Setup
Open a new terminal and navigate to the client directory:
```bash
cd client
npm install
```

### 7. Start the Frontend Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## API Endpoints

### LeetCode Problems
- `GET /api/leetcode` - Get all problems (lightweight list)
- `GET /api/leetcode/:slug` - Get specific problem details

### HLD Topics
- `GET /api/hld` - Get all HLD topics (lightweight list)
- `GET /api/hld/:slug` - Get specific HLD topic details

### LLD Topics
- `GET /api/lld` - Get all LLD topics (lightweight list)
- `GET /api/lld/:slug` - Get specific LLD topic details

## Usage

1. **Select a Topic**: Click on any topic from the left panel (LeetCode), right panel (HLD), or bottom panel (LLD)
2. **View Content**: The selected topic's detailed content will appear in the center panel
3. **Navigate**: Switch between different topics to explore various concepts

## Development

### Adding New Content

1. **LeetCode Problems**: Add new problems to `server/data/leetcode.json`
2. **HLD Topics**: Add new topics to `server/data/hld.json`
3. **LLD Topics**: Add new topics to `server/data/lld.json`
4. **Reseed Database**: Run `npm run seed` in the server directory

### Content Format

Each content type follows a specific schema defined in the MongoDB models:

- **LeetCode Problems**: Include problem statement, examples, constraints, and complete C++ solutions
- **HLD Topics**: Include core concepts, architecture diagrams, and tradeoffs
- **LLD Topics**: Include intent, structure, use cases, and C++ implementations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your content or improvements
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.


