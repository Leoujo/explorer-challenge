import { render, screen, waitFor } from "@testing-library/react";
import { DataProvider } from "../../../context/DataProvider";
import useFetch from "../../../hooks/useFetch";
import ProjectExplorer from "../index";
import { TreeNode } from "../../../api";

// Mock the custom hook
jest.mock("../../../hooks/useFetch");
const mockedUseFetch = useFetch as jest.Mock;

// Mock data and props
const mockFetchData = {
	data:
		{
			id: "123",
			type: "project",
			name: "my project",
			children: [
				{ id: "1", type: "file", name: "file1.js" },
				{ id: "2", type: "folder", name: "folder" },
			],
		} as TreeNode,
	deleteDataById: jest.fn(),
	isLoading: false,
	error: null,
};

// Utility function for rendering
const renderComponent = () => {
	mockedUseFetch.mockReturnValue(mockFetchData);
	return render(
		<DataProvider>
			<ProjectExplorer />
		</DataProvider>
	);
};

const renderComponentWithError = () => {
	mockedUseFetch.mockReturnValue({
		...mockFetchData,
		error: "An error occurred while processing the request.",
	});
	return render(
		<DataProvider>
			<ProjectExplorer />
		</DataProvider>
	);
};

describe("Project Explorer - unit", () => {
	it("should render the project name in the header", async () => {
		renderComponent();

		// Use waitFor to handle asynchronous rendering
		await screen.findByText("my project");
	});

	it("should render the FileList component when data has children", async () => {
		renderComponent();

		// Use waitFor to verify FileList renders
		await screen.findByTestId("file-list");
	});

	it("should display an error message when there is an error", async () => {
		// Update mock to simulate an error
		renderComponentWithError();

		// Use waitFor to handle asynchronous rendering of the error message
		await screen.findByTestId('error-warning');
	});
});
