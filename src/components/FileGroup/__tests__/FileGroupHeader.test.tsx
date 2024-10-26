import { render, screen, fireEvent } from "@testing-library/react";
import FileGroupHeader from "../FileGroupHeader";
import { DataProvider } from "../../../context/DataProvider";
import useFetch from "../../../hooks/useFetch";
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
			<FileGroupHeader {...props} />
		</DataProvider>
	);
};

describe("FileGroupHeader - unit", () => {
	it("should display the correct icon based on isOpen state", () => {
		renderComponent();

		expect(screen.getByTestId('icon-arrow-right')).toBeInTheDocument();

		renderComponent({ ...mockProps, isOpen: true });

		expect(screen.getByTestId('icon-arrow-down')).toBeInTheDocument();
	});

	it("should call onToggle when clicked", () => {
		renderComponent();

		fireEvent.click(screen.getByTestId('file-group-header'));

		expect(mockProps.onToggle).toHaveBeenCalledTimes(1);
	});
});
