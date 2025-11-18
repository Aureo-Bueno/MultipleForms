
# Multi-Step Form Project

This is a multi-step form application built with React and Vite. The project uses React Context and `useReducer` to manage the form state across steps, providing a clean and scalable solution for complex forms.

## Features

- Multi-step form navigation
- Centralized state management using React Context and `useReducer`
- Modular and reusable components
- Responsive design
- Easy to extend and customize

## Project Structure

```

src/
├── components/           \# Reusable UI components
│   ├── BackButton/
│   ├── Button/
│   ├── FormField/
│   ├── Header/
│   ├── HeaderForm/
│   ├── Input/
│   ├── Label/
│   ├── SelectOption/
│   ├── SidebarItem/
│   ├── Theme/
│   └── svgs/
├── context/              \# Form state management
│   └── form/
│       ├── reducer/
│       ├── types/
│       ├── FormContext.ts
│       ├── FormProvider.tsx
│       ├── index.ts
│       └── useForm.ts
├── pages/                \# Page components for each step
│   ├── FormContact/
│   ├── FormLevelProgram/
│   ├── FormName/
│   └── NotFound/
├── routes/               \# Routing logic
│   ├── hook/
│   └── provider/
├── styles/               \# Global styles and theme
│   ├── globals.ts
│   └── theme.ts
├── App.tsx
├── main.tsx
├── styled.d.ts
└── vite-env.d.ts

```

## Installation

1. Clone the repository:
```

git clone <repository-url>
cd <project-folder>

```

2. Install dependencies:

```
npm install
```

## Running the Project

1. Start the development server:

```
npm run dev
```

2. Open your browser and navigate to `http://localhost:8080` (or the port specified in the console).

## Build for Production

To build the project for production:

```
npm run build
```

## Running with Docker Compose

This project includes a `docker-compose.yml` file to run the application in Docker containers.

### Prerequisites

- Docker
- Docker Compose

### Steps

1. Build and start the containers:

```
docker-compose up --build
```


The built files will be placed in the `dist` folder.

## Technologies Used

- React
- Vite
- TypeScript
- React Context API
- useReducer Hook
- Styled Components
