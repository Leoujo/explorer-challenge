import { render, screen, fireEvent } from "@testing-library/react";

import { DataProvider } from "../../../context/DataProvider";
import useFetch from "../../../hooks/useFetch";
import FileItem from "..";

// Mock the custom hook
jest.mock('../../../hooks/useFetch');
const mockedUseFetch = useFetch as jest.Mock;

// Mock data and props
const mockFetchData = {
	data: [{
		id: "123",
		type: "project",
		name: "my project",
		children: [{ id: "1", type: "file", name: "file1.js" }],
	}],
	deleteDataById: jest.fn(),
	isLoading: false,
	error: null,
};

const mockProps = {
	id: "123",
	name: "unknown.txt",
};

// Utility function for rendering
const renderComponent = (props = { ...mockProps }) => {
	mockedUseFetch.mockReturnValue(mockFetchData);
	return render(
		<DataProvider>
			<FileItem {...props} />
		</DataProvider>
	);
};

describe("FileItem - unit", () => {
	it("should render the file name", () => {
		renderComponent();

		expect(screen.getByText(mockProps.name)).toBeInTheDocument();
	});

	it("should render default icon for unknown names", () => {
		renderComponent();

		expect(screen.getByTestId('icon-default-file')).toBeInTheDocument();
	});

	it("should render custom icon for javascript files", () => {
		renderComponent({ ...mockProps, name: 'index.js' });

		expect(screen.getByTestId('icon-js-file')).toBeInTheDocument();
	});
});