//form
const check = document.getElementById("contact-check"); //確認ボタンの要素
const rewrite = document.getElementById("contact-rewrite"); //書き直しボタンの要素

const inputTitle = document.querySelectorAll("#contact-title"); //formの各欄のタイトル
const inputText = document.querySelectorAll("#contact-text"); //formの各欄の入力値

const inputClass = document.getElementsByClassName("contact__contents"); //入力画面一覧の要素
const rewriteClass = document.getElementsByClassName("contact__check"); //確認画面一覧の要素
const checkNode = document.querySelectorAll("#check-node"); //確認画面の各項目ごとの要素

const prependTag = "<span class='contact__error'>未入力</span>"; //未入力時に表示
let errorText = new Array(); //未入力か判別するための配列(0の時はtrue、1の時はerror)
for (let i = 0; i < inputTitle.length; i++) {
  errorText[i] = 0;
}

const matchKana = /^[ァ-ヶ ｦ-ﾟ　]*$/; //カタカナ入力チェック
const matchMail = /^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/; //メールアドレスチェック
const matchNumber = /^0\d{9,10}$/; //電話番号チェック

//「お問い合わせ」の位置にスクロールする関数
const scrollContact = () => {
  const target = document.querySelector(".contact");
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default () => {
  //確認ボタンクリック時に発火
  check.onclick = () => {
    let error = true; //エラーが出た場合はfalse

    //フォーム項目が未記入か判別
    for (let i = 0; i < inputTitle.length; i++) {
      const errorTest = inputTitle[i].getElementsByClassName(".contact__error");
      //未入力時に発火
      if (inputText[i].value == "") {
        error = false;
        //errorText[i]が1の時は「未記入」を表示、0は非表示
        if (errorText[i] == 0) {
          errorText[i] = 1;
          //エラーの項目に「未入力」と表示する要素を挿入
          inputTitle[i].insertAdjacentHTML("afterbegin", prependTag);
        }
      } else {
        errorText[i] = 0;
        //入力済の場合「未記入」という表示を削除
        if (inputTitle[i].querySelector(".contact__error") != null) {
          inputTitle[i].querySelector(".contact__error").remove();
        }
      }
    }

    //エラーがなければ確認画面へ推移
    if (error) {
      //入力値を出力画面に代入
      for (let i = 0; i < inputTitle.length; i++) {
        checkNode[i].querySelector("#check-text").textContent = inputText[i].value;
      }

      //入力画面を非表示、確認画面を表示する
      inputClass[0].classList.add("utils-hidden");
      rewriteClass[0].classList.remove("utils-hidden");

      //「お問い合わせ」にスクロールする関数
      scrollContact();
    } else {
      //「お問い合わせ」にスクロールする関数
      scrollContact();
    }
  };

  //書き直しボタンクリック時に発火
  rewrite.onclick = () => {
    //確認画面に代入した項目を空にする
    for (let i = 0; i < inputTitle.length; i++) {
      checkNode[i].querySelector("#check-text").textContent = "";
    }

    //確認画面を非表示、入力画面を表示する
    rewriteClass[0].classList.add("utils-hidden");
    inputClass[0].classList.remove("utils-hidden");

    //「お問い合わせ」にスクロールする関数
    scrollContact();
  };

  //送信ボタンクリック時に発火
  document.getElementById("form").addEventListener("submit", (e) => {
    //入力値を配列に格納
    const sendName = new Array(); //name(entryの数値)を格納する配列
    const sendText = new Array(); //上記に入力した内容を格納する配列
    for (let i = 0; i < inputTitle.length; i++) {
      sendName[i] = inputText[i].name;
      sendText[i] = inputText[i].value;
    }

    //配列をURLに変換
    const sendUrl = new Array();
    for (let i = 0; i < inputTitle.length; i++) {
      sendUrl.push(sendName[i]);
      sendUrl.push("=");
      sendUrl.push(sendText[i]);
      sendUrl.push("&");
    }

    //入力内容を送信
    const form_iframe = document.createElement("iframe");
    form_iframe.src = encodeURI(`https://docs.google.com/forms/d/e/1FAIpQLScbCbCslJDLEkGrG-sv7nIg10CrGw2kqnSLEjA_Wa8yATOARQ/formResponse?${sendUrl.join("")}submit=Submit`);
    form_iframe.style.display = "none";
    document.getElementById("form").appendChild(form_iframe);
    document.getElementById("form").style.display = "none";

    //送信完了画面表示
    const prependMessage = "<span>入力ありがとうございました。</span>";
    document.querySelectorAll(".contact__form")[0].insertAdjacentHTML("afterbegin", prependMessage);
    e.preventDefault();
  });
};
