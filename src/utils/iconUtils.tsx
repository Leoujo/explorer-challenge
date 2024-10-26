import DefaultFile from '../assets/icons/defaultFile';
import GitFile from '../assets/icons/gitFile';
import YarnFile from '../assets/icons/yarnFile';
import JsonFile from '../assets/icons/jsonFile';
import ReadmeFile from '../assets/icons/readmeFile';
import CssFile from '../assets/icons/cssFile';
import JsFile from '../assets/icons/jsFile';

const fileIconMap: Record<string, JSX.Element> = {
  '.css': <CssFile />,
  '.js': <JsFile />,
  '.git': <GitFile />,
  'README.md': <ReadmeFile />,
  'yarn': <YarnFile />,
  '.json': <JsonFile />,
};

// Follows the Open/Closed SOLID principle (should be able to extend without modifying its structure
export const getFileIcon = (name: string): JSX.Element => {
  const matchedIcon = Object.keys(fileIconMap).find((key) => name.includes(key));
  return matchedIcon ? fileIconMap[matchedIcon] : <DefaultFile />;
};
