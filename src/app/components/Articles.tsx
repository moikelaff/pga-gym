import Image from "next/image";

const Articles = () => {
  return (
    <div className="bg-brandLightPink">
      <div className="max-w-full mx-auto px-2 py-2">
        {/* Grid layout: 3 images and 1 text box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
          {/* First Image (Article 1) */}
          <div className="relative w-full">
            <Image
              src="/article_1.svg"
              alt="Article 1"
              layout="responsive"
              width={1500}
              height={1200}
              className="object-cover w-full"
            />
          </div>

          {/* Second Image (Article 2) */}
          <div className="relative w-full">
            <Image
              src="/article_2.svg"
              alt="Article 2"
              layout="responsive"
              width={1500}
              height={1200}
              className="object-cover w-full"
            />
          </div>

          {/* Third Image (Article 3) */}
          <div className="relative w-full">
            <Image
              src="/article_3.svg"
              alt="Article 3"
              layout="responsive"
              width={1500}
              height={1200}
              className="object-cover w-full"
            />
          </div>

          {/* Last Grid Box for "Read Our Articles" */}
          <div className="bg-brandHotPink flex items-center justify-center p-6 w-full">
            <h2 className="text-7xl font-bold  text-brandWhite text-center">
              Read Our Articles
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
