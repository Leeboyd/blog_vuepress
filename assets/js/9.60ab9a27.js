(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{63:function(t,e,s){"use strict";s.r(e);var r=s(0),n=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("連結是之前參考過的設定方式，已經夠簡潔，雖然現在有更簡單的方式了，但還是從中可學習到原理")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/diafygi/acme-tiny",target:"_blank",rel:"noopener noreferrer"}},[t._v("acme-tiny"),s("OutboundLink")],1)])]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("是一家 Certificate Authority, CA, 免費提供 TLS/SSL 憑證，")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("如果想支持他們，可以 "),s("a",{attrs:{href:"https://letsencrypt.org/donate/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Donate"),s("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("照著網站做吧")]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("簡單說明網站的步驟：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("當然如果怕怕的，也可以跟 certbot 說要手動去編輯")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("Let's Encrypt 憑證 3 個月過期，要怎樣設定自動定期去更新呢？")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),s("p",[t._v("也就是 cron is a daemon which runs at the times of system boot.")]),t._v(" "),s("p",[t._v("指令格式：")]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("方便的查詢工具："),s("a",{attrs:{href:"https://crontab.guru",target:"_blank",rel:"noopener noreferrer"}},[t._v("crontab.guru"),s("OutboundLink")],1)]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("簡單來說，crontab 是一個安排 cronjob 的檔案。")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),s("hr",{staticClass:"footnotes-sep"}),t._v(" "),s("section",{staticClass:"footnotes"},[s("ol",{staticClass:"footnotes-list"},[s("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[s("p",[s("a",{attrs:{href:"https://stackoverflow.com/questions/21615673/difference-between-cron-crontab-and-cronjob?rq=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Difference between cron, crontab, and cronjob?"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"https-設定-let-s-encrypt-and-certbot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https-設定-let-s-encrypt-and-certbot","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTPS 設定 (Let's Encrypt and certbot)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"tags-https-cron-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tags-https-cron-nginx","aria-hidden":"true"}},[this._v("#")]),this._v(" tags: "),e("code",[this._v("https")]),this._v(", "),e("code",[this._v("cron")]),this._v(", "),e("code",[this._v("nginx")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"老方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#老方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 老方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"let-s-encrypt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#let-s-encrypt","aria-hidden":"true"}},[this._v("#")]),this._v(" Let's Encrypt")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Authority")]),this._v(" "),e("p",[this._v("一種信任機制，當你向 Authority 註冊某 domain 成功後，Authority 會幫你這句話背書：「你是這個 domain 的擁有者」")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"certbot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#certbot","aria-hidden":"true"}},[this._v("#")]),this._v(" certbot")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/44891368/53820889-a8777480-3fa7-11e9-8dbd-3f9a55780186.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Add the certbot respository")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:certbot/certbot\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Install certbot with nginx plugin")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("$ sudo apt-get install certbot python-certbot-nginx \n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("Use certbot to get certificate")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("厲害的來了，剛剛裝的 certbot 因為有 nginx 的 plugin，所以執行這一段指令後，會出現一些互動問答，然後 certbot "),e("strong",[this._v("自動")]),this._v(" 幫你編輯好 nginx config 的相關設定，並幫你跟 CA 進行交握，取得憑證。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("$ sudo certbot --nginx\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("這也是這篇沒有寫要如何編輯 nginx config 的原因，因為 certbot 幫你做完了")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("$ sudo certbot --nginx certonly\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"憑證維護"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#憑證維護","aria-hidden":"true"}},[this._v("#")]),this._v(" 憑證維護")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cron"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cron","aria-hidden":"true"}},[this._v("#")]),this._v(" cron")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("根據 "),e("code",[this._v("man")]),this._v(":")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("NAME\n       cron - daemon to execute scheduled commands (Vixie Cron)\n\nSYNOPSIS\n       cron [-f] [-l] [-L loglevel]\n\nDESCRIPTION\n       cron is started automatically from /etc/init.d on entering multi-user runlevels.\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://smhttp-nex.nexcesscdn.net/803313/static/images/blog/2014-01-30/cron-job.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"crontab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crontab","aria-hidden":"true"}},[this._v("#")]),this._v(" crontab")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("crontab (CRON TABle) is a file which contains the schedule of cron entries to be run and at specified times."),e("sup",{staticClass:"footnote-ref"},[e("a",{attrs:{href:"#fn1",id:"fnref1"}},[this._v("[1]")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/44891368/53824975-335c6d00-3fb0-11e9-983c-0cd1ef936c12.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("# At 00:00 on day-of-month 1 in every 3rd month\n00 00 1 */3 * certbot renew\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("咦？*/3 不是 4 嗎？應該是每四個月吧？不是喔，這裡的邏輯比較像："),e("code",[this._v("if (12 % 3 == 0): run_script()")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("不需要 sudo")]),t._v(" "),s("p",[t._v("根據 "),s("code",[t._v("man")]),t._v(":")]),t._v(" "),s("p",[t._v("NAME\ncrontab - maintain crontab files for "),s("mark",[t._v("individual users")]),t._v(" (Vixie Cron)")]),t._v(" "),s("p",[t._v("每個 user 有自己的 crobtab，權限屬於 user 自己，如果使用 sudo 的話，會要求輸入密碼，這時候自動化執行就會失效了")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[e("span",{staticClass:"prev"},[this._v("\n      ← "),e("a",{staticClass:"prev router-link-active",attrs:{href:"/blog_vuepress/articles/"}},[this._v("\n          回文章列表\n        ")])])])])}],!1,null,null,null);e.default=n.exports}}]);