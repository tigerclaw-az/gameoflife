module.exports = {
	main: {
		options: {
			updateType: 'prompt', //just report outdated packages
			reportUpdated: true, //don't report already updated packages
			semver: false, //use package.json semver rules when updating
			packages: { //what packages to check
				devDependencies: true, //only devDependencies
				dependencies: false
			},
			packageJson: null //find package.json automatically
		}
	}
};
