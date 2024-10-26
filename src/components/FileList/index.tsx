import React from 'react';

import { FILE_TYPE } from '../../constants';
import { TreeNode } from '../../api';
import FileItem from '../FileItem';
import FileGroup from '../FileGroup';

interface FileListProps {
	children?: TreeNode[];
}

const FileList: React.FC<FileListProps> = ({ children }) => {

	return (
		<div data-testid="file-list">
			{children?.map((file) =>
				file.type === FILE_TYPE ? (
					<FileItem
						id={file.id}
						name={file.name}
						key={file.id}
					/>
				) : (
					<FileGroup
						children={file.children}
						id={file.id}
						name={file.name}
						key={file.id}
					/>
				)
			)}
		</div>
	);
};

export default FileList;
