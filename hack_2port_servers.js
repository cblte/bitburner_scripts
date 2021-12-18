// get_started_after_installing_augmentation.script
// run this after you installed new augmentations

// save this file as '.script'

var servers2Port = [
	'silver-helix',
	'phantasy',
	'omega-net'
];

// wait until we have the 'FTPCrack.exe' that we need for
// breaking the second port
while (!fileExists('FTPCrack.exe', 'home')) {
	sleep(60000);
}

// hack 2 level servers
for (var i = 0; i < servers2Port.length; i++) {
	var serv = servers2Port[i];
	
	scp('hack_phantasy.script', serv);
	
	var maxRam = getServerMaxRam(serv);
	var scriptRam = getScriptRam('hack_phantasy.script', 'home');
	threads = maxRam / scriptRam;
	threads = Math.floor(threads);

	brutessh(serv);
	ftpcrack(serv);
	nuke(serv);
	exec('hack_phantasy.script', serv, threads);
}
