import Image from 'next/image'

const ImageComponent = ({src}) => {
  return ( 

    <div className=' aos-init grid place-items-center pt-10' >
    <Image
    className=' rounded-xl '
    alt={src}
    src={src}
    width={1000}
    height={1000}
    style={{
      maxWidth: '90%',
      height: 'auto',
    }}
  />
    </div>

   );
}
 
export default ImageComponent;