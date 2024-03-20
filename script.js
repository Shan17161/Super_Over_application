let toss = Math.ceil(Math.random() * 2);
console.log(toss);
if (toss === 1) {
    document.querySelector('.csk-btn').innerHTML = 'CSK Batting';
} else if (toss === 2) {
    document.querySelector('.csk-btn').innerHTML = 'MI Batting';
}

let index = 1;
let indx = 7;
let csk_total = 0;
let mi_total = 0;
const array1 = [];
const array2 = [];
document.querySelector('.csk-btn').addEventListener('click', () => {
    let score = Math.floor(Math.random() * 7);
    if (document.querySelector('.csk-btn').innerHTML == 'CSK Batting' && index <= 6) {
        if (array1.length != 2) {
            if (score === 0) {
                document.querySelector(`#sul-${index}`).innerHTML = 'W';
                array1.push('W');
            } else if (score > 0 && score < 7) {
                document.querySelector(`#sul-${index}`).innerHTML = score;
                csk_total += score;
                document.querySelector('.r-1').innerHTML = csk_total;
            }
        }
        index++;
    } else if (document.querySelector('.csk-btn').innerHTML == 'MI Batting') {
        if (array2.length != 2) {
            if (score === 0) {
                document.querySelector(`#sul-${indx}`).innerHTML = 'W';
                array2.push('W');
            } else if (score > 0 && score < 7) {
                document.querySelector(`#sul-${indx}`).innerHTML = score;
                mi_total += score;
                document.querySelector('.r-2').innerHTML = mi_total;
            }
        }
        indx++;
    }

    let csk_number = document.querySelector('#sul-6').innerHTML;
    if (csk_number !== '_' || array1.length == 2) {
        document.querySelector('.csk-btn').innerHTML = 'MI Batting';
    }

    let mi_number = document.querySelector('#sul-12').innerHTML;
    if (mi_number !== '_' || array2.length == 2) {
        document.querySelector('.csk-btn').innerHTML = 'CSK Batting';
    }

    if ((array1.length == 2 && array2.length == 2) || (array1.length == 2 && mi_number !== '_') || (array2.length == 2 && csk_number !== '_')) {
        if (csk_total > mi_total) {
            document.querySelector('.csk-wins').innerHTML = 'CSK Wins!!!';
        } else if (mi_total > csk_total) {
            document.querySelector('.mi-wins').innerHTML = 'MI Wins!!!';
        } else {
            document.querySelector('.draw').innerHTML = 'Draw Match!!!';
        }
    }
    else if(csk_number!='_' && mi_number !="_")
    {
        if (csk_total > mi_total) {
            document.querySelector('.csk-wins').innerHTML = 'CSK Wins!!!';
        } else if (mi_total > csk_total) {
            document.querySelector('.mi-wins').innerHTML = 'MI Wins!!!';
        } else {
            document.querySelector('.draw').innerHTML = 'Draw Match!!!';
        }
    }
    if (index >= 6 && array1.length == 2 && array2.length == 2) {
        document.querySelector('.draw').innerHTML = 'Draw Match!!!';
    }
});

document.querySelector('.mi-btn').addEventListener('click', () => {
    window.location.reload();
});
