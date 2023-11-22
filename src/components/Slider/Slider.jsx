import './Slider.css';
import img1 from '../../../public/images/img-1.jpg';
import img2 from '../../../public/images/img-2.jpg';
import img3 from '../../../public/images/img-3.jpg';
import img4 from '../../../public/images/img-4.jpg';
import img5 from '../../../public/images/img-5.jpg';
import sliderData from '../../data/sliderData';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';

import { useState , useRef  } from 'react';

const Slider = () => {
	const [index, setIndex] = useState(0);
	const imgArr = [img1, img2, img3, img4, img5];
    const imgContainerRef = useRef();

	const handlePrev = () => {
        if(imgContainerRef.current.classList.contains('active')) return
		if (index === 0) {
			setIndex(sliderData.length - 1);
		} else {
			setIndex(index - 1);
		}
        imgContainerRef.current.classList.add('active')
        setTimeout(()=>{
            imgContainerRef.current.classList.remove('active')
        } , 500)
	};
	const handleNext = () => {
		if (index === sliderData.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
        imgContainerRef.current.classList.add('active')
        setTimeout(()=>{
            imgContainerRef.current.classList.remove('active')
        } , 500)
	};
	return (
		<div className="slider">
			<p className="slider-info">
				{index + 1}/{sliderData.length}
			</p>
			<div className="slider-img-container" ref={imgContainerRef}>
				<img src={imgArr[index]} alt={sliderData[index].description} />
				<p className="slider-img-description">
					{sliderData[index].description}
				</p>
			</div>
			<button onClick={handlePrev} className="slider-prevBtn slider-btn">
				<img src={leftArrow} alt="previous button" />
			</button>
			<button onClick={handleNext} className="slider-nextBtn slider-btn">
				<img src={rightArrow} alt="next button" />
			</button>
		</div>
	);
};
export default Slider;
