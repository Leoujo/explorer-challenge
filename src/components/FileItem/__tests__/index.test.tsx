import { render, screen } from "@testing-library/react";

import { DataProvider } from "../../../context/DataProvider";
import useFetch from "../../../hooks/useFetch";
import FileItem from "..";
import mockFetchData from "../../../mocks/tests/mockFetchData";
import mockProps from "../../../mocks/tests/mockProps";

// Mock the custom hook
jest.mock('../../../hooks/useFetch');
const mockedUseFetch = useFetch as jest.Mock;

// Utility function for rendering
const renderComponent = (props = { ...mockProps }) => {
	mockedUseFetch.mockReturnValue(mockFetchData);
	return render(
		<DataProvider>
			<FileItem {...props} />
		</DataProvider>
	);
};

describe("FileItem", () => {
	it("should render the file name", () => {
		renderComponent();

		expect(screen.getByText(mockProps.name)).toBeInTheDocument();
	});

	it("should render default icon for unknown names", () => {
		renderComponent({ ...mockProps, name: "default.xyz" });

		expect(screen.getByTestId('icon-default-file')).toBeInTheDocument();
	});

	it("should render custom icon for javascript files", () => {
		renderComponent({ ...mockProps, name: 'index.js' });

		expect(screen.getByTestId('icon-js-file')).toBeInTheDocument();
	});
});