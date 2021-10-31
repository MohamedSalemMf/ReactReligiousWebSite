import React, { Component } from 'react';
import Mosque from "../../Video/Mosque.mp4";
import HomeStyle from './HomeStyle.module.css';
import Typed from 'react-typed';

class Home extends Component {
    render() {
        return (
            <>
                <div className="carousel-item active">
                    <div className={`${HomeStyle.slidr}`}>
                        <div className={`${HomeStyle.layer}`}>
                            <video autoPlay loop muted className={`${HomeStyle.videoMonster} position-absolute`}>
                                <source src={Mosque} type="video/mp4" />
                            </video>
                            <div className="d-flex justify-content-center align-items-center text-white vh-100 text-center">
                                <div className={`${HomeStyle.caption} text-center`}>
                                    <h1 className={`${HomeStyle.animated}`}>الله </h1>
                                    <h2 className={`${HomeStyle.animated} `}> نور السماوات والأرض </h2>
                                    <div className={`${HomeStyle.buttonEnd} ${HomeStyle.animated} `}>
                                        <p className={`${HomeStyle.animated}  `}>اللهم صلي وسلم على نبينا محمد وعلى آله وصحبه أجمعين وسلم تسليما كثيرا إلى يوم الدين</p>
                                    </div>
                                    <div className="`${HomeStyle.tsbh}  `}">

                                        <div className={`${HomeStyle.Typeds}  `}>
                                            <Typed
                                                strings={[
                                                    ' سُبْحَانَ اللَّهِ',
                                                    'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ',
                                                    'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ  ',
                                                    ' سُبْحَانَ اللهِ العَظِيمِ وَبِحَمْدِهِ ',
                                                    ' سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ ',
                                                    ' لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ. ',
                                                    ' لا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ ',
                                                    ' الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ  ',
                                                    ' الْلَّهُم صَلِّ وَسَلِم وَبَارِك عَلَى سَيِّدِنَا مُحَمَّد ',
                                                    ' أستغفر الله ',
                                                    ' سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ ',
                                                    ' لَا إِلَهَ إِلَّا اللَّهُ ',
                                                    ' الْلَّهُ أَكْبَرُ ',
                                                    ' سُبْحَانَ اللَّهِ ، وَالْحَمْدُ لِلَّهِ ، وَلا إِلَهَ إِلا اللَّهُ ، وَاللَّهُ أَكْبَرُ ، اللَّهُمَّ اغْفِرْ لِي ، اللَّهُمَّ ارْحَمْنِي ، اللَّهُمَّ ارْزُقْنِي. ',
                                                    ' الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ. ',
                                                    ' اللَّهُ أَكْبَرُ كَبِيرًا ، وَالْحَمْدُ لِلَّهِ كَثِيرًا ، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً.  ',
                                                    ' اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.  ',
                                                ]}
                                                typeSpeed={50}
                                                backSpeed={10}
                                                loop
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;