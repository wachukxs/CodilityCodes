function BG(N){

    // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-3.php
    // https://codepen.io/w3resource/pen/Qxgpzw
    // console.log(N, parseInt(N, 10).toString(2)); // N.toString(2) does the trick too

    var k = parseInt(N, 10).toString(2);
    var t = Array.from(k)
    // console.log(t, t.indexOf('0'));
    var r = new Array;
    
    
    
    if (t.includes('0')) {
        let i = 0;
        for (let index = t.indexOf('0'); index < t.lastIndexOf('1') + 1; index++) {
            // console.log('current index:', index)
            
            const element = t[index];
            // console.log('current element:', element)
            if (element == '0') {
                i = i + 1;
            } else {
                r.push(i)
                // console.log(i) // 'num:'
                // calling BG(9); makes new index -1, why?

                // recalibrate i
                
                if (t.indexOf('0', index) != -1) {
                    i = 1;
                    index = t.indexOf('0', index)
                }
                // console.log('new index:', index)
            }
            
            
        }
        // https://stackoverflow.com/a/52446467
        console.log(...r)
    } else {
        console.log(0); // 'uhmm, nothing'
    }
    
}

BG(876);
