# couragetodo
さぼり回数をカウントできるアプリです。

# 現状の予定　
vuex化する、
➀templateJsonメソッドをミューテーションメソッドで使いましたいが、this.templateJson()だと、エラーで使えないのでなんとかしたい。
=> templateJsonメソッドのみをvuexで定義して、それ以外はローカルで使用してみる。
➁モジュールモードにして分割したい。
# ➀を調べた結果
どうやらmutationハンドラ内(vuexのメソッド)をthisを使って使いまわしすることは出来なかった。しかし、storeでミューテーション経由のアクションを定義してコンポーネントで使用する場合はthisを使うことが出来た。しかし、今回の成果物はコンポーネント間のやり取りが実質要らなかったので、コードが冗長になるだけだった。しかし、vuexのいい勉強になった。


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
