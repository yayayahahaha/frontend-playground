# Frotnend Playground

> Haven't decide what this project is going to do

### How this project started step by step

```bash
pnpm create vite
# Then follow the command, input project name, then select 'vue' and 'typescript'.

cd [project-name]

# Add prettier and eslint
pnpm install prettier eslint --save-dev

# Touch their config
pnpm create @eslint/config
touch .prettierrc.js # It's empty now

# Add .node-version file to set NodeJs version, only work when we install fnm
echo 16 > .node-version
```

> Content of `.prettierrc.js` please have a look at [here](https://github.com/yayayahahaha/sublime-fetch/blob/master/.prettierrc.js)

> NodeJs version management: [https://github.com/Schniz/fnm](https://github.com/Schniz/fnm)

Then modified `vite.config.ts` file, add server attribute:

```javascript
// In defineConfig function parameters object
// ...
server: {
  open: true,
  port: 7777,
}
// ...
```

Finally, happy hunting

```bash
pnpm dev
```

> [http://localhost:7777/](http://localhost:7777/)

Don't forget to save them into git

```bash
git init
git add :/
git commit -m init
```

#### QA

##### [Parsing error: '>' expected.](./forget/eslint-parsing-error/eslint-parsing-error.md)

##### [Cannot Jump to Vue file in typescript file](./forget/ts-lsp-setting/ts-lsp-setting.md)
