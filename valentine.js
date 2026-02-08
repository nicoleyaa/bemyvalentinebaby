    function yesClicked() {
        document.body.innerHTML = `
            <div class="card">
                <h1>YAY!!! I LOVE YOU MY WIFE! 💕</h1>
                <p>
                    you just made my heart the happiest, Best Valentine ever hehe ✨ </p>

                <div class="photobooth">
                    <div class="photo-strip delay1">
                        <img src="pics1.jpg">
                        <img src="pics2.jpg">
                    </div>
                    <div class="photo-strip delay2">
                        <img src="pics3.jpg">
                        <img src="pics4.jpg">
                    </div>
                    <div class="photo-strip delay3">
                        <img src="pics5.jpg">
                        <img src="pics6.jpg">
                    </div>
                </div>

                <p class="love-text" style="margin-top:25px;">
                    flowers for you, my pretty baby
                    <img class="love-gif" src="flower.gif"> </p>
            </div>
            <div class="hearts" id="hearts"></div>
        `;
        setInterval(createHeart, 250);

    }

    function moveNo() {
        const noBtn = document.getElementById("no");
        noBtn.style.left = Math.random() * (window.innerWidth - 120) + "px";
        noBtn.style.top = Math.random() * (window.innerHeight - 60) + "px";
    }

    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (14 + Math.random() * 10) + "px";
        heart.style.animationDuration = (4 + Math.random() * 3) + "s";
        document.getElementById("hearts").appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }

    setInterval(createHeart, 350);
