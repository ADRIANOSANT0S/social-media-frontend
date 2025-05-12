import Image from 'next/image'

type PictureProps = {
  src: string
  alt: string
  className?: string
  quality?: 40 | 50 | 60 | 70 | 80 | 90 | 100
}

const Picture = ({ src, alt, className, quality }: PictureProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
      quality={quality}
      className={`object-cover h-full w-full ${className}`}
    />
  )
}
