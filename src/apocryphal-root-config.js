import { registerApplication, start } from 'single-spa';

registerApplication({
	name: '@apocryphal/dashboard-shell',
	app: () => System.import('@apocryphal/dashboard-shell'),
	activeWhen: [() => true],
});

// registerApplication({
//   name: "@apocryphal/navbar",
//   app: () => System.import("@apocryphal/navbar"),
//   activeWhen: ["/"]
// });

start({
	urlRerouteOnly: true,
});
