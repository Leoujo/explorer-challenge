import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DataProvider } from "../../../context/DataProvider";
import useFetch from "../../../hooks/useFetch";
import FileGroup from "..";
import mockFetchData from "../../../mocks/tests/mockFetchData";
import mockProps from "../../../mocks/tests/mockProps";

// Mock the custom hook
jest.mock('../../../hooks/useFetch');
const mockedUseFetch = useFetch as jest.Mock;

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

		expect(screen.queryByTestId('file-list-container')).not.toBeInTheDocument();

		fireEvent.click(screen.getByTestId('file-group-header'));

		await waitFor(() => {
			expect(screen.getByTestId('file-list-container')).toBeInTheDocument();
		});
	});
});
