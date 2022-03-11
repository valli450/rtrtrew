import React, { useState } from 'react';
import './Main-Top.css';


function MainTop() {
    const [pageviews, setPageviews] = useState('100K');
    const [amountMonth, setAmountMonth] = useState('$16.00');
    const [period, setPeriod] = useState('month');


    function AddPrice(){
        let get = document.getElementById("inputline").value;
        let checked = document.getElementById("discount-input");
        if (get < 10){
            setPageviews('10K');
            if (checked.checked){
                setAmountMonth(`$${(8*12)-((8*12)*0.25)}.00`);
                setPeriod('year');
            }else{
                setAmountMonth('$8.00');
                setPeriod('month');
            }   
        }else if (10 < get && get < 37){
            setPageviews('50K');
            if (checked.checked){
                setAmountMonth(`$${(12*12)-((12*12)*0.25)}.00`);
                setPeriod('year');
            }else{
                setAmountMonth('$12.00');
                setPeriod('month');
            }   
        }else if(37 < get && get < 63) {
            setPageviews('100K');
            if (checked.checked){
                setAmountMonth(`$${(16*12)-((16*12)*0.25)}.00`);
                setPeriod('year');
            }else{
                setAmountMonth('$16.00');
                setPeriod('month');
            }   
        }else if(63 <  get && get < 90 ){
            setAmountMonth('$24.00');
            setPageviews('500K');
            if (checked.checked){
                setAmountMonth(`$${(24*12)-((24*12)*0.25)}.00`);
                setPeriod('year');
            }else{
                setAmountMonth('$24.00');
                setPeriod('month');
            }   
        }else if(90 < get && get < 100) {
            setAmountMonth('$36.00');
            setPageviews('1m');
            if (checked.checked){
                setAmountMonth(`$${(36*12)-((36*12)*0.25)}.00`);
                setPeriod('year');
            }else{
                setAmountMonth('$36.00');
                setPeriod('month');
            }   
        }


        var position = document.getElementById("inputline");
        var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + get + '%, hsl(224, 65%, 95%)' + get + '%)';
        position.style.background = color;
    }

    return(
        <div className="section">
            <div className="section__head">
                <p>{pageviews} Pageviews</p>
            </div>
            <form className="section__input">
                <input type="range"  min="0" max="100" id="inputline"  onChange={AddPrice} />
            </form>
            <div className="section__monthly">
                <p className="bold">{amountMonth}</p>
                <p>/{period}</p>
            </div>
            <div className="section__pref">
                <p>Monthly Billing</p>
                <input type="checkbox" id="discount-input" onChange={AddPrice} />
                <div className="yearly">
                    <p className="yearly__text">Yearly Billing</p>
                    <p className="yearly__discount"><span className="mobile-minus">-</span>25% <span className="hidden-word">discount</span></p>
                </div>
            </div>
        </div>
    )
};


export default MainTop;