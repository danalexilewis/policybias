import { renderToStaticMarkup } from 'react-dom/server';
import { translate } from '../i18n/messages';
import { ChromeLangPicker } from './ChromeLangPicker';
import { Topbar } from './Topbar';

type RenderTopbarHtmlArgs = {
	path: string;
	github?: boolean;
};

/** Static HTML for the shared topbar on chrome pages. */
export function renderTopbarHtml({ path, github = false }: RenderTopbarHtmlArgs): string {
	return renderToStaticMarkup(
		<Topbar homeLabel={translate('en', 'home')} github={github} ruled>
			<ChromeLangPicker path={path} />
		</Topbar>
	).replace(/<link rel="preload"[^>]*>/g, '');
}
