import React from 'react';

import ArrowRight from '../../assets/icons/arrowRight';
import ArrowDown from '../../assets/icons/arrowDown';
import DeleteIcon from '../common/DeleteIcon';

interface FileGroupHeaderProps {
	id: string;
	isOpen: boolean;
	name: string;
	onToggle: () => void;
}

const FileGroupHeader: React.FC<FileGroupHeaderProps> = ({ id, isOpen, name, onToggle }) => {
	return (
		<div className='flex-between hover-color-change hover-icon-visible' data-testid="file-group-header" onClick={onToggle}>
			<div className='flex-start'>
				{isOpen ? <ArrowDown /> : <ArrowRight />}
				<p>{name}</p>
			</div>
			<DeleteIcon id={id} />
		</div>
	);
};

export default FileGroupHeader;
