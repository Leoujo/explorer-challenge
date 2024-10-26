# Carta File Explorer Take-home
The goal of this project is to replicate the Visual Studio Code Explorer UI with key functionalities using React and TypeScript. The solution is designed to be clean, testable and extendable.

## Quick start

```sh
# Install NPM dependencies
yarn
# Run the app
yarn start
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

## Brainstorm
When developing this application, my first step was to take a screenshot of the final result and sketch over it which components would be present in it.

<div align="center">
	<img src="../ts-boilerplate/src/assets/images//project-sketch.png" />
</div>

Note: This sketch was created in [excalidraw](https://excalidraw.com/).

- FileItem -> A basic file card displaying the file name. It has a delete option (an "X" button) that appears on hover.
- FileGroup -> A collapsible card that shows a folder name and includes a delete option (the "X" button is visible on hover). It contains a list of files (FileList) in the collapsible area.
- FileList -> Renders an array of files as either FileItem or FileGroup based on the file type. It is used in both ProjectExplorer and within the collapsible area of FileGroup.
- ProjectExplorer -> A table component that displays the project name and a FileList.
- ProjectSide -> In a real application, this would show the content of the selected file, but given the fact it falls outside of this project's scope, this component was not implemented.
- ProjectView -> The main component that includes ProjectExplorer and ProjectSide.

## Implementation
- TypeScript ->  I decided to use TypeScript since Carta uses it as well. This allows the project to closely resemble real-life scenarios.
- Dependency Injection -> I used this to decouple component dependencies, which enhances modularity and maintainability.
- SOLID Principles -> This project uses the O from SOLID (Open-closes principle), which means the code must be open  for extension without modifing it.
- Unit and Integration tests -> I implemented tests to verify component functionality and interactions, ensuring reliability and reducing bugs. This enhances code quality, allow confident updates, and serves as documentation for future developers.