import X from '../../assets/icons/x';
import { getFileIcon } from '../../utils/iconUtils';


interface FileItemProps {
	name: string;
	id: string;
	deleteItem: (id: string) => void;
}

export default function FileItem({ name, id, deleteItem }: FileItemProps) {

	return (
		<div className='flexBetweenContainer'>
			<div className='flexBetweenContainer'>
				{getFileIcon(name)}
				<div>{name}</div>
			</div>
			<div className='iconPrimary' onClick={() => deleteItem(id)}>
				<X />
			</div>
		</div>
	);
}
