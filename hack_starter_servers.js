// get_started_after_installing_augmentation.script
// run this after you installed new augmentations

// save this file as '.script' in the game

var servers0Port = [
	'foodnstuff',
	'sigma-cosmetics',
	'joesguns',
	'nectar-net',
	'hong-fang-tea',
	'harakiri-sushi'
];

var servers1Port = [
	'neo-net',
	'zer0',
	'max-hardware',
	'iron-gym'
];

// hack 0 level servers
for (var i = 0; i < servers0Port.length; i++) {
	var serv = servers0Port[i];

	scp('hack_n00dles.script', serv);
	nuke(serv);
	exec('hack_n00dles.script', serv, 6);
}

// wait until we have the 'BruteSSH.exe' that we need for
// breaking the first port
while (!fileExists('BruteSSH.exe', 'home')) {
	sleep(60000);
}

// hack 1 level servers
for (var i = 0; i < servers1Port.length; i++) {
	var serv = servers1Port[i];

	scp('hack_joesguns.script', serv);
	brutessh(serv);
	nuke(serv);
	exec('hack_joesguns.script', serv, 12);
}
