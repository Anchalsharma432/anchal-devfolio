import { PerspectiveCamera, Ring } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/Loader';
// import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';


const  Hero = () => {
    // const controls = useControls('HackerRooms',{
    //     positionX: { value: 2.5, min: -10, max: 10 },
    //     positionY: { value: 2.5, min: -10, max: 10 },
    //     positionZ: { value: 2.5, min: -10, max: 10 },
    //     rotationX: { value: 0, min: -10, max: 10 },
    //     rotationY: { value: 0, min: -10, max: 10 },
    //     rotationZ: { value: 0, min: -10, max: 10 },
    //     scaleX: { value: 1, min: -10, max: 10 },
       
    // });
    const isSmall = useMediaQuery({maxWidth:440});
    const isMobile = useMediaQuery({maxWidth:768});
    const isTablet = useMediaQuery({minWidth:768, maxWidth:1024});
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className='min-h-screen w-full flex flex-col relative' id='home'> 
    <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>Hi, I am Anchal<span className='waving-hand'>👋🏻</span></p>
        <p className='hero_tag text-gray_gradient'>Building Web Applications</p>
    </div>
    <div className='w-full h-full absolute inset-0 '>
        {/* <Leva /> */}
        <Canvas>
            <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
            <HeroCamera isMobile={isMobile}>
            <HackerRoom scale={sizes.deskScale}
             position={sizes.deskPosition} 
             rotation= {[0, -Math.PI, 0]}/>
             </HeroCamera>
            <group>
                <Target position = {sizes.targetPosition} />
                <ReactLogo position = {sizes.reactLogoPosition} />
                <Cube position = {sizes.cubePosition} />
                <Rings position = {sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
        </Canvas>
    </div>
    <div className='absolute bottom-1 right-0 left-0 w-full c-space'>
        <a href='#about' className='w-fit'>
            <Button name="Let's Work Together" isBeam containerClass="sm:w-fit w-full sm:min-w-96 bg-opacity-50"/>
        </a>
    </div>
    </section>
  )
}

export default  Hero;