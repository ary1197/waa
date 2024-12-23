        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "幸せ"; // デフォルトの値

            if (colour === "赤" && number === 0) {
                result = "幸せ";
            } else if (colour === "赤" && number === 1) {
                result = "少し大変";
            } else if (colour === "赤" && number === 2) {
                result = "苦しい";
            } else if (colour === "ピンク" && number === 0) {
                result = "少し大変";
            } else if (colour === "ピンク" && number === 1) {
                result = "楽";
            } else if (colour === "ピンク" && number === 2) {
                result = "すごく大変";
            } else if (colour === "黒" && number === 0) {
                result = "苦しい";
            } else if (colour === "黒" && number === 1) {
                result = "幸せな一日";
            } else if (colour === "黒" && number === 2) {
                result = "楽";
            }

            document.getElementById('result-output').innerText = "今日の一日は【" + result + "】です";
        }
