const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/javascripts/main.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "javascripts/main.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          // cssファイルとして別ファイルに出力する
          MiniCssExtractPlugin.loader,

          // cssをCommonJS形式に変換してjavaScriptで扱えるようにする
          "css-loader",
          {
            // PostCSSでcssを処理する
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                // ベンダープレフィックスを自動付与する
                plugins: [require("autoprefixer")({ grid: true })],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"), // ここで `dart-sass` を読み込んでいる
              // sassOptions: {
              //   fiber: require(`fibers`), // 大体の人がなんとなく一緒に読み込んでいる
              // },
            },
          },
        ],
      },
      {
        test: /\.png|\.jpg|\.svg/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./stylesheets/main.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/index.pug",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/member/index.pug",
      filename: "member/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
