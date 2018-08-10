import * as minimist from 'minimist';
import error from './utils/error';

export default () => {
	const args = minimist(process.argv.slice(2));
	let cmd = args._[0] || 'help';

	if (args.version || args.v) {
		if (args.version || args.v) {
			cmd = 'version';
		}

		if (args.help || args.h) {
			cmd = 'help';
		}
	}
	switch (cmd) {
		case 'version': {
			require('./cmds/version').default(args);
			break;
		}

		case 'help': {
			require('./cmds/help').default(args);
			break;
		}

		case 'most_sold': {
			require('./cmds/most_sold').default(args);
			break;
		}

		case 'total_spend': {
			require('./cmds/total_spend').default(args);
			break;
		}

		case 'most_loyal': {
			require('./cmds/most_loyal').default(args);
			break;
		}

		default:
			error(`"${cmd}" is not a valid command!`, true);
			break;
	}
};
