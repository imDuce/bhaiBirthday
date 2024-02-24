import React, { useEffect } from 'react';
import '../style.css';
import cover from './cover9.jpg'

function CardUI() {


    var i = 0;
    var txt1 = "                                     Hi oijrjrjtij9ij.....!  <<               gggggggggjgjgjgdlijiggijg. <<<                jhoitjhrtijhorihotrobotrh...!                                                                           > ffgiifnvirenvernvrjnvilegienjv jrnnrpunrivjn;vuru;;rwn.  <<                  jnnvnvnnvke v;o g gorijgriprigp9rug....! <<                           jfnirjnvinrrrrrrrrrrrrrrrrreknv;ern; jn eijn nj ...!                                                     > Everything about you is always intresting for me...!                     << kjnrrjvvvvvvvvvvvvvvvvvvvvvveijnvin r nvuenvurnvurnvp9unrv ...!                                                     > oirvvvvvvvvvvvvvvvvvvvveivor ivo rvhurevurvir....!                    << kmrieivjvhuiivueugrhgoiuhcgor hiurliqvnrlngour....!                                                             >thank you.....! |                  <<<< uhgeg9ugw9ugutngoutgn ...!";
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
