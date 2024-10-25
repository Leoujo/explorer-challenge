import X from "../../assets/icons/x";

interface DeleteIconProps {
	id: string;
	deleteDataById: (id: string) => void;
}

export default function DeleteIcon({ id, deleteDataById }: DeleteIconProps) {
	return (
		<div className='iconOnHover' onClick={() => deleteDataById(id)}>
			<X />
		</div>
	)
}
