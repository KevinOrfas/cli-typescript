const menus = {
	main: `
      driftrock [command] <options>
  
      most_sold           .............. shows the name of the most sold item
      total_spend [email] .............. shows the total spend of the user with this email address
      most_loyal          .............. shows the email address of the most loyal user (most purchases)
      
      version              ............... shows package version
      help                 ............... shows help menu for a command`
};

export default (args: any) => {
	const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

	console.log(menus[subCmd] || menus.main);
};
