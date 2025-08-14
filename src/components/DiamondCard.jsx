import CustomImage from "./customImage";

export default function DiamondCard({ image, altAttr, titleAttr, title }) {
  return (
    <div className="m-4 p-6">
      <div className="flex justify-center items-center mb-4">
        <CustomImage
          srcAttr={image}
          altAttr={altAttr}
          titleAttr={titleAttr}
          className="rounded-md"
          priority
        />
      </div>

      <h3 className="text-center text-xl 2xl:text-[24px] font-belleza pt-4">
        {title}
      </h3>
    </div>
  );
}
