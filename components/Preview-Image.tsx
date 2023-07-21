import NextImage from "next/image";

interface ImagePreviewProps {
  image: string;
}

const ImagePreview = ({ image }: ImagePreviewProps) => {
  return (
    <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
      <NextImage
        fill
        src={image}
        alt="Image"
        className="object-cover object-center"
      />
    </div>
  );
};

export default ImagePreview;
