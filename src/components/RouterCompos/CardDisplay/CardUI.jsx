import React, { useEffect } from 'react';
import '../style.css';
import cover from './cover9.jpg'

function CardUI() {


    var i = 0;
    var txt1 = "                                     Wishing you all the success and joy in life  <<               Here's to conquering forthcoming hurdles of life ...  <<<                TOGETHER ... !                                      >Cheers to another year of epicness !                   <<<<  Janamdin Mubaarak!";
    var speed = 160;
    function typeWriter() {
        if (i < txt1.length) {
            if (txt1.charAt(i) == '<')
                document.getElementById("text1").innerHTML += '</br>'
            else if (txt1.charAt(i) == '>')
                document.getElementById("text1").innerHTML = ''

            else
                document.getElementById("text1").innerHTML += txt1.charAt(i);
            i++;
            setTimeout(typeWriter, speed);  
        }
    }

    useEffect(()=>{
        typeWriter();
    },[]);

    return (
        <div className="bdy">

            <div className="envelope">
            </div>

            <div className="card">
                <div className="back"></div>
                <div className="front">
                    <div className="f-box">
                        <img src={cover} alt="eee" id='cover' />
                    </div>
                </div>



                <div className="container">

                    <p id="text1"></p>

                </div>
            </div>

        </div>
    );
}

export default CardUI
