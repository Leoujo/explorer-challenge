import { render, screen } from "@testing-library/react";
import { DataProvider } from "../../../context/DataProvider";
import useFetch from "../../../hooks/useFetch";
import ProjectExplorer from "../index";
import mockFetchData from "../../../mocks/tests/mockFetchData";

// Mock the custom hook
jest.mock("../../../hooks/useFetch");
const mockedUseFetch = useFetch as jest.Mock;


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

		await screen.findByText("my project");
	});

	it("should render the FileList component when data has children", async () => {
		renderComponent();

		await screen.findByTestId("file-list");
	});

	it("should display an error message when there is an error", async () => {
		renderComponentWithError();

		await screen.findByTestId('error-warning');
	});
});
