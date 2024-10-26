import { jest } from '@jest/globals';
import { TreeNode } from '../../api';

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


export default mockFetchData