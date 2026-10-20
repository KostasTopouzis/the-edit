# General Instructions

## Git 

- Add a more verbose description after the short message only for great, multi-step changes.
- Wrap description in 72 characters maximum to follow best practices.

## Changelog folder

This folder contains .txt files. Each file is a changelog devoted to a specific project aspect (as you can infer from its title). Before each git commit update ONLY the log most fitting to the nature of the changes with a synopsis of the newest changes.

Format:

```
vx.x.x: entry title | current timestamp

- filename: short description of changes.
- filename2: etc.
... 
```

If the version number has changed, update it in `package-lock.json` and `package.json` as well, and remind me to update the `README.md`.
