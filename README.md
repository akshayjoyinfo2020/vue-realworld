# realworld-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


https://www.youtube.com/watch?v=Jt8mgR5LUEg&list=PLl4Y2XuUavmtPZCKAth-Ktqtpy62vjNe3&index=3

https://www.youtube.com/watch?v=K64S2WrclJ0&list=PLl4Y2XuUavmtPZCKAth-Ktqtpy62vjNe3&index=4

Say you have a github project and you want to host it on netlify. I’ am just kidding. You are here because you want to host it using github pages.Please follow carefully the following steps:
Create a new local branch in your project and name it ‘gh-pages’.
Go to github and copy the name of the repository. Let’s assume the repository name is ‘my-first-project’
Create a new file in root directory of your project and name it ‘vue.config.js’. Why this name? Check out here why.
In ‘vue.config.js’ file paste the following code:
// vue.config.js
module.exports = {
publicPath: ‘/my-first-project/’
}
Find and open the file .gitignore located in root directory of your project.Next, find and comment the line which has the text ‘/dist’.
NOTE: this folder it’s ignored by default that’s why we have to comment it.
Run npm run build, and wait for it to finish.
IMPORTANT!! Before you run the next command make sure you don’t commit the .gitignore and vue.config.js.
Run the command: git add dist && git commit -m "Initial dist subtree commit"
Run the command: git subtree push --prefix dist origin gh-pages
Navigate to github on your browser and open your repository. Next click ‘Settings’ just like it is displayed below.
