import { render, screen } from "@testing-library/react";
import { DataProvider } from "../../../context/DataProvider";
import useFetch from "../../../hooks/useFetch";
import FileList from "../index";
import { TreeNode } from "../../../api";
import mockFetchData from "../../../mocks/tests/mockFetchData";


// Mock the custom hook
jest.mock('../../../hooks/useFetch');
const mockedUseFetch = useFetch as jest.Mock;

const mockFiles: TreeNode[] = [
	{ id: "1", name: "file1.txt", type: "file" },
	{ id: "2", name: "file2.txt", type: "file" },
];

const mockFolders: TreeNode[] = [
	{ id: "3", name: "folder1", type: "folder", children: mockFiles },
	{ id: "4", name: "folder2", type: "folder" },
];

// Utility function for rendering
const renderComponent = (props = { children: mockFiles }) => {
	mockedUseFetch.mockReturnValue(mockFetchData);
	return render(
		<DataProvider>
			<FileList {...props} />
		</DataProvider>
	);
};

describe("FileList", () => {

	it("should render FileItems components for each file", () => {
		renderComponent();

		const fileItems = screen.queryAllByTestId("file-item");
		expect(fileItems).toHaveLength(mockFiles.length);
	});

	it("should render FileGroup components for each folder", () => {
		renderComponent({ children: mockFolders });

		const fileGroups = screen.queryAllByTestId("file-group");
		expect(fileGroups).toHaveLength(mockFolders.length);
	});
});