        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "幸せ"; // デフォルトの値

            if (colour === "楽" && number === 0) {
                result = "幸せ";
            } else if (colour === "楽" && number === 1) {
                result = "少し大変";
            } else if (colour === "楽" && number === 2) {
                result = "苦しい";
            } else if (colour === "苦しむ" && number === 0) {
                result = "とても幸せ";
            } else if (colour === "苦しむ" && number === 1) {
                result = "楽しい";
            } else if (colour === "苦しむ" && number === 2) {
                result = "すごく大変";
            } else if (colour === "平凡" && number === 0) {
                result = "元気百倍";
            } else if (colour === "平凡" && number === 1) {
                result = "幸せな一日";
            } else if (colour === "平凡" && number === 2) {
                result = "無気力";
            }

            document.getElementById('result-output').innerText = "今日の一日は【" + result + "】です";
        }
