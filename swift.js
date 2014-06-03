(function () {
    var innovationList = [
            'dynamic lib loading',
            'functional programming',
            'no semicolons',
            'an interactive playground',
            'functions',
            'variables',
            'functions as return values',
            'types',
            'overflow operators',
            'touples',
            'labeled statements',
            'postfix expressions',
            'numeric type conversion',
            'booleans',
            'local type inference',
            'type aliases',
        ],
        bullshitList = [
            'building an alternative to the web. Native apps without installs!',
            'curing cancer.',
            'going to Mars.',
            'meeting the first alien.',
            'discovering the 8th continent.',
            'cloudifying every device.',
            'gamifying your scooter driving experience.',
            'integrating user-centred networking.',
            'engaging user-contributed network effects.',
        ],
        innSpan = document.getElementById('innovation'),
        bsSpan = document.getElementById('bs'),
        lastIn = 0,
        lastBs = 0;

        function setText() {
            var newIn = rand(innovationList.length, lastIn),
                newBs = rand(bullshitList.length, lastBs);

            innSpan.innerText = innovationList[newIn];
            bsSpan.innerText = bullshitList[newBs];

            lastIn = newIn;
            lastBs = newBs;
        }

        setText();
        document.getElementById('btnNext').addEventListener('click', setText);
        document.getElementById('btnTweet').addEventListener('click', function () {
            var text = document.getElementsByClassName('banner')[0].innerText;
            var url = 'https://twitter.com/share?url=http%3A%2F%2Fswiftlytothefuture.com&text=' + text + '&hashtags=swiftlang';
            window.open(url, '_blank');
        });


        function rand(upper, omit) {
            var num = Math.floor(Math.random() * upper);

            while (num === omit) {
                num = Math.floor(Math.random() * upper);
            }

            return num;
        }
})();