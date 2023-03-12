<center>
    <img src="https://user-images.githubusercontent.com/13007891/210392977-03a3b140-ec63-4ce9-b6e3-0a0f7cac6cbe.png" width="50%">
    <h1>Civetman</h1>
    <p>Use Civet in any project.</p>
</center>

Civet is not working with many different bundlers? Bad integration with pure TypeScript files? No problem!

## Usage

First install npm package `civetman` (e.g. `pnpm add civetman`). Then, add `civetman dev` to your `dev` or `start` script in `package.json`, add `civetman build` to your build script. Now you can use `.civet` files. All the imports don't need the suffix `.civet` anymore, meaning that `.civet` files are treated the same as TypeScript files.

## How it works

When you run `pnpm civetman build` (the same as `npx civetman build`), Civetman will collect all the `.civet` files and build them into TypeScript with the Civet compiler. Then, Civetman will create a `<name>.ts` file beside each `.civet` file. That is why you can import Civet files just like TypeScript files, since they ARE literally just TypeScript files.

What? You can't see the `.ts` files generated? That's because Civetman automatically put all the generated `.ts` files into the `files.exclude` in the `.vscode/settings.json` file. Then VSCode will hide all the bundled files in the file explorer. Those files are also added to `.gitignore` so that they won't be included by Git.

`civetman dev` is basically just building your files when they are changed.
