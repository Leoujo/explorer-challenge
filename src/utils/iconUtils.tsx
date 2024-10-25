import DefaultFile from '../assets/icons/defaultFile';
import GitFile from '../assets/icons/gitFile';
import YarnFile from '../assets/icons/yarnFile';
import JsonFile from '../assets/icons/jsonFile';
import ReadmeFile from '../assets/icons/readmeFile';
import CssFile from '../assets/icons/cssFile';
import JsFile from '../assets/icons/jsFile';

export const getFileIcon = (name: string) => {
  if (name.includes('.css')) {
    return <CssFile />;
  } else if (name.includes('.js')) {
    return <JsFile />;
  } else if (name.includes('.git')) {
    return <GitFile />;
  } else if (name.includes('README.md')) {
    return <ReadmeFile />;
  } else if (name.includes('yarn')) {
    return <YarnFile />;
  } else if (name.includes('.json')) {
    return <JsonFile />;
  }
  return <DefaultFile />;
};

