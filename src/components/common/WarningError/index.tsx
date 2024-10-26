import './index.scss';

interface WarningErrorProps {
	error: string
}
export default function WarningError({ error }: WarningErrorProps) {
	return (
		<p className='error-warning' data-testid="error-warning">{error}</p>
	)
}
