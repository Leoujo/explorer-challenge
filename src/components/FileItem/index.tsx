import { getFileIcon } from '../../utils/iconUtils';
import DeleteIcon from '../common/DeleteIcon';

interface FileItemProps {
	id: string;
	name: string;
}

export default function FileItem({ name, id }: FileItemProps) {
	return (
		<div className='flexBetween hoverColorChange hoverIconVisible'>
			<div className='flexStart'>
				{getFileIcon(name)}
				<div>{name}</div>
			</div>
			<DeleteIcon id={id} />
		</div>
	);
}
