{"filter":false,"title":"script.js","tooltip":"/shop0/app/javascript/script.js","undoManager":{"mark":17,"position":17,"stack":[[{"start":{"row":21,"column":0},"end":{"row":35,"column":5},"action":"insert","lines":["document.addEventListener(\"DOMContentLoaded\", function() {","    const sizeButtons = document.querySelectorAll(\".size-btn\");","    const selectedSizeInput = document.getElementById(\"selected-size\");","","    sizeButtons.forEach(button => {","      button.addEventListener(\"click\", function() {","        // すべてのボタンから選択クラスを削除","        sizeButtons.forEach(btn => btn.classList.remove(\"active\"));","        // クリックされたボタンに選択クラスを追加","        this.classList.add(\"active\");","        // 隠しフィールドにサイズを設定","        selectedSizeInput.value = this.dataset.size;","      });","    });","  });"],"id":2}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":2},"action":"remove","lines":["  "],"id":3},{"start":{"row":23,"column":0},"end":{"row":23,"column":2},"action":"remove","lines":["  "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":2},"action":"remove","lines":["  "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":2},"action":"remove","lines":["  "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":2},"action":"remove","lines":["  "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":2},"action":"remove","lines":["  "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":2},"action":"remove","lines":["  "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":2},"action":"remove","lines":["  "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":2},"action":"remove","lines":["  "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":2},"action":"remove","lines":["  "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":2},"action":"remove","lines":["  "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"remove","lines":["  "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":21,"column":0},"end":{"row":35,"column":3},"action":"remove","lines":["document.addEventListener(\"DOMContentLoaded\", function() {","  const sizeButtons = document.querySelectorAll(\".size-btn\");","  const selectedSizeInput = document.getElementById(\"selected-size\");","","  sizeButtons.forEach(button => {","    button.addEventListener(\"click\", function() {","      // すべてのボタンから選択クラスを削除","      sizeButtons.forEach(btn => btn.classList.remove(\"active\"));","      // クリックされたボタンに選択クラスを追加","      this.classList.add(\"active\");","      // 隠しフィールドにサイズを設定","      selectedSizeInput.value = this.dataset.size;","    });","  });","});"],"id":4}],[{"start":{"row":21,"column":0},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":22,"column":0},"end":{"row":23,"column":0},"action":"insert","lines":["",""]},{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":24,"column":0},"end":{"row":50,"column":5},"action":"insert","lines":["  document.addEventListener(\"DOMContentLoaded\", function() {","    const sizeButtons = document.querySelectorAll(\".size-btn\");","    const selectedSizeInput = document.getElementById(\"selected-size\");","    const form = document.getElementById(\"add-to-cart-form\");","    const errorMessage = document.getElementById(\"size-error-message\");","","    sizeButtons.forEach(button => {","      button.addEventListener(\"click\", function() {","        // すべてのボタンから選択クラスを削除","        sizeButtons.forEach(btn => btn.classList.remove(\"active\"));","        // クリックされたボタンに選択クラスを追加","        this.classList.add(\"active\");","        // 隠しフィールドにサイズを設定","        selectedSizeInput.value = this.dataset.size;","        // エラーメッセージを非表示に","        errorMessage.style.display = \"none\";","      });","    });","","    form.addEventListener(\"submit\", function(event) {","      if (selectedSizeInput.value === \"\") {","        // サイズが選択されていない場合、フォーム送信をキャンセルしエラーメッセージを表示","        event.preventDefault();","        errorMessage.style.display = \"block\";","      }","    });","  });"],"id":6}],[{"start":{"row":24,"column":1},"end":{"row":51,"column":0},"action":"remove","lines":[" document.addEventListener(\"DOMContentLoaded\", function() {","    const sizeButtons = document.querySelectorAll(\".size-btn\");","    const selectedSizeInput = document.getElementById(\"selected-size\");","    const form = document.getElementById(\"add-to-cart-form\");","    const errorMessage = document.getElementById(\"size-error-message\");","","    sizeButtons.forEach(button => {","      button.addEventListener(\"click\", function() {","        // すべてのボタンから選択クラスを削除","        sizeButtons.forEach(btn => btn.classList.remove(\"active\"));","        // クリックされたボタンに選択クラスを追加","        this.classList.add(\"active\");","        // 隠しフィールドにサイズを設定","        selectedSizeInput.value = this.dataset.size;","        // エラーメッセージを非表示に","        errorMessage.style.display = \"none\";","      });","    });","","    form.addEventListener(\"submit\", function(event) {","      if (selectedSizeInput.value === \"\") {","        // サイズが選択されていない場合、フォーム送信をキャンセルしエラーメッセージを表示","        event.preventDefault();","        errorMessage.style.display = \"block\";","      }","    });","  });",""],"id":9},{"start":{"row":24,"column":0},"end":{"row":24,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":24,"column":0},"end":{"row":50,"column":5},"action":"insert","lines":["  document.addEventListener(\"DOMContentLoaded\", function() {","    const sizeButtons = document.querySelectorAll(\".size-btn\");","    const selectedSizeInput = document.getElementById(\"selected-size\");","    const form = document.getElementById(\"add-to-cart-form\");","    const errorMessage = document.getElementById(\"size-error-message\");","","    sizeButtons.forEach(button => {","      button.addEventListener(\"click\", function() {","        // すべてのボタンから選択クラスを削除","        sizeButtons.forEach(btn => btn.classList.remove(\"active\"));","        // クリックされたボタンに選択クラスを追加","        this.classList.add(\"active\");","        // 隠しフィールドにサイズを設定","        selectedSizeInput.value = this.dataset.size;","        // エラーメッセージを非表示に","        errorMessage.style.display = \"none\";","      });","    });","","    form.addEventListener(\"submit\", function(event) {","      if (selectedSizeInput.value === \"\") {","        // サイズが選択されていない場合、フォーム送信をキャンセルしエラーメッセージを表示","        event.preventDefault();","        errorMessage.style.display = \"block\";","      }","    });","  });"],"id":10}],[{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"remove","lines":["("],"id":11},{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"remove","lines":["$"]}],[{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"remove","lines":[")"],"id":12}],[{"start":{"row":24,"column":0},"end":{"row":24,"column":2},"action":"remove","lines":["  "],"id":13},{"start":{"row":25,"column":0},"end":{"row":25,"column":2},"action":"remove","lines":["  "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":2},"action":"remove","lines":["  "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":2},"action":"remove","lines":["  "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":2},"action":"remove","lines":["  "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":2},"action":"remove","lines":["  "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":2},"action":"remove","lines":["  "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":2},"action":"remove","lines":["  "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":2},"action":"remove","lines":["  "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"remove","lines":["  "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":2},"action":"remove","lines":["  "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":2},"action":"remove","lines":["  "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":2},"action":"remove","lines":["  "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":2},"action":"remove","lines":["  "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":2},"action":"remove","lines":["  "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":2},"action":"remove","lines":["  "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":2},"action":"remove","lines":["  "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"remove","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"remove","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"remove","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"remove","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"remove","lines":["  "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":2},"action":"remove","lines":["  "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":2},"action":"remove","lines":["  "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":18,"column":8},"end":{"row":18,"column":9},"action":"remove","lines":["s"],"id":14}],[{"start":{"row":18,"column":8},"end":{"row":18,"column":9},"action":"insert","lines":["S"],"id":15},{"start":{"row":18,"column":9},"end":{"row":18,"column":10},"action":"insert","lines":["S"]}],[{"start":{"row":18,"column":9},"end":{"row":18,"column":10},"action":"remove","lines":["S"],"id":16}],[{"start":{"row":24,"column":0},"end":{"row":50,"column":3},"action":"remove","lines":["document.addEventListener(\"DOMContentLoaded\", function() {","  const sizeButtons = document.querySelectorAll(\".size-btn\");","  const selectedSizeInput = document.getElementById(\"selected-size\");","  const form = document.getElementById(\"add-to-cart-form\");","  const errorMessage = document.getElementById(\"size-error-message\");","","  sizeButtons.forEach(button => {","    button.addEventListener(\"click\", function() {","      // すべてのボタンから選択クラスを削除","      sizeButtons.forEach(btn => btn.classList.remove(\"active\"));","      // クリックされたボタンに選択クラスを追加","      this.classList.add(\"active\");","      // 隠しフィールドにサイズを設定","      selectedSizeInput.value = this.dataset.size;","      // エラーメッセージを非表示に","      errorMessage.style.display = \"none\";","    });","  });","","  form.addEventListener(\"submit\", function(event) {","    if (selectedSizeInput.value === \"\") {","      // サイズが選択されていない場合、フォーム送信をキャンセルしエラーメッセージを表示","      event.preventDefault();","      errorMessage.style.display = \"block\";","    }","  });","});"],"id":17},{"start":{"row":24,"column":0},"end":{"row":50,"column":5},"action":"insert","lines":["document.addEventListener(\"DOMContentLoaded\", function() {","    const sizeButtons = document.querySelectorAll(\".size-btn\");","    const selectedSizeInput = document.getElementById(\"selected-size\");","    const form = document.getElementById(\"add-to-cart-form\");","    const errorMessage = document.getElementById(\"size-error-message\");","","    sizeButtons.forEach(button => {","      button.addEventListener(\"click\", function() {","        // すべてのボタンから選択クラスを削除","        sizeButtons.forEach(btn => btn.classList.remove(\"active\"));","        // クリックされたボタンに選択クラスを追加","        this.classList.add(\"active\");","        // 隠しフィールドにサイズを設定","        selectedSizeInput.value = this.dataset.size;","        // エラーメッセージを非表示に","        errorMessage.style.display = \"none\";","      });","    });","","    form.addEventListener(\"submit\", function(event) {","      if (selectedSizeInput.value === \"\") {","        // サイズが選択されていない場合、フォーム送信をキャンセルしエラーメッセージを表示","        event.preventDefault();","        errorMessage.style.display = \"block\";","      }","    });","  });"]}],[{"start":{"row":25,"column":0},"end":{"row":25,"column":2},"action":"remove","lines":["  "],"id":18},{"start":{"row":26,"column":0},"end":{"row":26,"column":2},"action":"remove","lines":["  "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":2},"action":"remove","lines":["  "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":2},"action":"remove","lines":["  "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":2},"action":"remove","lines":["  "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":2},"action":"remove","lines":["  "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":2},"action":"remove","lines":["  "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":2},"action":"remove","lines":["  "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"remove","lines":["  "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":2},"action":"remove","lines":["  "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":2},"action":"remove","lines":["  "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":2},"action":"remove","lines":["  "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":2},"action":"remove","lines":["  "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":2},"action":"remove","lines":["  "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":2},"action":"remove","lines":["  "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":2},"action":"remove","lines":["  "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"remove","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"remove","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"remove","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"remove","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"remove","lines":["  "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":2},"action":"remove","lines":["  "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":2},"action":"remove","lines":["  "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":23,"column":0},"end":{"row":50,"column":3},"action":"remove","lines":["","document.addEventListener(\"DOMContentLoaded\", function() {","  const sizeButtons = document.querySelectorAll(\".size-btn\");","  const selectedSizeInput = document.getElementById(\"selected-size\");","  const form = document.getElementById(\"add-to-cart-form\");","  const errorMessage = document.getElementById(\"size-error-message\");","","  sizeButtons.forEach(button => {","    button.addEventListener(\"click\", function() {","      // すべてのボタンから選択クラスを削除","      sizeButtons.forEach(btn => btn.classList.remove(\"active\"));","      // クリックされたボタンに選択クラスを追加","      this.classList.add(\"active\");","      // 隠しフィールドにサイズを設定","      selectedSizeInput.value = this.dataset.size;","      // エラーメッセージを非表示に","      errorMessage.style.display = \"none\";","    });","  });","","  form.addEventListener(\"submit\", function(event) {","    if (selectedSizeInput.value === \"\") {","      // サイズが選択されていない場合、フォーム送信をキャンセルしエラーメッセージを表示","      event.preventDefault();","      errorMessage.style.display = \"block\";","    }","  });","});"],"id":19},{"start":{"row":22,"column":0},"end":{"row":23,"column":0},"action":"remove","lines":["",""]},{"start":{"row":21,"column":0},"end":{"row":22,"column":0},"action":"remove","lines":["",""]},{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":19,"column":3},"end":{"row":20,"column":0},"action":"remove","lines":["",""],"id":20}],[{"start":{"row":19,"column":3},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":21}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":17},"end":{"row":16,"column":17},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1716810450716,"hash":"42de21215dfb0516446470e13a1b92212ab5d592"}