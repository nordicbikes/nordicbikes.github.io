```command
  npm install
  npm run build
```

## Bug in current Grommet version
For cards to render, edit node_modules/remark-parse/lib/defaults.js

```command
blocks: require('./block-elements'),
```
to
```command
blocks: require('./block-elements.json'),
```

