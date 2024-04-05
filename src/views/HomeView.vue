<template>
  <div id="home">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/">Home</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="particles">
      <vue-particles
            id="tsparticles"
            class="tsparticles"
            :particlesLoaded="particlesLoaded"
            :options="options"
        />
    </div>
    <div class="banner">
      <div class="banner-text">
        <h1>前端工程師-許雅棠</h1>
        <h2>在代碼的世界裡不斷成長，追求技術上的卓越。</h2>
        <h2>我的旅程才剛開始，一起來探索更多可能！</h2>
      </div>
    </div>
    <!--end of banner-->
    <main>
      <div class="main-experience text-container">
      <h3>工作經歷</h3>
      <ul class="exp-list">
        <li class="exp-data" v-for="(item,index) in expData" :key="`exp-${index}`">
        <div class="data-time">
          <p>{{ item.start }}</p>
          <p>{{ item.end }}</p>
        </div>
        <div class="data-main">
          <h4>
            <RiBuilding4Fill color="#D6AE88" size="20px"></RiBuilding4Fill>
            {{ item.company }}
          </h4>
          <h5>
            <RiBriefcase4Line color="#D6AE88" size="20px"></RiBriefcase4Line>
            {{ item.title }}
          </h5>
          <ul>
            <li v-for="(desItem,desIndex) in item.des" :key="`des-${desIndex}`">{{ desItem }}</li>
          </ul>
        </div>
      </li>
      </ul>
    </div>
    <div class="main-skill text-container">
      <div class="skill-content">
        <h3>專業技能</h3>
        <ul class="content-list">
          <li class="list-card" v-for="(skillItem,skillIndex) in skillData" :key="`skillItem-${skillIndex}`">
              <h4>{{ skillItem.title }} <span>{{ skillItem?.familiar }}</span></h4>
              <ul class="card-skill">
                <li v-for="(skill,skillIndex) in skillItem.skills" :key="`skill-${skillIndex}`">{{ skill }}</li>
              </ul>
              <ul class="card-des">
                <li v-for="(des,desIndex) in skillItem.des" :key="`skillDes-${desIndex}`">{{ des }}</li>
              </ul>

          </li>
        </ul>
      </div>
    </div>
    </main>

  </div>
</template>

<script>
// import { loadFull } from 'tsparticles'
import experience from '../config/experience.json'
import skillData from '../config/skill.json'
import { RiBuilding4Fill, RiBriefcase4Line } from '@remixicon/vue'

export default {
  components: {
    RiBuilding4Fill,
    RiBriefcase4Line
  },
  data () {
    return {
      particlesLoaded: async (container) => {
        console.log('particles contaainer loaded', container)
      },
      options: {
        background: {
          color: {
            // value: '#6d6daa'
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            }
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#6d6daa'
          },
          links: {
            color: '#6d6daa',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'bounce',
            random: false,
            speed: 4,
            straight: false
          },
          number: {
            density: {
              enable: true
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 5 }
          }
        },
        detectRetina: true

      },
      expData: experience,
      skillData

    }
  },
  mounted () {
    // const particlesInit = async (engine) => {
    //   await loadFull(engine)
    // }
    // const particlesLoaded = async (container) => {
    //   console.log('particles contaainer loaded', container)
    // }
  }
}
</script>

<style>
@import "../style/HomeView.scss";
</style>
