import { render, screen, fireEvent } from "@testing-library/react";
import FileGroupHeader from "../FileGroupHeader";
import { DataProvider } from "../../../context/DataProvider";
import useFetch from "../../../hooks/useFetch";
import { TreeNode } from "../../../api";

// Mock the custom hook
jest.mock('../../../hooks/useFetch');
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

const mockProps = {
	id: "123",
	name: "index.js",
	onToggle: jest.fn(),
};

// Utility function for rendering
const renderComponent = (props = { ...mockProps, isOpen: false }) => {
	mockedUseFetch.mockReturnValue(mockFetchData);
	return render(
		<DataProvider>
			<FileGroupHeader {...props} />
		</DataProvider>
	);
};

describe("FileGroupHeader - unit", () => {
	it("should display the correct icon based on isOpen state", () => {
		renderComponent();

		// isOpen prop = false
		expect(screen.getByTestId('icon-arrow-right')).toBeInTheDocument();

		// isOpen prop = true
		renderComponent({ ...mockProps, isOpen: true });

		expect(screen.getByTestId('icon-arrow-down')).toBeInTheDocument();
	});

	it("should call onToggle when clicked", () => {
		renderComponent();

		// click on header 
		fireEvent.click(screen.getByTestId('file-group-header'));

		expect(mockProps.onToggle).toHaveBeenCalledTimes(1);
	});
});
