Hooks.on('init', () => {
  game.settings.register('wylies-file-browser-resizer', 'maxHeight', {
    name: 'Max Height',
    hint: 'Set the maximum height of the filepicker directory in pixels.',
    scope: 'client',
    config: true,
    default: 200,
    type: Number,
    onChange: value => {
      document.documentElement.style.setProperty('--wfb-resizer-max-height', `${value}px`);
    }
  });
});

Hooks.on('ready', () => {
  const maxHeight = game.settings.get('wylies-file-browser-resizer', 'maxHeight');
  document.documentElement.style.setProperty('--wfb-resizer-max-height', `${maxHeight}px`);
});
