# couragetodo
欠席回数をカウントできるアプリです。

# 機能一覧
1. CRUD機能
2. ページ遷移機能(予定)
3. データ永続化機能
# 技術一覧
言語. Js
FW  Vue
DB jsのlocalStorage機能
デプロイツール　NetlifyのCDを使ってpush直後に自動デプロイ

# 現状の予定　
vuex化する、
➀templateJsonメソッドをミューテーションメソッドで使いましたいが、this.templateJson()だと、エラーで使えないのでなんとかしたい。
=> templateJsonメソッドのみをvuexで定義して、それ以外はローカルで使用してみる。
➁ モジュールモードで分割
# 結論
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
