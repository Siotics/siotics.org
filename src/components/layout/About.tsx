import GalleryCarousel from "@/components/ui/GalleryCarousel"

export default function About() {
  const images = [
    "/images/gallery/image1.webp",
    "/images/gallery/image2.webp",
    "/images/gallery/image3.webp",
  ]

  return (
    <div
      className="relative min-h-screen bg-gradient-to-bl from-gray-600/20 to-black text-white overflow-hidden"
      id="about"
    >
      <div className="mx-10 sm:my-24">
        <h2 className="text-3xl font-bold tracking-tight leading-tight text-center sm:text-5xl">
          About <br />
          <span className="text-2xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent sm:text-4xl">
            System Internet of Things <br className="sm:hidden"/> and Robotics
          </span>
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-12 sm:px-10">
        <div className="m-10 sm:m-0 sm:w-1/2 sm:max-w-lg">
          <GalleryCarousel images={images}/>
        </div>

        <div className="mx-10 sm:m-0 sm:w-1/2 sm:max-w-lg">
          <p className="leading-relaxed sm:text-xl">
            <span className="font-bold">Siotics</span> (System Internet of Things and Robotics) is an extracurricular club and organization at State Vocational High School 1 Jakarta, founded in 2021. We are dedicated to fostering innovation and collaboration in the fields of IoT systems and robotics.
          </p>
        </div>
      </div>
    </div>
  )
}
