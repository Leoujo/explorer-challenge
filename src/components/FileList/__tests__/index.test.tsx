import { render, screen } from "@testing-library/react";
import { DataProvider } from "../../../context/DataProvider";
import useFetch from "../../../hooks/useFetch";
import FileList from "../index";
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

const mockProps = {};

// Utility function for rendering
const renderComponent = (props = { ...mockProps }) => {
	mockedUseFetch.mockReturnValue(mockFetchData);
	return render(
		<DataProvider>
			<FileList {...props} />
		</DataProvider>
	);
};

const mockFiles: TreeNode[] = [
	{ id: "1", name: "file1.txt", type: "file" },
	{ id: "2", name: "file2.txt", type: "file" },
];

const mockFolders: TreeNode[] = [
	{ id: "3", name: "folder1", type: "folder", children: mockFiles },
	{ id: "4", name: "folder2", type: "folder" },
];


describe("FileList - integration", () => {

	it("should render FileItems components for each file", () => {
		renderComponent({ ...mockProps, children: mockFiles });

		const fileItems = screen.queryAllByTestId("file-item");
		expect(fileItems).toHaveLength(mockFiles.length);
	});

	it("should render FileGroup components for each folder", () => {
		renderComponent({ ...mockProps, children: mockFolders });

		const fileGroups = screen.queryAllByTestId("file-group");
		expect(fileGroups).toHaveLength(mockFolders.length);
	});
});