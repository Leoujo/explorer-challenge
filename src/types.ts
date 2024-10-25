export interface Data {
	name: string,
	files: File[]
}

export interface File {
	type: string
	icon?: JSX.Element;
	name: string
	children?: File[]

}