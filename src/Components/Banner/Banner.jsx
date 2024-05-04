import { Button, Carousel, IconButton, Typography } from "@material-tailwind/react";


const Banner = () => {
  return (
    <>
        <Carousel
        loop="true"
        autoplay="true"
        autoplayDelay={6000}
        
      className="rounded-xl mt-12"
      prevArrow={({ handlePrev,  }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          
          onClick={handlePrev}
          className="!absolute  right-64 bottom-28 bg-[rgba(255,56,17,1)] rounded-full p-4"
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute  !right-48 bg-[rgba(255,255,255,0.2)] rounded-full p-4 bottom-28"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div className={`bg-[url('https://i.postimg.cc/pL96nDxq/5.jpg')] h-[520px] w-full bg-cover bg-center bg-no-repeat relative object-cover `}>
        <div className=" bg-gradient-to-r from-[#151515] to-[#15151503] inset-0 absolute grid h-full w-full items-end ">
        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
        </div>
        
      </div>
      <div className={`bg-[url('https://i.postimg.cc/PfQstzrD/1.jpg')] h-[520px] w-full bg-cover bg-center bg-no-repeat relative object-cover `}>
        <div className=" bg-gradient-to-r from-[#151515] to-[#15151503] inset-0 absolute grid h-full w-full items-end ">
        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
        </div>
        
      </div>
      <div className={`bg-[url('https://i.postimg.cc/63hjNcL5/4.jpg')] h-[520px] w-full bg-cover bg-center bg-no-repeat relative object-cover `}>
        <div className=" bg-gradient-to-r from-[#151515] to-[#15151503] inset-0 absolute grid h-full w-full items-end ">
        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
        </div>
        
      </div>
      <div className={`bg-[url('https://i.postimg.cc/ydKQ5tRb/3.jpg')] h-[520px] w-full bg-cover bg-center bg-no-repeat relative object-cover `}>
        <div className=" bg-gradient-to-r from-[#151515] to-[#15151503] inset-0 absolute grid h-full w-full items-end ">
        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
        </div>
        
      </div>
      <div className={`bg-[url('https://i.postimg.cc/W4gY5TdZ/2.jpg')] h-[520px] w-full bg-cover bg-center bg-no-repeat relative object-cover `}>
        <div className=" bg-gradient-to-r from-[#151515] to-[#15151503] inset-0 absolute grid h-full w-full items-end ">
        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
        </div>
        
      </div>
      <div className={`bg-[url('https://i.postimg.cc/MHKsZBd0/6.jpg')] h-[520px] w-full bg-cover bg-center bg-no-repeat relative object-cover `}>
        <div className=" bg-gradient-to-r from-[#151515] to-[#15151503] inset-0 absolute grid h-full w-full items-end ">
        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
        </div>
        
      </div>
    </Carousel>
    </>
  );
};

export default Banner;
 