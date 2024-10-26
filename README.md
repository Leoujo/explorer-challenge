# Carta Explorer Challenge
This project replicates the Visual Studio Code Explorer UI using React and TypeScript, prioritizing a clean, testable, and extendable design.

<div align="center">
	<img src="src/assets/images/carta-wallpaper.png" />
</div>

## Quick start

```sh
# Install NPM dependencies
yarn
# Run the app
yarn start
# Run the tests
yarn test
# Zip solution
tar -czvf [your initials]-CARTA.tar.gz --exclude="node_modules" .
```

## Installing Node, NPM, and Yarn

Install Node and NPM

- Mac
  - Install [Homebrew](https://docs.brew.sh/Installation)
  - Run `brew install node`
- Windows
  - Download and run the [Node Windows installer](https://nodejs.org/en/download/)
- Linux
  - See instructions for your distribution's package manager

Install Yarn

- Run `npm install -g yarn`

## Development 
### Goal
Create a VS Code-like Explorer UI, featuring a list of files and groups (collapsible folders), each with delete functionality. The project should use clean code practices with unit and integration tests to ensure maintainability.

### Hands on
First step was taking a screenshot of the final result and sketch over it which components would exist.

<div align="center">
	<img src="src/assets/images/project-sketch.png" />
</div>

Note: This sketch was created using [excalidraw](https://excalidraw.com/).

- FileItem -> Displays a file with a hover delete button.
- FileGroup -> Displays a folder with a collapsible area containing files; also has a hover delete button.
- FileList -> Renders files as either FileItem or FileGroup.
- ProjectExplorer -> A table with the project name and a FileList.
- ProjectSide -> Displays the FileItem content (out of project scope, so it wasn't implemented).
- ProjectView -> Main component combining ProjectExplorer and ProjectSide.

### Key Decisions
- Use TypeScript -> Ensures type safety and aligns with Carta's tech stack.
- Use Custom hooks -> Encapsulate and reuse logic across components (useFetch.ts).
- Implement the Context API -> Globalizes data and state management (DataProvider.tsx).
- Follow SOLID Principles -> Emphasizes the Open-Closed Principle for extensibility (iconUtils.tsx).
- Dependency Injection -> Breaks down components, shares logic using custom hooks and exposes globaly with the Context API.
- Unit and Integration tests -> Implement unit and integration tests to validate functionality and serve as future documentation. (all the files inside __tests__)

<div align="center">
	<img src="src/assets/images/tests.png" />
</div>