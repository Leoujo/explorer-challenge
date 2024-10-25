import React from 'react';

import { FILE_TYPE } from '../../constants';
import { TreeNode } from '../../api';
import FileItem from '../FileItem';
import FileGroup from '../FileGroup';

interface FileListProps {
	children: TreeNode[];
	deleteDataById: (id: string) => void;
}

const FileList: React.FC<FileListProps> = ({ children, deleteDataById }) => {
	return (
		<>
			{children.map((file) =>
				file.type === FILE_TYPE ? (
					<FileItem
						deleteDataById={deleteDataById}
						id={file.id}
						name={file.name}
						key={file.id}
					/>
				) : (
					<FileGroup
						children={file.children}
						deleteDataById={deleteDataById}
						id={file.id}
						name={file.name}
						key={file.id}
					/>
				)
			)}
		</>
	);
};

export default FileList;
