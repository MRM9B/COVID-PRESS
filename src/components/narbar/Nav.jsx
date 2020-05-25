import React from 'react';
import styles from './Nav.module.css';

const Nav= ()=>{
    return(
        <div className={styles.whole}>
        <div className={styles.nav}>
            <h2 className={styles.logo}>COVID-19 PRESS</h2>
            <ul>
                <a href=""><li>ACCUEIL</li></a>
                <a href="https://www.google.com/search?biw=1536&bih=754&tbm=nws&ei=TdzJXr2vEeTIgweXko7QAw&q=corona+&oq=corona+&gs_l=psy-ab.3..0j0i10k1l2j0l3j0i10k1l2j0l2.7508.7508.0.9506.1.1.0.0.0.0.1780.1780.8-1.1.0....0...1c.1.64.psy-ab..0.1.1780....0.35NtbVL_pUw" target="_blank"><li>ACTUALITE</li></a>
                <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank"><li>SANTE</li></a>
                <a href="https://www.google.com/search?q=carte+covid+19+maroc&oq=cart&aqs=chrome.0.69i59j69i57j0l2j69i60l3j69i65.2661j0j7&sourceid=chrome&ie=UTF-8"  target="_blank"><li>COVID-19 MAROC</li></a>
            </ul>
        </div>
        
        </div>
    )
}
export default Nav;