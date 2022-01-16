var button=document.createElement("button");
button.innerHTML="Click-me";
button.addEventListener('click',fun);
document.body.append(button);

function fun(){
    setTimeout(() => {
        var a=document.createElement('div');
        a.innerHTML="10";
        document.body.append(a);
        setTimeout(() => {
            var a=document.createElement('div');
            a.innerHTML="9";
            document.body.append(a);
            setTimeout(() => {
                var a=document.createElement('div');
                a.innerHTML="8";
                document.body.append(a);
                setTimeout(() => {
                    var a=document.createElement('div');
                    a.innerHTML="7";
                    document.body.append(a);
                    setTimeout(() => {
                        var a=document.createElement('div');
                        a.innerHTML="6";
                        document.body.append(a);
                        setTimeout(() => {
                            var a=document.createElement('div');
                            a.innerHTML="5";
                            document.body.append(a);
                            setTimeout(() => {
                                var a=document.createElement('div');
                                a.innerHTML="4";
                                document.body.append(a);
                                setTimeout(() => {
                                    var a=document.createElement('div');
                                    a.innerHTML="3";
                                    document.body.append(a);
                                    setTimeout(() => {
                                        var a=document.createElement('div');
                                        a.innerHTML="2";
                                        document.body.append(a);
                                        setTimeout(() => {
                                            var a=document.createElement('div');
                                            a.innerHTML="1";
                                            document.body.append(a);
                                            setTimeout(() => {
                                                var a=document.createElement('h1');
                                                a.innerHTML="Happy Independance Day";
                                                document.body.append(a);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}