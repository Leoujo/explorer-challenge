import './index.scss';
import { useState } from 'react';

import FileList from '../FileList';
import { TreeNode } from '../../api';
import FileGroupHeader from './FileGroupHeader';

interface FileGroupProps {
	name: string;
	id: string;
	children?: TreeNode[];
}

export default function FileGroup({ name, id, children }: FileGroupProps) {
	const [isOpen, setIsOpen] = useState(false);

	const isOpenToggle = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div data-testid="file-group">
			<FileGroupHeader
				isOpen={isOpen}
				name={name}
				onToggle={isOpenToggle}
				id={id}
			/>

			{isOpen && (
				<div className='indent' data-testid="file-list-container">
					<FileList children={children || []} />
				</div>
			)}
		</div>
	);
}
