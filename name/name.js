function nameRplc($elmt, $idx, $scds, $asl){
    
    let ltrArr =  ['ض', '٢', '٣', 'ء', 'ق', 'ع', 'أ', '١', 'ش', '٤', 'ك', 'ج', 'ث', 'ئ', '٥',
                   'آ', 'ط', 'ص', 'د', 'ن', 'ه', '٤', 'ر', '٧', 'ذ', 'ف', 'م', '٦', 'ٱ', 'غ', 'و',
                   'ا', 'ظ', 'ل', '٣', 'ز', '٦', '٠', '١', 'ش', '٤', 'ك', 'ج', 'ث', 'ئ', '٥', 'ض',
                   'ض', '٢', '٣', 'ء', 'ق', 'ع', 'أ', '١', 'ش', '٤', 'ك', 'ج', 'ث', 'ئ', '٥',
                   'آ', 'ط', 'ص', 'د', 'ن', 'ه', '٤', 'ر', '٧', 'ذ', 'ف', 'م', '٦', 'ٱ', 'غ', 'و',
                   'ا', 'ظ', 'ل', '٣', 'ز', '٦', '٠', '١', 'ش', '٤', 'ك', 'ج', 'ث', 'ئ', '٥', 'ض',
                   'ض', '٢', '٣', 'ء', 'ق', 'ع', 'أ', '١', 'ش', '٤', 'ك', 'ج', 'ث', 'ئ', '٥',
                   'آ', 'ط', 'ص', 'د', 'ن', 'ه', '٤', 'ر', '٧', 'ذ', 'ف', 'م', '٦', 'ٱ', 'غ', 'و',
                   'ا', 'ظ', 'ل', '٣', 'ز', '٦', '٠', '١', 'ش', '٤', 'ك', 'ج', 'ث', 'ئ', '٥', 'ض',
                   'ض', '٢', '٣', 'ء', 'ق', 'ع', 'أ', '١', 'ش', '٤', 'ك', 'ج', 'ث', 'ئ', '٥',
                   'آ', 'ط', 'ص', 'د', 'ن', 'ه', '٤', 'ر', '٧', 'ذ', 'ف', 'م', '٦', 'ٱ', 'غ', 'و',
                   'ا', 'ظ', 'ل', '٣', 'ز', '٦', '٠', '١', 'ش', '٤', 'ك', 'ج', 'ث', 'ئ', '٥', 'ض'];


    let changing = function (i = $idx) {
        setTimeout(function() {
            document.querySelector($elmt).innerHTML = ltrArr[i];
            if (i < ltrArr.length) {
                i++;
                changing(i);
            }
            else{
                document.querySelector($elmt).innerHTML = $asl;
            }
        }, $scds);
    };
        document.querySelector($elmt).innerHTML = ltrArr[8];

    changing();
}
 
let $f01 = document.querySelector('#f1');
let $f1 = $f01.textContent;
nameRplc('#f1', 120, 85, $f1);

let $f02 = document.querySelector('#f2');
let $f2 = $f02.textContent;
nameRplc('#f2', 105, 85, $f2);

let $f03 = document.querySelector('#f3');
let $f3 = $f03.textContent;
nameRplc('#f3', 90, 85, $f3);

let $f04 = document.querySelector('#f4');
let $f4 = $f04.textContent;
nameRplc('#f4', 75, 85, $f4);

let $f05 = document.querySelector('#f5');
let $f5 = $f05.textContent;
nameRplc('#f5', 60, 85, $f5);

let $f06 = document.querySelector('#f6');
let $f6 = $f06.textContent;
nameRplc('#f6', 45, 85, $f6);

let $f07 = document.querySelector('#f7');
let $f7 = $f07.textContent;
nameRplc('#f7', 30, 85, $f7);

let $f08 = document.querySelector('#f8');
let $f8 = $f08.textContent;
nameRplc('#f8', 15, 85, $f8);

let $f09 = document.querySelector('#f9');
let $f9 = $f09.textContent;
nameRplc('#f9', 0, 85, $f9);