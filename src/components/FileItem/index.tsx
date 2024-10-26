import { getFileIcon } from '../../utils/iconUtils';
import DeleteIcon from '../common/DeleteIcon';

interface FileItemProps {
	id: string;
	name: string;
}

export default function FileItem({ id, name, }: FileItemProps) {
	return (
		<div className='flex-between hover-color-change hover-icon-visible' data-testid="file-item">
			<div className='flex-start'>
				{getFileIcon(name)}
				<p>{name}</p>
			</div>
			<DeleteIcon id={id} />
		</div>
	);
}
