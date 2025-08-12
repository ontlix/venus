const colors = {
	fore: [
		'red',
		'orange',
		'amber',
		'yellow',
		'lime',
		'green',
		'emerald',
		'teal',
		'cyan',
		'sky',
		'blue',
		'indigo',
		'violet',
		'purple',
		'fuchsia',
		'pink',
		'rose',
		'primary',
		'success',
		'warning',
		'danger'
	] as const,
	back: ['slate', 'gray', 'zinc', 'neutral', 'stone'] as const
};

export type Color = (typeof colors.fore)[number] | (typeof colors.back)[number];
