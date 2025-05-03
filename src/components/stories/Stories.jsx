import './stories.css'

// Importaciones de Swiper
import { Swiper, SwiperSlide } from "swiper/react"

// Importaciones de CSS necesarias
import "swiper/css"

// Fake Api
import StoriesData from "../../FackApis/StoriesData"

// Componentes
import UserStory from "./UserStory"

export default function Stories() {
  return (
    <div className="stories">
      <UserStory />

      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        style={{ width: "80%" }}
      >
        {StoriesData.map((story) => (
          <SwiperSlide>
            <div className="story" key={story.id}>
              <div className="user">
                <img src={story.storyProfile} alt="" />
              </div>
              <img src={story.story} alt="" />
              <h5>{story.name}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
