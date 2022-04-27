import { useEffect, useRef, useState } from 'react';
import LazyLoad from 'react-lazy-load';

export default function LazyPreLoad() {

  const divRef = useRef<HTMLDivElement>(null)
  const [imgTag, setImgTag] = useState<HTMLImageElement>()

  useEffect(() => {
    const img = new Image()
    img.src = 'http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg'
    img.onload = () => {
      setImgTag(img)
    }
  })

  const onClickPreload = () => {
    if(imgTag) divRef.current?.appendChild(imgTag)
  }


  return (
    <div>
      <div>
      Lazy-Load! 
    스크롤을 내려 이미지를 로딩해보세요
    <div className="filler" />
    <LazyLoad style={{width:"500px", height:"500px"}}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale&format=webp' />
    </LazyLoad>
    <LazyLoad style={{width:"500px", height:"500px"}}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale&format=webp' />
    </LazyLoad>
    <LazyLoad style={{width:"500px", height:"500px"}}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale&format=webp' />
    </LazyLoad>
    <LazyLoad style={{width:"500px", height:"500px"}}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale&format=webp' />
    </LazyLoad>
    <LazyLoad style={{width:"500px", height:"500px"}}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale&format=webp' />
    </LazyLoad>
    <LazyLoad style={{width:"500px", height:"500px"}}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale&format=webp' />
    </LazyLoad>
    <LazyLoad style={{width:"500px", height:"500px"}}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale&format=webp' />
    </LazyLoad>
    <LazyLoad style={{width:"500px", height:"500px"}}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale&format=webp' />
    </LazyLoad>
    <LazyLoad style={{width:"500px", height:"500px"}}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale&format=webp' />
    </LazyLoad>
    <LazyLoad style={{width:"500px", height:"500px"}}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale&format=webp' />
    </LazyLoad>

    {/* <LazyLoad width={500} height={500}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale' />
    </LazyLoad>
    <LazyLoad width={500} height={500}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale' />
    </LazyLoad>
    <LazyLoad width={500} height={500}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale' />
    </LazyLoad>
    <LazyLoad width={500} height={500}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale' />
    </LazyLoad>
    <LazyLoad width={500} height={500}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale' />
    </LazyLoad>
    <LazyLoad width={500} height={500}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale' />
    </LazyLoad>
    <LazyLoad width={500} height={500}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale' />
    </LazyLoad>
    <LazyLoad width={500} height={500}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale' />
    </LazyLoad>
    <LazyLoad width={500} height={500}>
      <img src='https://img.huffingtonpost.com/asset/618cc2d026000093123cdf98.jpg?cache=xQWtHHJF1a&ops=scalefit_720_noupscale' />
    </LazyLoad> */}



    <div className="filler" />
    </div>
    <button onClick={onClickPreload}>이미지 보여주기</button>
    <div ref={divRef}></div>
  </div>
  )
}