import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("/mock/articles", () => {
    return HttpResponse.json({
      articles: [
        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },
        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },
        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },
        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },

        {
          href: "hello",
          src: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
          alt: "",
          title: "The Bank of England Risks Hiking Too Far Ahead",
          readingTime: 4,
          createdAt: "2023/09/08",
        },
      ],
    });
  }),
  http.get("/mock/articles/*", () => {
    return HttpResponse.json({
      content: `# 日本語フェイクニュースデータセット

## 日本語フェイクニュースデータセット

### 日本語フェイクニュースデータセット

#### 日本語フェイクニュースデータセット
日本語のニュース記事と、[GPT-2日本語版](https://github.com/tanreinama/gpt2-japanese)のモデルで生成された、ディープフェイク記事からなるデータセットです。
    
内容は、[クリエイティブ・コモンズ（改変可）](https://creativecommons.jp/)ライセンスで公開されている、[ウィキニュース日本語版](https://ja.wikinews.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8)の記事と、[GPT-2日本語版](https://github.com/tanreinama/gpt2-japanese)のモデルが生成したディープフェイク記事を合わせた、混合コーパスです。

全てのデータは、オリジナルの記事かフェイク記事であるかのタグがつけられており、

- オリジナルの記事（人間が執筆した）
- 部分的にフェイク（記事の後半をGPT-2モデルが生成した）
- 完全にフェイク（記事の全体をGPT-2モデルが生成した）

のいずれかに該当します。



CSVファイルのコラムは、以下の通りです。

| コラム名   | 意味   |
| ---------- | ------------------------------------------------------------ |
| id   | ユニークID   |
| context    | 記事の文章（UTF-8エンコード）  |
| isfake     | 記事がフェイクであるかどうかのタグ：<br />0：オリジナルの記事<br />1：部分的にフェイク<br />2：完全にフェイク |
| nchar_real | 記事の中の、人間が執筆した部分の文字数     |
| ncahr_fake | 記事の中の、モデルが生成した部分の文字数   |



[ウィキニュース日本語版](https://ja.wikinews.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8)は、「[クリエイティブ・コモンズ](https://ja.wikipedia.org/wiki/クリエイティブ・コモンズ)-表示-2.5 [CC-by-2.5](https://creativecommons.org/licenses/by/2.5/deed.ja)  以降」（ただし2005年9月24日までに投稿されたものは「[クリエイティブ・コモンズ](https://ja.wikipedia.org/wiki/クリエイティブ・コモンズ)-表示-2.1-日本 以降」([CC-by-2.1-jp](https://creativecommons.org/licenses/by/2.1/jp/)  or later)）で公開されているため、記事を改編して、「途中までオリジナルで、残りはAIが生成した記事」というデータを作成することが出来ます。

「部分的にフェイク」な記事は、途中まで[ウィキニュース日本語版](https://ja.wikinews.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8)のオリジナル記事で、途中からAIが生成した記事で置き換えられたものです。

このデータセットは、フェイクニュースを検出するAIの開発のために作成されました。

使用したGPT-2モデルは、[GPT-2日本語版](https://github.com/tanreinama/gpt2-japanese)プロジェクトが公開しているmediumモデルそのままで、専用のファインチューニング等は行っていません。

[ウィキニュース日本語版](https://ja.wikinews.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8)に特徴的な、「新聞によると～」のような接頭詞は、モデルとは別に追加されました。



# Japanese FakeNews Dataset

~~~typescript
const a = "Hello"
~~~


This dataset consists of news articles in Japanese and deep fake articles generated by the [GPT-2 Japanese](https://github.com/tanreinama/gpt2-japanese) model.

This is a mixed corpus, consisting of the original articles are from the [Japanese version of Wikinews](https://ja.wikinews.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8), which is released under a [Creative Commons (modification allowed)](https://creativecommons.org/) license and the data generated by the [GPT-2 Japanese](https://github.com/tanreinama/gpt2-japanese) model.

All data will be tagged as either original or fake articles and will fall into one of the following categories.

- Original article (written by humans)
- Partially fake (the second half of the article was generated by the GPT-2 model)
- Completely fake (the entire article was generated by the GPT-2 model)



The columns in the CSV file are as follows.

| Column name | Meaning|
| ----------- | ------------------------------------------------------------ |
| id    | unique ID    |
| context     | text of the article (UTF-8 encoded)  |
| isfake| Tag whether the article is fake or not: <br />0: Original article <br />1: Partially fake <br />2: Completely fake |
| nchar_real  | Number of characters in the human-authored part of the article. |
| ncahr_fake  | Number of characters in the model-generated part of the article. |

~~~typescript
console.log('Hello World')
~~~

Since the  [Japanese version of Wikinews](https://ja.wikinews.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8) is published under "[Creative Commons](https://en.wikipedia.org/wiki/Creative_Commons) Attribution 2.5 Generic ([CC BY 2.5](https://creativecommons.org/licenses/by/2.5/deed.en))" (however, articles posted before September 24, 2005 are published under "[Creative Commons](https://en.wikipedia.org/wiki/Creative_Commons) Attribution 2.1 Japan ([CC BY 2.1 JP](https://creativecommons.org/licenses/by/2.1/jp/deed.en))"), it is possible to revise an article and create a data set that is "original until the middle, and the rest of the article is AI-generated".

The "Partially fake" article contains original articles on  [Japanese version of Wikinews](https://ja.wikinews.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8) until halfway through, when it is replaced by an AI-generated article.

This data set was created for the development of an AI to detect fake news.

The GPT-2 model used is the same as the medium model published by the [GPT-2 Japanese](https://github.com/tanreinama/gpt2-japanese) project, and no special fine tuning was done.

The prefix "新聞によると～", which is characteristic of the [Japanese version of Wikinews](https://ja.wikinews.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8), has been added independently of the model.
`,
    });
  }),
];
