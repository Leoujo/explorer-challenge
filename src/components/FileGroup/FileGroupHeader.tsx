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

const FileGroupHeader: React.FC<FileGroupHeaderProps> = ({ isOpen, name, onToggle, id }) => {
	return (
		<div className='flexBetween hoverColorChange hoverIconVisible' data-testid="file-group-header" onClick={onToggle}>
			<div className='flexStart'>
				{isOpen ? <ArrowDown /> : <ArrowRight />}
				<div>{name}</div>
			</div>
			<DeleteIcon id={id} />
		</div>
	);
};

export default FileGroupHeader;
