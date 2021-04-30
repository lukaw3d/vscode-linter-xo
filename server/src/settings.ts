export interface Settings {
	xo: {
		enable: boolean;
		options: any;
		overrideSeverity?: 'off' | 'info' | 'warn' | 'error';
	};
	[key: string]: any;
}
