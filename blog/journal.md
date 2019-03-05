---
sidebar: auto
---

# Daily Journal

> "Long-term consistency trumps short term intensity" - Bruce Lee.


## 2019

## March 6

#### 昨日預計事項

- [x] Sprint P2.1 實習 (30%)
    
    還未開始寫呢，只看 code 而已
- [ ] IIA 測試碼 1.2
- [x] https 憑證自動更新 (EC2 測試機)

#### 昨日額外完成事項

#### 今日預計事項

1. IIA `PRO003`, `PRO004`

#### 日誌


## March 5 🌦 ☕️ 🗣

#### 昨日預計事項

- [x] DevOps Roadmap 2
- [x] IIA 開發流程熟悉
- [ ] IIA 測試碼 1.2

#### 昨日額外完成事項

- [x] EC2 安全性檢查

#### 今日預計事項

1. Sprint P2.1 實習
2. IIA 測試碼 1.2
    - [x] 看
    - [ ] 跑跑看 (還未知指令)
    - [ ]  (預計) 整進 pipeline
3. https 憑證自動更新 (EC2 測試機)

#### 日誌

1. Sprint P2.1 實習

    a. 看了 Bob 的 [PR](https://github.com/Venture-G/iia-backend/pull/190#issue-258178651) 描述，包含：
      * Route
      * Function
      * Class
      * Related issue
      
    b. form 層層驗證的問題
    :::tip TODO
    再想想看怎麼寫比較好
    :::
      表單驗證邏輯是，有多層就要寫個 clean_xx，clean_xx 就是我誤以為沒有用的 prop
      
        `procurement = forms.CharField() <---> self.clean_data["procurement"]`
      
      要覆寫這個 prop 就要用 `clean_` 當前綴
    
    c. 會需要 override clean_xxxx 的情況在：
    
      - 要對變數做客製化判斷時 (ex: 參數是 email, 但又必須是 venture-g.com 結尾)
      - 該變數又是一層 json
 
 3. https 憑證自動更新 (EC2 測試機)  

    [筆記連結](/articles/2019-03-05.md)


## March 4 🌤

#### 昨日預計事項

- [x] Blog 開發者日記
- [x] dockerize 開發專案

#### 昨日額外完成事項

#### 今日預計事項

1. DevOps Roadmap 2
2. IIA 開發流程熟悉
3. iia 測試碼 1.2
    - [x] 看
    - [ ] 跑跑看 (還未知指令)
    - [ ]  (預計) 整進 pipeline

#### 日誌

1. DevOps Roadmap 2
    在學習 Proxy 時，也寫了實習計畫的訓練文件
    
    * [文件連結](https://docs.google.com/document/d/17ZmBtxo2prD7uD0T2HJlhAHTBeFBt3zCWumvhFUDg98/edit#)

2. IIA 需求規劃流程
    - [x] PM 規劃需求，開一份文件，包含有哪些 `使用者`、`頁面` 、`功能模組`
    - [x] 前後端去 comment，看有沒有問題
    - [x] 後端看「功能模組」列 user story，規劃預期的 response 和 狀態，接著給前端確認
    - [x] 寫 api doc
    - [x] 寫驗收表
    - [x] 開 github issue

    Sprint 開始
    - [ ] 邏輯可以參考[小知識](https://docs.google.com/document/d/1MSe50nvuj0CF2FsVqoir_5HYrX38Y9kDnIiHcQikNME/edit)
    - [ ] `url.py` 列好所有路徑
    - [ ] `view.py` 先寫好 mock，直接 return 假資料，讓前端可串接
    - [ ] 填 fixture
    
        生出 mock data 後，基本上其他進度就是你自己掌握了
  
## March 3 🌧

#### 昨日預計事項

#### 昨日額外完成事項

#### 今日預計事項

1. Blog 開發者日記
2. dockerize 開發專案

#### 日誌

1. Blog 開發者日記

    為了方便使用 Markdown 語法和搜尋，將原本 Google doc 上的 [Dev_logs](https://docs.google.com/document/d/1kPXVrxFQvm0zyuXSHv1F6Noc5iC-Tb60hguVmpASCqw/edit#) 搬到 [這邊](/journal.md)
  
2. dockerize 開發專案

    [筆記連結](/articles/2019-03-03.md)


## February 26

#### 昨日預計事項

- [x] iia需求規劃流程

#### 昨日額外完成事項

#### 今日預計事項

1. PR 規則
2. iia 測試碼 1.2

#### 日誌

早上 iia-apidoc 兩個 commit 分別 cherry-pick，並發 PR

1. PR 規則
規則是 bob 跟 jerry 規則維持一樣，boy 的 pr 就是 Bob 跟 jerry 都看過之後，Bob 或 Jerry 其中一人 merge 都可以

2. iia 測試碼 1.2
    - [x] 看
    - [ ] 跑跑看 (還未知指令)
    - [ ]  (預計) 整進 pipeline

## February 25

#### 昨日預計事項

#### 昨日額外完成事項

#### 今日預計事項
1. iia需求規劃流程

#### 日誌

1. iia需求規劃流程
PM 會規劃需求，開一份文件，包含有哪些 `使用者`、`頁面` 、`功能模組`
前後端去 comment，看有沒有問題
後端看「功能模組」列 user story，規劃預期的 response 和 狀態，接著給前端確認
前端確認ＯＫ，寫 api doc, 開 github issue, 寫 QA 後端驗收表

## 2018


