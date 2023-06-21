Hooks.on('init', () => {
  game.settings.register('subfolder-indent', 'indent', {
    name: 'Indent',
    hint: 'Set the amount to index each subfolder in pixels.',
    scope: 'client',
    config: true,
    default: 12,
    type: Number,
    onChange: value => {
      document.documentElement.style.setProperty('--subfolder-indent', `${value}px`);
    }
  });
});

Hooks.on('ready', () => {
  const indent = game.settings.get('subfolder-indent', 'indent');
  document.documentElement.style.setProperty('--subfolder-indent', `${indent}px`);
});
