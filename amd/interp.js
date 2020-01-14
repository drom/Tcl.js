/*jslint plusplus: true, white: true, nomen: true */
'use strict';

var CoreInterp = require('./coreinterp.js');
var ex_core_cmds = require('./ex_core_cmds.js');

function Interp(){
	var args = Array.prototype.slice.call(arguments), i,
		I = new CoreInterp();
	ex_core_cmds.install(I);
	for (i=0; i<args.length; i++) {
		args[i].install(I);
	}
	return I;
};

module.exports = Interp;
