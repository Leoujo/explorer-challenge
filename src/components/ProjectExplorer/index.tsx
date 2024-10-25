import './index.scss';

import FileList from '../FileList';
import useFetch from '../../hooks/useFetch';

export default function ProjectExplorer() {
	const { data, deleteDataById } = useFetch();

	return (
		<div className='table'>
			<div className='header'>
				{data?.name}
			</div>
			<div className='content'>
				{data?.children && (
					<FileList children={data.children} deleteDataById={deleteDataById} />
				)}
			</div>
		</div>
	);
}
