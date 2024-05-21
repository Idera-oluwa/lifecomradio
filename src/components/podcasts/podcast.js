import React,{useState, useRef, useEffect} from 'react'
import moment from 'moment'
import ReactHowler from 'react-howler'
import { useRouter } from 'next/navigation';
import raf from 'raf'

const podcast = ({podcast, loading}) => {
  const router = useRouter();
  const {coverImage,createdAt,description,epDescription,slug,title} = podcast;
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false);
  const [seek, setSeek] = useState(0.0);
  const [rate, setRate] = useState(1);
  const [isSeeking, setIsSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
 const [song, setSong] = useState('')
 const [currentTime, setCurrentTime] = useState(0);

 const goBack = () => {
   router.back();
 };

 
 const distance = (seek/duration) * 100

  const togglePlay=()=>{
    setPlaying(!playing)
    setLoaded(true);
  }
  const playerRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseDownSeek = () => {
    clearInterval(rafRef.current);
    setIsSeeking(true);
  };

  const handleMouseUpSeek = (e) => {
   
  };

  const handleSeekingChange = (e) => {
    setSeek(parseFloat(e.target.value));
    playerRef.current.seek(e.target.value);
  };

  const renderSeekPos = () => {
     if (playerRef.current) {
      setSeek(playerRef.current.seek());
     }
    
  
  };
  const handleOnPlay = () => {
    setPlaying(true);
    const intervalId = setInterval(() => {
      setCurrentTime(playerRef.current?.seek());
      renderSeekPos();
    }, 1000); // Update current time and seek position every second
    return () => clearInterval(intervalId); // Cleanup the interval
  };

  const handleOnLoad = () => {
    setDuration(playerRef.current.duration());
  
  };
 
  useEffect(()=>{
      if(podcast.podcast !== undefined){
      setSong(podcast.podcast?.url)
      }
    
  },[podcast])
  const remainingMinutes = Math.floor((duration - currentTime) / 60);
  const remainingSeconds = Math.floor((duration - currentTime) % 60);
  const remainingTime = `${remainingMinutes} mins. ${remainingSeconds} sec`;
  return (
    <div  className='mt-[1.5rem] md:mt-[6rem]'>
      <img src='/images/explore/arrowback.png' alt='' className='ml-[5vw] md:hidden' onClick={goBack}/>
         <p className='mt-[1.5rem] md:mt-0 font-semibold text-white text-[20px] leading-[24px] ml-[5vw]'>Podcasts</p>
      <div className={`${playing? 'bg-gradient-to-r from-[#07277f7e] to-[#4e287d46] transition-all ease-out duration-500' : 'bg-gradient-to-r from-[#07277f52] to-[#2F3C3E82] transition-all ease-out duration-500'} bg-cover bg-center bg-no-repeat h-[250px] md:h-[403px] mt-[1.5rem] md:mt-[3rem] flex items-center relative`}>
        <img src='/images/podcasts/elipse-depth.svg' alt='' className='absolute right-0 z-[-5] md:w-[347px] md:h-[347px] w-[300.7px] h-[256.42px]'/>
      <div className='w-[90vw] mx-auto flex flex-row items-center gap-[1rem] md:gap-[3rem]'>
      <img src={coverImage?.url} alt='' className='w-[117px] h-[110.93px] md:w-[341px] md:h-[266px]'/>
      <div className=' md:mt-0'>
      <ReactHowler
          // src={[{ src: song, format: ['mp3'] }]}
          src={[song]}
          format={['mp3']}
          playing={playing}
          onLoad={handleOnLoad}
          onPlay={handleOnPlay}
          ref={playerRef}
        />
        <p className='font-medium text-[8px] md:text-[12px] text-[#F5F5F5] leading-[14.5px]'>Latest Episode</p>
        <p className='text-white text-[14px] md:text-[32px] font-extrabold leading-[17px] md:leading-[38.7px] mt-[0.3rem] md:mt-[0.7rem]'>{title}</p>
        <p className='text-white hidden md:block text-[16px] font-normal leading-[19px] mt-[0.9rem]'>{description}</p>
        <div className='flex flex-col-reverse md:flex-row md:items-center mt-[0rem] md:mt-[2rem]'>
      <div className='flex flex-row mt-[0.5rem] items-center md:mt-0 gap-[0.5rem] md:gap-0'>
      <div className='flex justify-center items-center w-[16px] h-[16px] md:w-[41px] md:h-[41px] rounded-full bg-[#000000] cursor-pointer' onClick={()=>togglePlay()}>
       <img src={playing? '/images/podcasts/pause.png':'/images/podcasts/play-white.svg'} alt='' className='w-[5.9px] h-[5px] md:w-[13px] md:h-[13px]'/>
       </div>
       <img src='/images/podcasts/like-red.svg' alt='' className='md:ml-[1.7rem] w-[13px] h-[12px] md:w-[34px] md:h-[31px] cursor-pointer'/>
       <img src='/images/podcasts/menu.svg' alt='' className='md:ml-[1.7rem] cursor-pointer md:w-[7px] md:h-[25.6px] w-[2.91px] h-[10.67px]'/>
      </div>
      <div className='flex flex-row items-center gap-[0.3rem] mt-[0.5rem] md:mt-0'>
      <p className='font-medium text-[#CCC9DC] text-[10px] md:text-[12px] leading-[14.5px] md:ml-[2rem]'>{moment(createdAt).format('MMMM YYYY')}</p>
      <img src='/images/home/bluedot.png' alt='' className='md:hidden w-[5px] h-[5px]'/>
       <p className='font-medium text-[#CCC9DC] text-[10px] md:text-[12px] leading-[14.5px] md:ml-[1.4rem]'>{remainingTime}</p>
      </div>
      </div>
  <input
    type='range'
    min='1'
    max={duration ? duration.toFixed(2) : 0}
    step='.01'
    
    value={seek}
    onChange={handleSeekingChange} 
    onMouseDown={handleMouseDownSeek}
      onMouseUp={handleMouseUpSeek}
    className={`${loaded? 'opacity-100' : 'opacity-0'} appearance-none bg-transparent cursor-pointer h-[3px] md:h-[6px] w-[104px] md:w-[286px] mt-[1rem] md:mt-[2rem] rounded-[4px]`}
    style={{
      background: `linear-gradient(to right, #004F0D 0%, #004F0D ${distance}%, #CCC9DC ${distance}%, #CCC9DC 100%)`,
      WebkitAppearance: 'none !important',
      MozAppearance: 'none !important',
      appearance: 'none !important',
    }}
  />
      {/* <div className='bg-[#CCC9DC] h-[6px] w-[286px] mt-[2rem] rounded-[4px]'
      onMouseMove={handleSeekingChange}
      onMouseDown={handleMouseDownSeek}
      onMouseUp={handleMouseUpSeek}
      >
        <div className={`h-full bg-[#004F0D] rounded-[4px]`}
        style={{ width: `${distance}%` }}></div>
      </div>  */}
       {/* <div className='seek'>
        <label>
          Seek:
          <span className='slider-container'>
            <input
              type='range'
              min='1'
              max={duration ? duration.toFixed(2) : 0}
              step='.01'
              value={seek}
              onChange={handleSeekingChange}
              onMouseDown={handleMouseDownSeek}
              onMouseUp={handleMouseUpSeek}
            />
          </span>
        </label>
      </div> */}
      </div>
      </div>
      </div>
      <div className='ml-[5vw] mt-[3rem]'>
      <p className='text-white font-bold text-[12px] md:text-[16px] leading-[19px]'>Episode Description</p>
      <p className='text-[#CCC9DC] font-normal text-[10px] md:text-[16px] leading-[19px] w-[90%] md:w-[540px] mt-[0.8rem]'>{epDescription}</p>
      </div>
    </div>
    
  )
}

export default podcast