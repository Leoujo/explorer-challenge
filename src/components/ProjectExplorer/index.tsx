import './index.scss';

import FileList from '../FileList';
import { useDataContext } from '../../context/DataProvider';

export default function ProjectExplorer() {
	const { data } = useDataContext();

	return (
		<div className='table'>
			<div className='header'>
				{data?.name}
			</div>
			<div className='content'>
				{data?.children && (
					<FileList children={data.children} />
				)}
			</div>
		</div>
	);
}
