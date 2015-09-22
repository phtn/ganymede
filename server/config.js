ServiceConfiguration.configurations.remove({ service: ['google','facebook'] });

ServiceConfiguration.configurations.upsert(
	{	service: 'google'},
	{	$set: {
		clientId: '230395543069-8674h152noei4gcvm80456fe0nkbmn41.apps.googleusercontent.com',
		secret: 'jExGDi-ITI1jo0ctVvOkXgaW'
	}	}
);

ServiceConfiguration.configurations.upsert(
	{	service: 'facebook'},
	{	$set: {
		appId: '476577425848568',
		secret: 'de966a11633658a7ae0cf0979941477d'
	}	}
);
