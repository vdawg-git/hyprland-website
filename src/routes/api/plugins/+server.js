import { json } from '@sveltejs/kit'
import pluginsJson from '../../../content/plugins.json'

/** Get the plugins of the `content/plugins/` directory */
async function getPlugins() {
	const plugins = pluginsJson
		.sort(
			(a, b) =>
				(b.featured ?? 0) - (a.featured ?? 0) ||
				(b.weight ?? 0) - (a.weight ?? 0) ||
				((b.logo && 1) ?? 0) - ((a.logo && 1) ?? 0) ||
				((b.banner && 1) ?? 0) - ((a.banner && 1) ?? 0)
		)

	return plugins
}

export async function GET() {
	const news = await getPlugins()
	return json(news)
}
