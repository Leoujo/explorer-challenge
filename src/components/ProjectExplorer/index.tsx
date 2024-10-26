import './index.scss';

import { useDataContext } from '../../context/DataProvider';
import FileList from '../FileList';

export default function ProjectExplorer() {
	const { data, error } = useDataContext();

	return (
		<>
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
			{error && <p className='errorWarning' data-testid="error-warning">{error}</p>}
		</>
	);
}
