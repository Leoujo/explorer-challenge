import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DataProvider } from "../../../context/DataProvider";
import useFetch from "../../../hooks/useFetch";
import FileGroup from "..";
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
};

// Utility function for rendering
const renderComponent = (props = { ...mockProps, isOpen: false }) => {
	mockedUseFetch.mockReturnValue(mockFetchData);
	return render(
		<DataProvider>
			<FileGroup {...props} />
		</DataProvider>
	);
};

describe("FileGroup - integration", () => {
	it("should toggle FileList based on isOpen state", async () => {
		renderComponent();

		// isOpen state = false
		expect(screen.queryByTestId('file-list-container')).not.toBeInTheDocument();


		// click on header
		fireEvent.click(screen.getByTestId('file-group-header'));

		// isOpen state = true
		await waitFor(() => {
			expect(screen.getByTestId('file-list-container')).toBeInTheDocument();
		});
	});
});
