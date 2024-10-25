import React from 'react'
import FileGroup from '../FileGroup'
import FileItem from '../FileItem'
import GitFile from '../../assets/icons/gitFile'
import YarnFile from '../../assets/icons/yarnFile'
import JsonFile from '../../assets/icons/jsonFile'
import ReadmeFile from '../../assets/icons/readmeFile'
import { Data } from '../../types'
import CssFile from '../../assets/icons/cssFile'
import JsFile from '../../assets/icons/jsFile'


export default function ProjectExplorer() {
	const data: Data = {
		name: "MY PROJECT",
		files: [
			{
				type: "folder",
				name: "config",
				children: []
			},
			{
				type: "folder",
				name: "public",
				children: []
			},
			{
				type: "folder",
				name: "src",
				children: [
					{
						type: "folder",
						name: "components",
						children: [
							{
								type: "file",
								icon: <CssFile />,
								name: "Button.css",
							},
							{
								type: "file",
								icon: <JsFile />,
								name: "Button.js",
							},
						]
					},
					{
						type: "folder",
						name: "helpers",
						children: [
							{
								type: "file",
								icon: <JsFile />,
								name: "analytics.js",
							},
							{
								type: "file",
								icon: <JsFile />,
								name: "validation.js",
							},
						]
					},
				]
			},
			{
				type: "file",
				name: ".env.development",
				children: []
			},
			{
				type: "file",
				icon: <GitFile />,
				name: ".gitignore",
				children: []
			},
			{
				type: "file",
				name: ".node-version",
				children: []
			},
			{
				type: "file",
				name: "CONTIBUTING.md",
				children: []
			},
			{
				type: "file",
				icon: <ReadmeFile />,
				name: "README.md",
				children: []
			},
			{
				type: "file",
				icon: <JsonFile />,
				name: "package.jsn",
				children: []
			},
			{
				type: "file",
				icon: <YarnFile />,
				name: "yarn.lock",
				children: []
			}
		]
	}
	return (
		<div className='projectView'>
			<div className='projectViewHeader'>{data.name}</div>
			<div className='padding'>
				{data.files.map((file) => {
					if (file.type === "file") {
						return <FileItem name={file.name} icon={file.icon} />
					}
					return <FileGroup name={file.name} children={file.children} />
				})}

			</div>
		</div>
	)
}